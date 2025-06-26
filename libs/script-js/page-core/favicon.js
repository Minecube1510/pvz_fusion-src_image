/* favicon.js */

document.addEventListener('DOMContentLoaded', () => {
  const favicon = (document.createElement('link'));
  favicon.rel = ('icon');
  favicon.type = ('image/png');
  favicon.href = ('/libs/asset/favicon/emoji-test.ico');

  document.head.appendChild(favicon);
});

