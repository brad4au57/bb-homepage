// js/index.js
// Renamed from js/site.js — small site scripts for the homepage

document.addEventListener('DOMContentLoaded', function () {
  // Update footer copyright year
  try {
    const el = document.getElementById('copyright-year');
    if (el) el.textContent = new Date().getFullYear();
  } catch (e) {
    // silent fail in older browsers or test environments
    // eslint-disable-next-line no-console
    console.error('Error updating copyright year', e);
  }

  // Place for future small DOM behaviors (theme toggle, analytics init, etc.)
});
