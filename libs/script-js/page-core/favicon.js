/* favicon.js */

document.addEventListener('DOMContentLoaded', () => {
  const favicon = (document.createElement('link'));
  favicon.rel = ('icon');
  favicon.type = ('image/png');
  favicon.href = ('../../asset/favicon/emoji-test.png');

  document.head.appendChild(favicon);
});

