/* paging-core.js */

/* Import */
import { bootstrap } from './bootstrap.js';
import { seTitling } from './title.js';
import { setFavic } from './favicon.js';
/* Import */

/* Sistem */
function excing() {
    bootstrap();   
    seTitling();
    setFavic();
}
/* Sistem */

/* Execute */
excing();
/* Execute */
