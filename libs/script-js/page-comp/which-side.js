/* which-side.js */

const pilihan = [
  {
    label: 'Light Side',
    warna: 'primary',
    link: (`
      libs/plant-index.html
    `),
    /*
      https://minecube1510.github.io/pvz_fusion-src_image/libs/
      zombie-side
      /
      libs/asset/favicon/emoji-test.png
    */
  },
  {
    label: 'Dark Side',
    warna: 'dark',
    link: (`
      libs/zombie-index.html
    `),
  }
];

const kontainer = document.getElementById('faction-sidered');
let pilihanAktif = null;

pilihan.forEach((item, index) => {
  const col = document.createElement('div');
  col.className = 'col-5 col-md-3';

  const card = document.createElement('div');
  card.className = `card text-center border border-${item.warna} pilih-card`;
  card.style.cursor = 'pointer';
  card.dataset.index = index;
  card.innerHTML = `
    <div class="card-body text-${item.warna}">
      <h5 class="card-title">${item.label}</h5>
    </div>
  `;

  card.addEventListener('click', () => {
    window.location.href = item.link;
  });

  col.appendChild(card);
  kontainer.appendChild(col);
});
