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

  // public posts: Post[] = [{
  //   username: 'username',
  //   description: 'PLACEK DROŻDŻOWY ZE ŚLIWKAMI I CZEKOLADĄ',
  //   cakeImageSource: "../../assets/images/ciasto1.jpg",
  //   likes: 4,
  //   comments: 1,
  //   dateOfPublication: '30.09.2022',
  //   listOfComments: [
  //     {
  //      commentUser: 'superuser123',
  //      commentText: 'to nawet nie jest on',
  //      commentDate: '30.09.2022'
  //     },]
  // },
  //   {
  //     username: 'inny_użytkownik',
  //     description: 'ciasto dobre',
  //     cakeImageSource: "../../assets/images/ciasto2.jpg",
  //     likes: 10,
  //     comments: 2,
  //     dateOfPublication: '29.09.2022',
  //     listOfComments: [
  //       {
  //         commentUser: 'superuser123',
  //         commentText: 'dobre',
  //         commentDate: '29.09.2022'
  //       },
  //       {
  //         commentUser: 'username',
  //         commentText: 'bardzo dobre',
  //         commentDate: '30.09.2022'
  //       },
  //
  // ]}
  //   ]

  constructor( public postService: PostService) { }

  ngOnInit(): void {
    this.posts.subscribe(res => console.log(res));
  }

  likePost(id: number): void{
    this.postService.likePost(id).subscribe(res => console.log(res));
  }
  addComment(): void{
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
