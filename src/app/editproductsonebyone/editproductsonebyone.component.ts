import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BakeryItemsService } from '../services/bakery-items.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Bakery } from '../models/bakery';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserrouterService } from '../services/user-services/userrouter.service';

@Component({
  selector: 'app-editproductsonebyone',
  templateUrl: './editproductsonebyone.component.html',
  styleUrl: './editproductsonebyone.component.css'
})
export class EditproductsonebyoneComponent implements OnInit{

  constructor(private rs:ActivatedRoute,private bakeryitemsservice:BakeryItemsService, private formbuilder:FormBuilder,  private snackBar: MatSnackBar, private userrouter : UserrouterService) { }

  individualBakeryItem:Bakery={}
  id: number = 0;

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


  ngOnInit(): void {
      this.rs.paramMap.subscribe(params=>{
      let productid=params.get("id") ?? 0;
      this.id = +productid;
      this.getOneProduct(productid);
    })
  }

  getOneProduct(id:any){
    this.bakeryitemsservice.getOneBakeryItemById(id).subscribe((data)=>{
      this.individualBakeryItem=data;
    })
  }

  editProduct(): void {
    this.bakeryitemsservice.modifyProduct(this.id,this.individualBakeryItem).subscribe((updatedNote) => {
      this.snackBar.open('Changes Saves Successfully!', 'Close', {
        duration: 5000, 
        verticalPosition: 'bottom', 
        horizontalPosition: 'center', 
        panelClass: ['success-snackbar']
    });
    });
    this.userrouter.navigateToAdminEditProducts();
  }

  canClose(){
    if(this.addProductForm.dirty)
    {
      let response=confirm("Are you Sure.. Do you really want to Leave.")
      return response;
    }
    else
    {
      return true;
    }
  }

}
