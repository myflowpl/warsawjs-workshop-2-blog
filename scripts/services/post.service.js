/**
 * manage the posts
 */
export class PostService {

    static list() {
        return $.ajax("posts");
    }

    static create(data) {
        return $.ajax("posts", {
            method: "POST",
            dataType: 'json',
            data: data
        });
    }

    static get(id) {
        return $.ajax("posts/"+id);
    }
}