// Fallback lazy-loading for browsers that don't support native loading="lazy"
document.addEventListener('DOMContentLoaded', function () {
  if ('loading' in HTMLImageElement.prototype) {
    // Browser supports native lazy loading, nothing to do
    return;
  }

  const lazyImages = document.querySelectorAll('img[loading="lazy"][data-src]');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          obs.unobserve(img);
        }
      });
    }, {rootMargin: '200px'});

    lazyImages.forEach(img => observer.observe(img));
  } else {
    // No IntersectionObserver — load all images immediately
    lazyImages.forEach(img => {
      img.src = img.dataset.src;
      img.removeAttribute('data-src');
    });
  }
});
