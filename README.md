<img src="static/paimon-og.png" align="right" width="180px"/>

# [Paimon.moe](https://paimon.moe)

Your best Genshin Impact companion! Paimon.moe helps you plan what to farm with ascension calculator and database. It also tracks your progress with a todo list and a wish counter.

Created with [SvelteKit](https://kit.svelte.dev/) + [Tailwind CSS](https://tailwindcss.com/)

# Development

```
# install dependencies
pnpm i

# you need the api to run wish importer and wish tally
git clone https://github.com/MadeBaruna/paimon-moe-api
cd paimon-moe-api
docker-compose up -d

# run in dev mode
cp .env.example .env
vi .env
pnpm dev

# export as production static site
pnpm build
```

# HoYoverse browser-session wish import (preview)

The wish importer includes a **HoYoverse account** method with setup instructions,
character selection, and the existing preview/Save flow. Sign in to HoYoverse in
the same desktop browser and install the companion connector; the importing
computer does not need Genshin Impact installed.

See [connector installation and privacy](browser-connector/README.md) and
[integration and validation notes](docs/hoyoverse-browser-import.md). This is an
unsigned development preview, not an official browser-store release.

```sh
# Install the dependencies pinned by pnpm-lock.yaml (pnpm 10)
pnpm install --frozen-lockfile

# Configure VITE_API_HOST in .env for your running Paimon.moe API
npm run dev

# Connector/security tests and full static build
npm run test:connector
npm run build
```

Account cookies stay in the browser and are sent only to HoYoverse. The temporary
history key reaches the site and its existing API proxy, but is not saved with
wish data. Supported scope is global HoYoverse accounts in regular desktop
browser profiles; see the notes for tested browsers and remaining release work.

# License

[MIT](https://github.com/MadeBaruna/paimon-moe/blob/main/LICENSE)

This project is not affiliated with HoYoVerse.
Genshin Impact, game content and materials are trademarks and copyrights of HoYoVerse.
