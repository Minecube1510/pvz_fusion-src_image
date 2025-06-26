/* paging-core.js */

/* Import */
import { bootstrap } from '../page-core/bootstrap.js';
import { seTitling } from '../page-core/title.js';
import { setFavic } from '../page-core/favicon.js';
/* Import */

/* Sistem */
const setPNG = (`
    ./libs/asset/favicon/emoji-test.png
    `);
const setICO = (`
    ./libs/asset/favicon/emoji-test.ico
    `);
//
function excing() {
    bootstrap();   
    seTitling();
    setFavic(setPNG, setICO);
}
/* Sistem */

/* Execute */
excing();
/* Execute */
