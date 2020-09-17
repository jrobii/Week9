import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  add(id:number, name:string, desc:string, price:number, units: number) {
    return this.http.post('http://localhost:3000/api/add', {id:id, name:name, description:desc, price:price, units:units});
  }

  getProducts() {
    return this.http.get('http://localhost:3000/api/getList')
  }

  updateItem(prodid, name:string, desc:string, price:number, units:number) {
    return this.http.post('http://localhost:3000/api/update', {prodid: prodid, name:name, description:desc, price:price, units:units});
  }

  deleteItem(id:number) {
    return this.http.post('http://localhost:3000/api/delete', {productid:id});
  }

  checkid(productId:number) {
    return this.http.post('http://localhost:3000/api/checkid', {id:productId});
  }

  getItem(productId:number) {
    return this.http.post('http://localhost:3000/api/getitem', {id:productId});
  }
}
