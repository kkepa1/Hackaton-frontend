import { Component, OnInit } from '@angular/core';
import {Post} from "../../models/post";
import {LocalService} from "../../services/local.service";
import {Observable} from "rxjs";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-cake',
  templateUrl: './cake.component.html',
  styleUrls: ['./cake.component.scss']
})
export class CakeComponent implements OnInit {

  public posts: Observable<Post[]> = this.postService.getAllPosts()

  constructor( public postService: PostService) { }

  ngOnInit(): void {
    this.posts.subscribe(res => console.log(res));
  }

  likePost(id: number): void{
    this.postService.likePost(id).subscribe(res => console.log(res));
  }
  addComment(postId: number): void{
    // this.posts[0].comments =+ 1
    // this.posts[0].listOfComments.push(
    //   {commentUser: LocalService.getLoggedUser(),
    //     commentDate: '30.09.2022',
    //     commentText: this.inputComment}
    // )
    // // this.inputComment = ''
    // console.log(this.inputComment)
  }
}
