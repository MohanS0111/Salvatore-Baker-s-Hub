import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDetails } from '../../models/userdetails';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpclient : HttpClient) { }

  getAllUsers(){
    return this.httpclient.get<UserDetails[]>("http://localhost:3000/userInformation")
  }

  addNewUser(newuser:UserDetails){
    return this.httpclient.post<UserDetails>("http://localhost:3000/userInformation",newuser)
  }

  checkIfUserAlreadyExixts(emailAddress:string){
    return this.httpclient.get<UserDetails[]>("http://localhost:3000/userInformation?emailAddress="+emailAddress)
  }

  loginAuthenticationCheck(emailAddress:string, password:string){
    return this.httpclient.get<UserDetails[]>("http://localhost:3000/userInformation?emailAddress="+emailAddress+"&password="+password)
  }
}
