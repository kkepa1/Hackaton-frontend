import { Component, OnInit } from '@angular/core';
import {Post} from "../../models/post";
import {LocalService} from "../../services/local.service";
import {Observable} from "rxjs";
import {PostService} from "../../services/post.service";
import {Comments} from "../../models/comments";

@Component({
  selector: 'app-cake',
  templateUrl: './cake.component.html',
  styleUrls: ['./cake.component.scss']
})
export class CakeComponent implements OnInit {

  public postsObs?: Observable<Post[]>
  public comments?: Observable<Comments[]>

  constructor( public localService: LocalService, public postService: PostService) { }

  ngOnInit(): void {
    this.postsObs = this.postService.getAllPosts()
    this.comments = this.postService.getAllComments()
    // this.comments.subscribe(res => console.log(res));
  }
}
