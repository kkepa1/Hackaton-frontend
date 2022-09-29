import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {UserProfileComponent} from "./components/user-profile/user-profile.component";
import {MyGuardGuard} from "./my-guard.guard";

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent, canActivate: [MyGuardGuard] },
  { path: 'user-profile', component: UserProfileComponent, canActivate: [MyGuardGuard] },
  // this has to be always on the bottom
  {path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
