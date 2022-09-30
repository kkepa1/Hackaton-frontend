import { Component, OnInit } from '@angular/core';
import {LocalService} from "../../services/local.service";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  inputUsername = ''
  inputEmail = ''

  constructor( public localService: LocalService) { }

  public firstname: string = LocalService.getLoggedUser().firstname
  public username: string = LocalService.getLoggedUser().username
  public email: string = LocalService.getLoggedUser().email

  ngOnInit(): void {
  }
  submitChanges(): void{
    this.username = this.inputUsername
    // this.cancel()
  }
  changePassword(): void{
  }
  cancel(): void {
    this.inputUsername = ''
    this.inputEmail = ''
  }

}
