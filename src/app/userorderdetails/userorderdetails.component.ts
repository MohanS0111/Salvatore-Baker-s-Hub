import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order-services/order.service';
import { AuthService } from '../services/user-services/auth.service';

@Component({
  selector: 'app-userorderdetails',
  templateUrl: './userorderdetails.component.html',
  styleUrl: './userorderdetails.component.css'
})
export class UserorderdetailsComponent implements OnInit {

  userordersdata:any[]=[];

  constructor(private orderservice : OrderService, private auth : AuthService){}

  ngOnInit(): void {
    this.loadUserOrders();
  }

  loadUserOrders(){
   this.orderservice.getOrderByEmailId(this.auth.useremail).subscribe((data =>{
    this.userordersdata = data;
   }))
  }
}
