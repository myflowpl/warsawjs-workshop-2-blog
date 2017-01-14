/**
 * manage front page of the blog
 */

import routie from 'libs/routie.js';
import {PostService} from '../services/post.service.js';

routie('napisz', controller);

export function controller() {

    let template = document.querySelector('#template-post-form').innerHTML;

    document.getElementById('page').innerHTML = template;
}