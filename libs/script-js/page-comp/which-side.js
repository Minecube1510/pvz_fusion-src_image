/* which-side.js */

const pilihan = [
  {
    label: 'Light Side',
    warna: 'primary',
    link: '/libs/asset/plant-side/plant-index.html'
  },
  {
    label: 'Dark Side',
    warna: 'dark',
    link: '/libs/asset/zombie-side/zombie-index.html'
  }
];

const kontainer = document.getElementById('pilihan-kartu');
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
    document.querySelectorAll('.pilih-card').forEach(c => {
      c.classList.remove('bg-primary', 'bg-dark', 'text-white', 'active');
    });

    card.classList.add(`bg-${item.warna}`, 'text-white', 'active');
    pilihanAktif = index;

    // Redirect ke halaman tujuan
    window.location.href = item.link;
  });

  col.appendChild(card);
  kontainer.appendChild(col);
});
