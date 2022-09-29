import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  inputUsername = ''
  inputEmail = ''

  constructor() { }

  public username: string = "Username"

  ngOnInit(): void {
  }


  cancel(): void {
    this.inputUsername = ''
    this.inputEmail = ''
  }

}
