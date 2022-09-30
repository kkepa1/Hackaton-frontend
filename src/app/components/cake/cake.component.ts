import { Component, OnInit } from '@angular/core';
import {Comments} from "../../models/comments";
import {LocalService} from "../../services/local.service";
import {Observable} from "rxjs";
import {Post} from "../../models/post";

@Component({
  selector: 'app-cake',
  templateUrl: './cake.component.html',
  styleUrls: ['./cake.component.scss']
})
export class CakeComponent implements OnInit {

  // public username: string = 'użytkownik123'
  // public description:string = 'opis';
  // public cakeImageSource: string = ''
  // public likes:number = 4;
  // public comments:number = 1;
  // public dateOfPublication:string = '29.09.2022';
  public posts: Post[] = [{
    username: 'username',
    description: 'PLACEK DROŻDŻOWY ZE ŚLIWKAMI I CZEKOLADĄ',
    cakeImageSource: "../../assets/images/ciasto1.jpg",
    likes: 4,
    comments: 2,
    dateOfPublication: '30.09.2022',
    listOfComments: [
      {
       commentUser: 'superuser123',
       commentText: 'bardzo smaczne ciasto, pozdrawiam',
       commentDate: '30.09.2022'
      }
    ]
  }

  ]

  constructor(public localService: LocalService) { }

  ngOnInit(): void {
  }

}
