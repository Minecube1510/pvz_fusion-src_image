/* favicon.js */

document.addEventListener('DOMContentLoaded', () => {
  const favicon = (document.createElement('link'));
  favicon.rel = ('icon');
  favicon.type = ('image/png');
  favicon.href = ('../../asset/favicon/emoji-test.png');
  /* Intinya coba aja pake yang ICO dan PNG */

  document.head.appendChild(favicon);
});

