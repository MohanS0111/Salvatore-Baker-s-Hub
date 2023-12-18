import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserrouterService {

  constructor(private router : Router) { }

  navigateToAdminDashborad() {
    this.router.navigate(["admin-view"]);
  }

  navigateToAdminAddProducts(){
    this.router.navigate(["add-products"]);
  }

  navigateToAdminEditProducts(){
    this.router.navigate(["edit-products"]);
  }

  navigateToAdminEditProductsIndividually(){
    this.router.navigate(["edit-products-individually/:id"]);
  }

  navigateToAdminViewProducts(){
    this.router.navigate(['view-all-orders']);
  }

  navigatetoHome(){
    this.router.navigate(['home']);
  }

  navigateToUserLogin(){
    this.router.navigate(['user-login']);
  }

  navigateToMyOrders(){
    this.router.navigate(['myorders']);
  }
}
