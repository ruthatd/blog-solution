import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/model/post';
import { PostService } from 'src/app/service/post.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  public post: Post= {
    post_id: -1,
    post_title: '',
    post_content: '',
    created_on: new Date(Date.now()),
    likes: -1,
    isLiked: false,
    comments: [],
    author_name: '',
    author_id: -1,
  };

  constructor(@Inject (PostService) private postService:PostService, @Inject (UserService) private userService:UserService,private router:Router) { 
    this.post = this.postService.getCurrPost();
  }

  ngOnInit(): void {
    
  }

  navToProfile(userId: number){
    this.router.navigate(['/profile/'+userId]);
    
  }

  toggleLike() {
    if(this.post.isLiked){
      this.post.likes-- ;
      this.post.isLiked = false;

    }else{
      this.post.likes++;
      this.post.isLiked = true;
    }
  }
  
  postComment(comment: string) {
    this.post.comments.push(comment);
  }
}
