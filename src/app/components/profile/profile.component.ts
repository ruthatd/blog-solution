import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { PostService } from 'src/app/service/post.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public people: string[] = ["", "", "", "", ""];

  user: User = new User();
  constructor(@Inject(UserService) private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostService) {
    let id = this.route.snapshot.params['id'];
    this.user = this.userService.users.find(u => u.id == id)!;
  }

  ngOnInit(): void {


  }

  routeToDetails(postId: number) {
    this.router.navigate(['/detail']);
  }

}
