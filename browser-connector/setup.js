// CONNECTOR_ORIGINS is generated from the same allowlist as the content script.
const api = typeof browser !== 'undefined' ? browser : chrome;
const select = document.getElementById('origin');
for (const origin of CONNECTOR_ORIGINS) {
  const option = document.createElement('option');
  option.value = origin;
  option.textContent = origin;
  select.append(option);
}
const requested = new URL(location.href).searchParams.get('origin');
if (CONNECTOR_ORIGINS.includes(requested)) select.value = requested;
const status = document.getElementById('status');
const link = document.getElementById('return');
function updateLink() {
  link.href = select.value + '/wish/import';
  status.textContent = '';
}
select.addEventListener('change', updateLink);
updateLink();
document.getElementById('enable').addEventListener('click', async () => {
  const origin = select.value;
  if (!CONNECTOR_ORIGINS.includes(origin)) return;
  try {
    const granted = await api.permissions.request({
      origins: [hostPattern(origin), 'https://api-account-os.hoyoverse.com/*'],
    });
    status.textContent = granted
      ? 'Access enabled. Return to the import page, reload it, and click Connect HoYoverse.'
      : 'Access was not granted. Click Enable connector access to try again.';
  } catch {
    status.textContent = 'Could not enable access. Remove and reload the updated preview extension, then try again.';
  }
});
