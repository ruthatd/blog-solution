import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/model/post';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  posts:Post[] = [];
  constructor(@Inject (PostService) private postService: PostService, private router:Router) { }

  ngOnInit(): void {
    
    this.posts = this.postService.getAllPosts();

    // console.log(this.posts);
  }

  routeToDetails(postId:number){
    this.router.navigate(['/detail']);
    this.postService.currPostId = postId;
    // console.log(postId);
  }

}
