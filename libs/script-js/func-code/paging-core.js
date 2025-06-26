/* paging-core.js */

/* Import */
import { bootstrap } from '../page-core/bootstrap.js';
import { seTitling } from '../page-core/title.js';
import { favicing } from '../page-core/favicon.js';
//
//import { func } from '../page-core/func.js';
//
import { copyrightFooter } from '../page-core/footer.js';
/* Import */


/* Sistem */
// Auto-refresh saat Back/Forward navigation
window.addEventListener('pageshow', (event) => {
    // event.persisted true kalau page diambil dari cache
    // performace.navigation.type === 2 di banyak browser lama
    const nav = performance.getEntriesByType('navigation')[0] || {};
    const isBackForward = event.persisted || nav.type === 'back_forward';
    if (isBackForward) {
        window.location.reload();
    }
});
//
function excing() {
    bootstrap();   
    seTitling();
    favicing();
    //
    //func();
    //
    copyrightFooter();
}
/* Sistem */


/* Execute */
excing();
/* Execute */
