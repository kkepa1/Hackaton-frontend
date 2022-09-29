import { Component } from '@angular/core';
import {LocalService} from "./services/local.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Ciastter';
  loggedIn(): boolean {
    let user = LocalService.getData('user');
    return user != null;
  }
}
