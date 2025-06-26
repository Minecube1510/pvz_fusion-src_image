/* title.js */

document.addEventListener('DOMContentLoaded', () => {
  const headTitleAttr = (document.head.getAttribute('title'));
  if (headTitleAttr) {
    document.title = (`PvZ Fusion - ${headTitleAttr}`);
  } else {
    document.title = ('PvZ Fusion - NoTitle');
  }
});
