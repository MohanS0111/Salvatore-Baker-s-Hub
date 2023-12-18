import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { SearchComponent } from './search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { TagsComponent } from './tags/tags.component';
import { ViewoneproductComponent } from './viewoneproduct/viewoneproduct.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { EditproductsComponent } from './editproducts/editproducts.component';
import { MatTableModule } from '@angular/material/table';
import { EditproductsonebyoneComponent } from './editproductsonebyone/editproductsonebyone.component';
import { UserregistrationformComponent } from './userregistrationform/userregistrationform.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserinformationsComponent } from './userinformations/userinformations.component';
import { PlaceorderComponent } from './placeorder/placeorder.component';
import {MatRadioModule} from '@angular/material/radio';
import { ViewallordersComponent } from './viewallorders/viewallorders.component';
import { UserorderdetailsComponent } from './userorderdetails/userorderdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    TagsComponent,
    ViewoneproductComponent,
    AdmindashboardComponent,
    AddproductsComponent,
    EditproductsComponent,
    EditproductsonebyoneComponent,
    UserregistrationformComponent,
    UserloginComponent,
    UserinformationsComponent,
    PlaceorderComponent,
    ViewallordersComponent,
    UserorderdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    ReactiveFormsModule, 
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatSelectModule,
    MatChipsModule,
    MatTableModule,
    MatRadioModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
