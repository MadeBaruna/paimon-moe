# HoYoverse browser connector (development preview)

This is the companion extension for **Wish Counter → Auto Import → HoYoverse account**.
It uses the browser's existing HoYoverse session to list Genshin characters and
create a temporary wish-history key. No game installation is needed on the
computer used for import.

## Build and install

Use Node.js 20+ and the dependencies pinned by `pnpm-lock.yaml`. ZIP packaging
runs entirely in Node.js. From the repository root:

```sh
# Local preview: production origins plus localhost:3000 and 127.0.0.1:3000
node browser-connector/build.mjs --dev

# Production-origin packages: paimon.moe and www.paimon.moe only
node browser-connector/build.mjs
```

The unpacked extensions and ZIPs are written to `browser-connector/dist-dev/`
or `browser-connector/dist/`. ZIP copies in `static/browser-connector/` are served
by the site. `npm run dev` and `npm run build` create the appropriate packages
automatically. Generated files are ignored by Git.

- **Chrome / Chromium:** open `chrome://extensions`, enable Developer mode, choose
  **Load unpacked**, and select the generated `chromium` directory.
- **Firefox / LibreWolf:** open `about:debugging#/runtime/this-firefox`, choose
  **Load Temporary Add-on**, and select `firefox/manifest.json`. This temporary
  installation disappears when the browser exits.

Open the connector from the browser extensions menu, choose the site address, and
click **Enable connector access** in the full setup tab. Answer any browser prompt,
then reload the import page. Repeat this after revoking access. Sign in at
<https://account.hoyoverse.com/> in the same regular browser profile, click
**Connect HoYoverse**, choose a character, then **Import**. Review and **Save** as
with the existing import methods. If the selected UID differs from the current
Paimon.moe account, switch Paimon.moe accounts or sign in to the matching HoYoverse
account before reconnecting. An existing wish-history UID is never overwritten by
selecting a different browser character.

## Permissions and data flow

Host permissions include the exact approved site origins and the API host `https://api-account-os.hoyoverse.com/*`.
Manifest host patterns omit ports for Firefox compatibility. Content scripts
check the exact supported site origins, including the development port, and remain idle elsewhere
on the site, and accept requests only on `/wish/import` (including a trailing
slash). This also permits navigation to the importer within the Svelte app.

There is no `cookies`, `storage`, `tabs`, `webRequest`, or `<all_urls>` permission.
The background worker makes fixed HTTPS requests with `credentials: 'include'`:

1. `getUserGameRolesOfRegionByCookieToken` returns selectable global characters.
2. Before generating a key, the worker checks that the selected UID/region still
   belongs to the currently signed-in account.
3. `genAuthKeyByCookieToken` returns a `webview_gacha` authkey.
4. Only role metadata and the temporary key reach the page. Account cookies are
   attached by the browser to HoYoverse requests; the extension does not read,
   export, or store them.
5. The page builds the canonical Genshin history URL and uses the existing
   `/corsproxy` importer. That proxy receives the key and fetched history, as
   with pasted-URL imports. Existing API proxy/vault and tally behavior is not
   changed by this feature.
6. The key is held in memory during import and released on completion, failure,
   cancellation, or route teardown. Saved wishes and Drive exports do not contain
   it. Already-sent network requests cannot be recalled by cancelling.

The bridge validates origin, top frame, runtime sender, request type/version,
request IDs, supported region, message size, and responses. Requests are bounded
and cancellable. Exceptions crossing into the page contain fixed error codes,
not upstream response bodies or request URLs. A script already executing within
the trusted page can access page messages and the key: this is not a security
boundary against compromised page code or a compromised existing proxy.

Supported regions: `os_usa`, `os_euro`, `os_asia`, and `os_cht`. China, mobile
browsers, private windows, and Firefox containers are outside the preview scope.
Firefox packaging/lint success alone does not establish live session compatibility;
see the validation record in [the integration notes](../docs/hoyoverse-browser-import.md).
The HoYoverse endpoints are unofficial and may change. Other import methods stay
available.

## Tests and release

The full development/test toolchain, including Playwright, requires Node.js 20+.

```sh
npm run test:connector
node browser-connector/build.mjs
npx web-ext lint --source-dir browser-connector/dist/firefox
```

The manifest name deliberately says **Preview**. This is not an official
Paimon.moe store extension. A public release requires agreement with maintainers
on ownership, signed Firefox distribution, Chrome Web Store distribution,
privacy declarations, update policy, and replacement of development-install
instructions with verified store links. Never publish credentials in bug reports,
logs, screenshots, or test fixtures.
