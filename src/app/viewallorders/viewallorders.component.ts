import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order-services/order.service';

@Component({
  selector: 'app-viewallorders',
  templateUrl: './viewallorders.component.html',
  styleUrl: './viewallorders.component.css'
})
export class ViewallordersComponent implements OnInit {

  ordersdata:any[]=[];

  constructor(private orderservice:OrderService) { 
  }

  ngOnInit(): void {
    this.loadAllOrders();
  }

  loadAllOrders() {
    this.orderservice.getAllOrders().subscribe(
      (data) => {
        this.ordersdata = data;
      },
      (error) => {
        console.error('Error fetching products', error);
      }
    );
  }
}
