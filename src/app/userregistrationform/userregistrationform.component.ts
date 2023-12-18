import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user-services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserrouterService } from '../services/user-services/userrouter.service';

@Component({
  selector: 'app-userregistrationform',
  templateUrl: './userregistrationform.component.html',
  styleUrl: './userregistrationform.component.css'
})
export class UserregistrationformComponent implements OnInit{

  userDetailsForm!:FormGroup;

  constructor(private userservice : UserService, private formBuilder: FormBuilder, private snackBar: MatSnackBar, private userrouter : UserrouterService){}

  ngOnInit() {
    this.userDetailsForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.pattern("^\\d{10}$"), Validators.minLength(10)]],
      emailAddress: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      address: this.formBuilder.group({
        doorNo: ['', [Validators.required]],
        streetName: ['', [Validators.required]],
        city: ['', [Validators.required]],
        state: ['', [Validators.required]],
        pincode: ['', [Validators.required, Validators.pattern("^\\d{5}$")]],
      })
    });
  }

  onSubmit() {
    if (this.userDetailsForm.valid) {
        this.userservice.checkIfUserAlreadyExixts(this.userDetailsForm.get('emailAddress')?.value).subscribe((data)=>{
          if(data.length!=0){
            alert("Email Address already Exists")
          }
          else{
            this.userservice.addNewUser(this.userDetailsForm.value).subscribe((data)=>{
            this.snackBar.open('Registration Successfull!', 'Close', {
              duration: 5000, 
              verticalPosition: 'bottom', 
              horizontalPosition: 'center', 
              panelClass: ['success-snackbar']
            });
          })
           this.userrouter.navigateToUserLogin();
          }
      })
    }
  }
}