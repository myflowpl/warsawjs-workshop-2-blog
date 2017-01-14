/**
 * manage front page of the blog
 */

import routie from 'libs/routie.js';
import {PostService} from '../services/post.service.js';

routie('post/:id', controller);

export function controller(id) {

    let template = document.querySelector('#template-post').innerHTML;

    document.getElementById('page').innerHTML = id+template;
}