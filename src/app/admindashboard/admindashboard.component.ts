import { Component } from '@angular/core';
import { AuthService } from '../services/user-services/auth.service';
import { UserrouterService } from '../services/user-services/userrouter.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrl: './admindashboard.component.css'
})
export class AdmindashboardComponent {

  adminactivities: string[] = ['AddProducts', 'EditProducts', 'ViewOrders'];

  constructor(private userrouter : UserrouterService, private userauthservice : AuthService){}
  
  ngOnInit(): void {
  }

  selectedCategory:string = "";

  onCategorySelected(category: string) {
    this.selectedCategory = category;
    if(this.selectedCategory==="AddProducts"){
      this.userrouter.navigateToAdminAddProducts();
    }
    else if(this.selectedCategory==="EditProducts"){
     this.userrouter.navigateToAdminEditProducts();
    }
    else if(this.selectedCategory==="ViewOrders"){
      this.userrouter.navigateToAdminViewProducts();
    }
  }

  loggingOut(){
     this.userauthservice.setadminstatustologout();
     this.userrouter.navigateToUserLogin();
  }
}
