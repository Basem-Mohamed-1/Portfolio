document.querySelectorAll('details.case').forEach((details) => {
  details.addEventListener('toggle', () => {
    if (details.open && typeof window.oaiq === 'function') {
      window.oaiq('measure', 'contents_viewed', {
        type: 'contents'
      });
    }
  });
});
