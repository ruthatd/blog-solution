import { Post } from "./post";

export class User {
    id: number = -1;
    name: string = "";
    profession: string = "";
    location: string = "";
    about: string = "";
    posts: Post[] = []; 
    

}