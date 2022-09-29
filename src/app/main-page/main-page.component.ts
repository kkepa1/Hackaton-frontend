import { Component } from "@angular/core";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})

export class MainPageComponent{
  constructor(){

  }
  url: any;

  onFileSelected(event: any){

    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event) =>{
      this.url = reader.result;

    }

  }
}
