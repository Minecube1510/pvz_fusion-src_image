/* paging-core.js */

/* Import */
import { bootstrap } from '../page-core/bootstrap.js';
import { seTitling } from '../page-core/title.js';
import { setFavic } from '../page-core/favicon.js';
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
