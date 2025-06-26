/* which-side.js */

const pilihan = [
  { label: 'Light Side', warna: 'primary' },
  { label: 'Dark Side', warna: 'dark' }
];

const kontainer = document.getElementById('pilihan-kartu');
let pilihanAktif = null; // Simpan pilihan aktif (index)

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

  // Event klik kartu
  card.addEventListener('click', () => {
    const isSelected = pilihanAktif === index;

    document.querySelectorAll('.pilih-card').forEach(c => {
      c.classList.remove('bg-primary', 'bg-dark', 'text-white', 'active');
    });

    if (isSelected) {
      pilihanAktif = null; // batal
      console.log('Batal memilih');
    } else {
      pilihanAktif = index;
      card.classList.add(`bg-${item.warna}`, 'text-white', 'active');
      console.log(`Kamu memilih: ${item.label}`);
    }
  });

  col.appendChild(card);
  kontainer.appendChild(col);
});
