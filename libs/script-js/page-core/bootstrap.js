/* bootstrap.js */

// Tambahkan CSS Bootstrap
// bootstrap.js
export function bootstrap() {
  const css = document.createElement('link');
  css.rel = 'stylesheet';
  css.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css';
  css.crossOrigin = 'anonymous';
  document.head.appendChild(css);

  const js = document.createElement('script');
  js.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js';
  js.crossOrigin = 'anonymous';
  document.body.appendChild(js);
}
