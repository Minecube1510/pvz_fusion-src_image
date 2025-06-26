/* which-side.js */

    const pilihan = [
      { label: 'Light Side', warna: 'primary' },
      { label: 'Dark Side', warna: 'dark' }
    ];

    const kontainer = (document.getElementById('pilihan-kartu'));

    pilihan.forEach((item, index) => {
      const col = (document.createElement('div'));
      col.className = ('col-5 col-md-3');

      col.innerHTML = (`
        <div class="card text-center border border-${item.warna}"
        style="cursor:pointer" data-index="${index}">
          <div class="card-body text-${item.warna}">
            <h5 class="card-title">${item.label}</h5>
          </div>
        </div>
      `);

      col.addEventListener('click', () => {
        document.querySelectorAll('#pilihan-kartu .card').forEach(card => {
          card.classList.remove('bg-' + item.warna, 'text-white');
        });

        col.querySelector('.card').classList.add('bg-' + item.warna, 'text-white');
        //console.log(`Kamu memilih: ${item.label}`);
      });

      kontainer.appendChild(col);
    });
