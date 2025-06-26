/* footer.js */

/* Ngedata */
const footer = (document.getElementById('hak-cipta'));
//
const creator = ('Minecube1510');
/* Ngedata */


/* Expor */
export function copyrightFooter(creator = 'Minecube1510') {
  const footer = document.getElementById('hak-cipta');
  if (!(footer)) return;

  footer.innerHTML = (`
    <div class="container">
      &copy; 2025 - By ${creator}</div>
  `);

  footer.classList.add(
    'bg-dark',
    'text-white',
    'text-center',
    'py-3',
    'fixed-bottom'
  );
}
//
/* Expor */
