/**
 * manage front page of the blog
 */

import routie from 'libs/routie.js';
import {PostService} from '../services/post.service.js';
import {PostFormComponent} from '../components/post-form.component.js';

let $page = document.getElementById('page');

routie('napisz', controller);

export function controller() {

    PostFormComponent.render({}, $page);

}