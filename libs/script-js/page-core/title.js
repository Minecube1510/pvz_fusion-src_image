/* title.js */

document.addEventListener('DOMContentLoaded', () => {
  const headTitleAttr = document.head.getAttribute('title');
  if (headTitleAttr) {
    document.title = `Halaman - ${headTitleAttr}`;
  } else {
    document.title = 'Halaman - Tanpa Judul';
  }
});

