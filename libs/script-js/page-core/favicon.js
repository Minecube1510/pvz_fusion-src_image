/* favicon.js */

function setFavic(pngPath, icoPath) {
  // Bersihkan favicon yang sudah ada
  document.querySelectorAll('link[rel="icon"]').forEach(link => link.remove());

  // Tambah favicon PNG
  const pngFavicon = document.createElement('link');
  pngFavicon.rel = ('icon');
  pngFavicon.type = ('image/png');
  pngFavicon.href = (pngPath);
  document.head.appendChild(pngFavicon);

  // Tambah fallback ICO (optional)
  const icoFavicon = (document.createElement('link'));
  icoFavicon.rel = ('icon');
  icoFavicon.type = ('image/x-icon');
  icoFavicon.href = (icoPath);
  document.head.appendChild(icoFavicon);
}

//
const setPNG = ('libs/asset/favicon/emoji-test.png');
const setICO = ('libs/asset/favicon/emoji-test.ico');
//
function resolveRelativePath(path) {
  const base = window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/'));
  return `${base}/${path}`.replace(/\/{2,}/g, '/');
}
//

export function favicing() {
  setFavic(
  resolveRelativePath(setPNG),
  resolveRelativePath(setICO));
}
