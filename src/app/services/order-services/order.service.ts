import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Orders } from '../../models/orders';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpclient : HttpClient) { }

  getAllOrders(){
    return this.httpclient.get<Orders[]>("http://localhost:3000/Orders");
  }

  newOrder(neworder:any){
    return this.httpclient.post<Orders>("http://localhost:3000/Orders",neworder);
  }

  getOrderByEmailId(email:any){
    return this.httpclient.get<Orders[]>("http://localhost:3000/Orders?emailAddress="+email);
  }
}
