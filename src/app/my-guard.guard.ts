import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {LocalService} from "./services/local.service";

@Injectable({
  providedIn: 'root'
})
export class MyGuardGuard implements CanActivate {

  constructor(private router: Router) {
  }

  canActivate(): boolean {
    let user = LocalService.getData('user');
    if (user) {
      this.router.navigateByUrl('login');
      return false;
    }
    return true;
  }
}
