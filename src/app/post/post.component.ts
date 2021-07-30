import {Component, OnInit} from '@angular/core'
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Post, PostsService} from "../posts.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit{

  post: Post

  constructor(
      private route: ActivatedRoute,
      private router:Router) {}

  ngOnInit(): void {
    this.route.data.subscribe(data =>{
      this.post = data.post
    })
  /*  this.route.params.subscribe((params: Params)=>{
      console.log(params)
      this.post = this.postsService.getById(parseInt(params.id))
    })*/
  }

  loadPost() {
    this.router.navigate(['/posts', 44])
  }
}
