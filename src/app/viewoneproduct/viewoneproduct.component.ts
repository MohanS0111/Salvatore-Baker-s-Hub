import { Component, OnInit } from '@angular/core';
import { BakeryItemsService } from '../services/bakery-items.service';
import { ActivatedRoute } from '@angular/router';
import { Bakery } from '../models/bakery';
import { AuthService } from '../services/user-services/auth.service';

@Component({
  selector: 'app-viewoneproduct',
  templateUrl: './viewoneproduct.component.html',
  styleUrl: './viewoneproduct.component.css'
})
export class ViewoneproductComponent implements OnInit {

  viewOneProduct:Bakery={};

  constructor(private bakeryservice : BakeryItemsService, private activeatedroute:ActivatedRoute, public userauth : AuthService){}

  ngOnInit() { 
    this.activeatedroute.paramMap.subscribe(params=>{
    let productid=params.get("id") ?? 0;
    this.getOneProduct(productid);
    })
  }

  getOneProduct(id:any){
    this.bakeryservice.getOneBakeryItemById(id).subscribe((data)=>{
      this.viewOneProduct=data;
    })
  }
}

