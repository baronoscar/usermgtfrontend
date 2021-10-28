import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import {CanActivate, Router } from '@angular/router';
import {AuthService} from '../services/auth-service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authServices: AuthService, private route: Router) {
  }
  canActivate(): boolean {
    if (this.authServices.loggedIn()){
      return true;
    }
    this.route.navigate(['login']);
    return false;
  }

}
