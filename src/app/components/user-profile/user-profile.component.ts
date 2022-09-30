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

  public firstname: string = "imie"
  public username: string = "użytkownik123"
  public email: string = "email@email.com"

  ngOnInit(): void {
  }
  submitChanges(): void{
    this.cancel()
  }
  changePassword(): void{
  }
  cancel(): void {
    this.inputUsername = ''
    this.inputEmail = ''
  }

}
