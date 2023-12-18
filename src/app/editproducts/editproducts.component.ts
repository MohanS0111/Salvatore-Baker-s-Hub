import { Component, OnInit } from '@angular/core';
import { Bakery } from '../models/bakery';
import { BakeryItemsService } from '../services/bakery-items.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-editproducts',
  templateUrl: './editproducts.component.html',
  styleUrl: './editproducts.component.css'
})
export class EditproductsComponent implements OnInit {

  dataSource: Bakery[] = [];

  constructor(private bakeryservice:BakeryItemsService, private snackBar: MatSnackBar) { 
  }

  ngOnInit(): void {
    this.loadAllProducts();
  }

  loadAllProducts() {
    this.bakeryservice.getAllBakeryItems().subscribe(
      (data) => {
        this.dataSource = data;
      },
      (error) => {
        console.error('Error fetching products', error);
      }
    );
  }

   delete(id: any): void {
    this.bakeryservice.deleteProduct(id).subscribe(
      () => {
        this.dataSource = this.dataSource.filter(selestednote => selestednote.id !== id);
        this.snackBar.open('Product Deleted Successfully!', 'Close', {
          duration: 5000, 
          verticalPosition: 'bottom', 
          horizontalPosition: 'center', 
          panelClass: ['success-snackbar']
      });
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
