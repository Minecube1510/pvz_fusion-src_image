/* bootstrap.js */

// Tambahkan CSS Bootstrap
const bootstrapCSS = document.createElement('link');
bootstrapCSS.rel = 'stylesheet';
bootstrapCSS.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css';
bootstrapCSS.integrity = 'sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH';
bootstrapCSS.crossOrigin = 'anonymous';
document.head.appendChild(bootstrapCSS);

// Tambahkan JS Bootstrap
const bootstrapJS = document.createElement('script');
bootstrapJS.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js';
//bootstrapJS.integrity = 'sha384-ENjdO4Dr2bkBIFxQpeoA6DQD021o6FfQ7846hvxZl68MXoGKmE6xkG6z5Y2w1L0X';
bootstrapJS.crossOrigin = 'anonymous';
document.body.appendChild(bootstrapJS);
