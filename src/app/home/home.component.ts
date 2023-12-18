import { Component, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { Bakery } from '../models/bakery';
import { BakeryItemsService } from '../services/bakery-items.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  fetchedBakeryItems : Bakery[] = []; 
  filterdItems:string="CupCakes"; 

  constructor(private bakeryItemsService : BakeryItemsService){}

  ngOnInit() {
    this.getAllBakeryItems();
  }

  getAllBakeryItems(){
    this.bakeryItemsService.getAllBakeryItems().subscribe(
      (allBakeryItems) => {this.fetchedBakeryItems = allBakeryItems}
    )
  }

  filterByName(event:any)
  {
    this.bakeryItemsService.getBakeryItemsByName(event).subscribe(
    (data)=>this.fetchedBakeryItems=data,
    (error)=>alert(error.message)
    )
  }

  filterbyCategory(event:any)
  {
      this.bakeryItemsService.getBakeryItemsByCategory(event).subscribe(
      (data)=>this.fetchedBakeryItems=data,
      (error)=>alert(error.message)
    )
  }
}
