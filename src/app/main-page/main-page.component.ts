import {Component} from "@angular/core";
import {PostService} from "../services/post.service";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})

export class MainPageComponent{
  constructor(private postService: PostService){
  }

  imageSrc: string | ArrayBuffer | null = '';
  private data: FormData = new FormData();
  description: string = '';
  file: File | undefined;


  readURL(event: Event): void {
    // @ts-ignore
    if (event.target.files && event.target.files[0]) {
      // @ts-ignore
      let file = event.target.files[0];
      this.file = file;

      const reader = new FileReader();

      reader.onload = e => {
        this.imageSrc = reader.result;
        this.data.append('file', file);
      }

      // @ts-ignore
      reader.readAsDataURL(file);
    }
  }

  savePost() {
    const form = new FormData()
    form.append('description', this.description);
    // @ts-ignore
    form.append('image', this.file?.slice());
    // @ts-ignore

    this.postService.addPost(form)
      .subscribe(res => {
      console.log(res)
    });
  }
}
