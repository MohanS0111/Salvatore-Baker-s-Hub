import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from '../user-services/auth.service';
import { UserrouterService } from '../user-services/userrouter.service';

@Injectable({
  providedIn:'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth:AuthService, private userrouter : UserrouterService) {}

  canActivate(route : ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>  {
    if(this.auth.isAdminLoggedIn){
      return true;
    }
    else {
      this.userrouter.navigateToUserLogin();
      return false;
    }
  }
}
