import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bakery } from '../models/bakery';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BakeryItemsService {

  constructor(private httpclient : HttpClient) { }

  getAllBakeryItems(){
    return this.httpclient.get<Bakery[]>("http://localhost:3000/bakery-items")
  }

  getBakeryItemsByName(name:string)
  {
    return this.httpclient.get<Bakery[]>("http://localhost:3000/bakery-items?name="+name);
  }

  getBakeryItemsByCategory(category: string): Observable<Bakery[]> 
  {
    console.log("service")
    return this.httpclient.get<Bakery[]>("http://localhost:3000/bakery-items?category="+category);
  }

  getOneBakeryItemById(id:number)
  {
    return this.httpclient.get<Bakery>("http://localhost:3000/bakery-items/"+id);
  }

  addNewProduct(newproduct:Bakery)
  {
   return this.httpclient.post<Bakery>("http://localhost:3000/bakery-items",newproduct);
  }

  modifyProduct(id:number,bakeryitems : Bakery){
    const url = `${"http://localhost:3000/bakery-items"}/${bakeryitems.id}`;
    return this.httpclient.put<Bakery>(url, bakeryitems);
  }

  deleteProduct(id: number){
    const url = `${"http://localhost:3000/bakery-items"}/${id}`;
    return this.httpclient.delete<{}>(url);
  }





}
