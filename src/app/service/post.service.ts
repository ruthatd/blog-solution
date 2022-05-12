import { Inject, Injectable } from '@angular/core';
import { Post } from '../model/post';
import { User } from '../model/user';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  toggleLike(postId: number) {
    
    if(this.allPosts.find(p => p.post_id == postId)?.isLiked){
      let index = this.allPosts.findIndex(p => p.post_id == postId);
      this.allPosts[index].isLiked = false;
      this.allPosts[index].likes-- ;
    }else{
      let index = this.allPosts.findIndex(p => p.post_id == postId);
      this.allPosts[index].isLiked = true;
      this.allPosts[index].likes++ ;
    }
  }
  addComment(comment: string, currPostId: number) {
    this.allPosts.find(p => p.post_id == currPostId)?.comments.push(comment);
  }
  

  allPosts: Post[] = [];
  currPostId:number = -1;

  constructor(@Inject (UserService) private userService: UserService) { 

  }

  getAllPosts():Post[]{
    this.allPosts = [];
    this.userService.users.forEach(u => u.posts.forEach(p => this.allPosts.push(p)));
    return this.allPosts;
  }

  getCurrPost(): Post{
    return this.allPosts.find(p => p.post_id == this.currPostId)!;
  }
  

}
