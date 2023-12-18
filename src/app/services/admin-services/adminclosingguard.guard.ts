import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EditproductsonebyoneComponent } from '../../editproductsonebyone/editproductsonebyone.component';


@Injectable ({providedIn:'root'})
export class adminclosingguardGuard implements CanDeactivate<EditproductsonebyoneComponent>{
  canDeactivate(
    component: EditproductsonebyoneComponent,
    currentRoute: ActivatedRouteSnapshot, 
    currentState: RouterStateSnapshot, 
    nextState: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> 
    {
    return component.canClose? component.canClose():true;
  }
};






