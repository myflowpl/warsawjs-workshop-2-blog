/**
 * manage front page of the blog
 */

import routie from 'libs/routie.js';

routie('o-mnie', controller);

export function controller() {

    let template = document.querySelector('#template-about').innerHTML;

    document.getElementById('page').innerHTML = template;
}