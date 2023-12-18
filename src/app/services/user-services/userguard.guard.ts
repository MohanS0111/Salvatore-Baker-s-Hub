import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';
import { UserrouterService } from './userrouter.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn:'root'
})
export class userguardGuard implements CanActivate{
  constructor(private auth:AuthService, private userrouter : UserrouterService) {}

  canActivate(route : ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>  {
    if(this.auth.isUserLoggedIn){
      return true;
    }
    else {
      this.userrouter.navigateToUserLogin();
      return false;
    }
  }
};
