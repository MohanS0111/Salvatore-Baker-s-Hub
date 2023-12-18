import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BakeryItemsService } from '../services/bakery-items.service';
import { Bakery } from '../models/bakery';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserrouterService } from '../services/user-services/userrouter.service';

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrl: './addproducts.component.css'
})
export class AddproductsComponent implements OnInit {

  constructor(private formbuilder:FormBuilder, private bakeryservice:BakeryItemsService, private snackBar: MatSnackBar, private userrouter : UserrouterService) { }

  ngOnInit(): void {
  }

  mainTitle:string = "Add New Product";
  addedProduct:Bakery={};

  addProductForm = this.formbuilder.group({
    name:['', Validators.required],
    price:['',Validators.required],
    imageUrl:['',Validators.required],
    category:['',Validators.required],
    stars:['',Validators.required],
    deliveryTime:['',Validators.required],
    description:['',Validators.required]

  })
  get name()
  {
    return this.addProductForm.get("name");
  }
  get price()
  {
    return this.addProductForm.get("price");
  }
  get imageUrl()
  {
    return this.addProductForm.get("imageUrl");
  }
  get category()
  {
    return this.addProductForm.get("category");
  }
  get stars()
  {
    return this.addProductForm.get("stars");
  }
  get deliveryTime()
  {
    return this.addProductForm.get("deliveryTime");
  }
  get description()
  {
    return this.addProductForm.get("description");
  }

  addNewProduct()
   {
    this.bakeryservice.addNewProduct(this.addedProduct).subscribe((data)=>{
      this.snackBar.open('Product Added Successfully!', 'Close', {
        duration: 5000, 
        verticalPosition: 'bottom', 
        horizontalPosition: 'center', 
        panelClass: ['success-snackbar']
    });
  })
  this.userrouter.navigateToAdminEditProducts();
 }


}
