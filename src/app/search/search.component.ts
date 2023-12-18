import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  constructor() { }

  ngOnInit(): void {
  }

  disableSelect = new FormControl(false);

  @Output() 
  searchQuery:EventEmitter<string> = new EventEmitter<string>();
  searchInput:string = "";
  

  search() {
      this.searchQuery.emit(this.searchInput);
  }

}
