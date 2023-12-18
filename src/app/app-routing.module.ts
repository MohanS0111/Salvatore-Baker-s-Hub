import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewoneproductComponent } from './viewoneproduct/viewoneproduct.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { EditproductsComponent } from './editproducts/editproducts.component';
import { EditproductsonebyoneComponent } from './editproductsonebyone/editproductsonebyone.component';
import { AuthGuard } from './services/admin-services/adminguard.guard';
import { adminclosingguardGuard } from './services/admin-services/adminclosingguard.guard';
import { UserregistrationformComponent } from './userregistrationform/userregistrationform.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { PlaceorderComponent } from './placeorder/placeorder.component';
import { ViewallordersComponent } from './viewallorders/viewallorders.component';
import { userguardGuard } from './services/user-services/userguard.guard';
import { UserorderdetailsComponent } from './userorderdetails/userorderdetails.component';


const routes: Routes = [
  {path : "", component:HomeComponent},
  {path : "home", component:HomeComponent},
  {path : "viewDetails/:id", component:ViewoneproductComponent},
  {path : "home/viewDetails/:id", component:ViewoneproductComponent},

  {path : "admin-view", component:AdmindashboardComponent, canActivate:[AuthGuard]},
  {path : "add-products", component:AddproductsComponent, canActivate:[AuthGuard]},
  {path : "edit-products", component:EditproductsComponent, canActivate:[AuthGuard]},
  {path : "edit-products-individually/:id", component:EditproductsonebyoneComponent, canActivate:[AuthGuard], canDeactivate:[adminclosingguardGuard]},
  {path : "view-all-orders", component:ViewallordersComponent},

  {path : "user-registration-form", component:UserregistrationformComponent},
  {path : "user-login", component:UserloginComponent},

  {path : "viewDetails/:id/Place-order", component:PlaceorderComponent, canActivate:[userguardGuard]},
  {path : "home/viewDetails/:id/Place-order", component:PlaceorderComponent, canActivate:[userguardGuard]},

  {path : "myorders", component:UserorderdetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
