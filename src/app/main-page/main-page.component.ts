import {Component, OnInit} from "@angular/core";
import {Post} from "../models/post";
import {LocalService} from "../services/local.service";
import {PostService} from "../services/post.service";
import {Comments} from "../models/comments";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})

export class MainPageComponent implements OnInit {

  private postService: PostService;
  private localService: LocalService;
  posts: Post[] = [];

  constructor(postService: PostService, localService: LocalService){
    this.postService = postService;
    this.localService = localService;
  }

  imageSrc: string | ArrayBuffer | null = '';
  private data: FormData = new FormData();
  description: string = '';
  file: File | undefined;

  ngOnInit(): void {
    this.getAllPosts();
  }

  getAllPosts(): void {
    this.postService.getAllPosts()
      .subscribe(posts => {
        this.posts = posts;
      })
  }

  readURL(event: Event): void {
    // @ts-ignore
    if (event.target.files && event.target.files[0]) {
      // @ts-ignore
      this.file = event.target.files[0];

      // this.data.append('file', this.file);

      const reader = new FileReader();
      reader.onload = e => this.imageSrc = reader.result;

      // @ts-ignore
      reader.readAsDataURL(file);
    }
  }

  savePost() {
    let post: Post = {
      username: LocalService.getLoggedUser(),
      description: this.description,
      cakeImageSource: this.file,
      dateOfPublication: '30.09.2022',
      likes: 0,
      comments: 0,
      listOfComments: []
    }
    this.postService.addPost(post).subscribe(res => {
      console.log(res)
    });
  }
}
