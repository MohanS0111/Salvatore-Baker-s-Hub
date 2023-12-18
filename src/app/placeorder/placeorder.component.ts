import { Component, OnInit } from '@angular/core';
import { Orders } from '../models/orders';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrderService } from '../services/order-services/order.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../services/user-services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { BakeryItemsService } from '../services/bakery-items.service';
import { Bakery } from '../models/bakery';
import { AuthorderService } from '../services/order-services/authorder.service';
import { UserrouterService } from '../services/user-services/userrouter.service';

@Component({
  selector: 'app-placeorder',
  templateUrl: './placeorder.component.html',
  styleUrl: './placeorder.component.css'
})
export class PlaceorderComponent implements OnInit{

  orderForm!: FormGroup;

  producttypes: string[] = ['Cakes', 'Chocolates', 'Cookies', 'CupCakes'];
  types: string[] = ['Egg', 'Eggless'];
  weights: string[] = ['1/2kg', '1kg', '2kg', '3kg', '4kg', '5kg'];
  quantity: number[] = [1, 2, 3, 4, 5];
  id: number = 0;
  productname?:any;
  productprice?:any;
  productCategory?:any;

  constructor(private rs:ActivatedRoute,private orderservice : OrderService, private formBuilder: FormBuilder, private snackBar : MatSnackBar, private userauth : AuthService, private bakeryitemsservice : BakeryItemsService, private userrouter : UserrouterService) {}

  ngOnInit(): void {
    this.rs.paramMap.subscribe(params=>{
      let productid=params.get("id") ?? 0;
      this.id = +productid;
      this.getOneProduct(productid);
    })
    this.initForm();
    this.calculateTotal();
  }

  private initForm(): void {
    this.orderForm = this.formBuilder.group({
      name: [this.userauth.username, Validators.required],
      phoneNumber: [this.userauth.userphonenumber, [Validators.required, Validators.pattern(/^\d{10}$/)]],
      emailAddress: [this.userauth.useremail, [Validators.required, Validators.email]],
      productName : [this.productname,[Validators.required]],
      productPrice : [this.productprice,[Validators.required]],
      productType : [this.productCategory,[Validators.required]],
      cakeType: [''],
      cakeWeight: [''],
      quantity: [1, [Validators.required, Validators.min(1)]],
      deliveryaddress: ['', Validators.required],
      dateandtime: [this.formatDate(new Date())],
      paymentMode: ['CashOnDelivery', Validators.required],
      total: [0, Validators.required],
    });
    this.orderForm.get('quantity')?.valueChanges.subscribe(() => this.calculateTotal());
  }
  
  getOneProduct(id:any){
     this.bakeryitemsservice.getOneBakeryItemById(id).subscribe((data)=>{
     this.productname = data.name;
     this.productprice = data.price;
     this.productCategory = data.category;

     this.orderForm.patchValue({
      productName: this.productname,
      productPrice: this.productprice,
      productType: this.productCategory
    });
    this.calculateTotal();
    })
  }

  calculateTotal(){
    const quantity = this.orderForm.get('quantity')?.value || 1;
    const productPrice = this.orderForm.get('productPrice')?.value || 0;
    const total = quantity * productPrice;
    this.orderForm.patchValue({ total: total });
  }

  onSubmit(): void {
    if (this.orderForm.valid) {
      const orderData = this.orderForm.value;
      this.orderservice.newOrder(orderData).subscribe((data =>{
        this.snackBar.open('Your Order has been placed successfully!', 'Close', {
          duration: 5000, 
          verticalPosition: 'bottom', 
          horizontalPosition: 'center', 
          panelClass: ['success-snackbar']
        });
      }))
      this.userrouter.navigateToMyOrders();
    } else {
      console.log('Form is invalid');
    }
  }

   formatDate(timestamp: Date): string {
    const year = timestamp.getFullYear();
    const month = (timestamp.getMonth() + 1).toString().padStart(2, '0');
    const day = timestamp.getDate().toString().padStart(2, '0');
    const hours = timestamp.getHours().toString().padStart(2, '0');
    const minutes = timestamp.getMinutes().toString().padStart(2, '0');
    const seconds = timestamp.getSeconds().toString().padStart(2, '0');
  
    return `${month}/${day}/${year} ${hours}:${minutes}:${seconds}`;
  }
}