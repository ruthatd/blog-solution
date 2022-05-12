export class Post {
    post_id: number = -1;
    post_title: string = "";
    post_content: string = "";
    created_on: Date = new Date();
    likes: number = -1;
    isLiked: boolean = false;
    comments: string[] = [];
    author_name:string = "";
    author_id: number = -1;

    constructor(){}
}