import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user-services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserrouterService } from '../services/user-services/userrouter.service';
import { AuthService } from '../services/user-services/auth.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrl: './userlogin.component.css'
})
export class UserloginComponent implements OnInit{

  loginDetailsForm!:FormGroup;

  constructor(private userservice : UserService, private formBuilder: FormBuilder, private authservice : AuthService){}
  
  ngOnInit(): void {
    this.loginDetailsForm = this.formBuilder.group({
      emailAddress: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if(this.loginDetailsForm.get('emailAddress')?.value=="admin@01" && this.loginDetailsForm.get('password')?.value=="admin@123"){
      if(this.authservice.setadminstatus()){
        this.authservice.setadminname();
      }
    }

    else{
       this.userservice.loginAuthenticationCheck(this.loginDetailsForm.get('emailAddress')?.value, this.loginDetailsForm.get('password')?.value).subscribe((data)=>{
       if(data.length==1){
         if(this.authservice.setuserstatus()){
          this.authservice.setusername(data[0].name, data[0].emailAddress, data[0].phoneNumber);
          //sessionStorage.setItem('userEmail', data[0].emailAddress);
         }
       }
    
    else{
      this.userservice.checkIfUserAlreadyExixts(this.loginDetailsForm.get('emailAddress')?.value).subscribe((data)=>{
        if(data.length==1){
          alert("Password Incorrect")
        }
        else{
          alert("Email ID and Password Doesn't Exist!")
        }
      })
    }
   })
  }
  this.loginDetailsForm = this.formBuilder.group({
    emailAddress: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });
  }
}
