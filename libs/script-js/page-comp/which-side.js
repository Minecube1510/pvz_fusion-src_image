/* which-side.js */

const pilihan = [
  { label: 'Light Side', warna: 'primary' },
  { label: 'Dark Side', warna: 'dark' }
];

const kontainer = document.getElementById('pilihan-kartu');

pilihan.forEach((item, index) => {
  const col = document.createElement('div');
  col.className = 'col-5 col-md-3';

  const card = document.createElement('div');
  card.className = `card text-center border border-${item.warna} pilih-card`;
  card.style.cursor = 'pointer';
  card.dataset.index = index;

  const cardBody = document.createElement('div');
  cardBody.className = `card-body text-${item.warna}`;
  // Awalnya kosong
  cardBody.innerHTML = '';

  card.appendChild(cardBody);
  col.appendChild(card);
  kontainer.appendChild(col);

  let isActive = false;

  card.addEventListener('click', () => {
    isActive = !isActive;
    card.classList.toggle('active', isActive);

    // Tulisannya dimunculin / disembunyikan
    cardBody.innerHTML = isActive ? `<h5 class="card-title">${item.label}</h5>` : '';
  });
});
