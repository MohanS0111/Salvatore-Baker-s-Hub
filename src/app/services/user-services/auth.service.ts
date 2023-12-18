import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserrouterService } from './userrouter.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isUserLoggedIn : boolean = false;
  isAdminLoggedIn : boolean = false;
  username?:string;
  useremail?:string;
  userphonenumber?:string;

  constructor(private snackBar: MatSnackBar, private userrouter : UserrouterService, private userservice : UserService) { }

  setadminstatus(){
    this.isAdminLoggedIn = true;
    this.snackBar.open('Successfully Logged in as an Admin!', 'Close', {
      duration: 5000, 
      verticalPosition: 'bottom', 
      horizontalPosition: 'center', 
      panelClass: ['success-snackbar']
    });
    console.log("Admin",this.isAdminLoggedIn); 
    this.userrouter.navigateToAdminDashborad();
    return this.isAdminLoggedIn;
  }

  setuserstatus(){
    this.isUserLoggedIn = true;
    this.snackBar.open('Login Successfull!', 'Close', {
      duration: 5000, 
      verticalPosition: 'bottom', 
      horizontalPosition: 'center', 
      panelClass: ['success-snackbar']
    });
    console.log("User", this.isUserLoggedIn);
    this.userrouter.navigatetoHome();
    return this.isUserLoggedIn;
  }

  setadminname(){
    if(this.isAdminLoggedIn==true){
      return this.username = "Adminstrator";
    }
    return '';
  }

  setusername(name:string, email:string, phoneNumber:string):any{
    if(this.isUserLoggedIn==true){
      this.useremail = email,
      this.userphonenumber = phoneNumber
      return this.username = name;
    }
    else{
      return ""
    }
  }

  setadminstatustologout(){
    this.isAdminLoggedIn = false;
    console.log("Admin",this.isAdminLoggedIn);
    return this.isAdminLoggedIn;
  }

  setuserstatustologout(){
    this.isUserLoggedIn = false;
    console.log("User", this.isUserLoggedIn);
    return this.isUserLoggedIn;
  }
}
