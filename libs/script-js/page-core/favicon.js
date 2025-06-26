/* favicon.js */

// title.js
export function seTitling(prefix = 'PvZ Fusion') {
  const titleText = (document.querySelector('title')?.textContent);
  document.title = (`
    ${prefix} - ${(titleText) || ('NoTitle')}
    `);
}

