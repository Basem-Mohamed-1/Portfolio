
// event of viewing case stuides
document.querySelectorAll('details.case').forEach((details) => {
  details.addEventListener('toggle', () => {
    if (details.open && typeof window.oaiq === 'function') {
      window.oaiq('measure', 'contents_viewed', {
        type: 'contents'
      });
    }
  });
});

// event of contact
document.querySelector('.btn-primary[href*="wa.me"]')?.addEventListener('click', () => {
  if (typeof window.oaiq === 'function') {
    window.oaiq('measure', 'lead_created', {
      type: 'customer_action'
    });
  }
});
