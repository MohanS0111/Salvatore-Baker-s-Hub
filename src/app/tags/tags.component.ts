import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent implements OnInit {

  bakeryCategories: string[] = ['Cakes', 'Cookies', 'Chocolates', 'CupCakes'];

  constructor(){}
  
  ngOnInit(): void {
  }

  @Output() 
  filteredQuery:EventEmitter<string> = new EventEmitter<string>();
  selectedCategory:string = "";

  onCategorySelected(category: string) {
    this.selectedCategory = category;
    this.filteredQuery.emit(this.selectedCategory);
  }
}
