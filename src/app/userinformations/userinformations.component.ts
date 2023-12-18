import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user-services/user.service';
import { UserDetails } from '../models/userdetails';

@Component({
  selector: 'app-userinformations',
  templateUrl: './userinformations.component.html',
  styleUrl: './userinformations.component.css'
})
export class UserinformationsComponent implements OnInit {

  fetchedUsers:UserDetails[]=[];

  constructor(private userservice : UserService){}

  ngOnInit(): void {
    this.getallusers();
  }

  getallusers(){
    this.userservice.getAllUsers().subscribe((allusers)=>{
     this.fetchedUsers = allusers
    })
  }
}
