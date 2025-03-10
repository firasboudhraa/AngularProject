import { Injectable } from '@angular/core';
import  { Product } from '../core/models/product';
import  { HttpClient } from '@angular/common/http';
import  { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private http:HttpClient) { }

  addProduct(p: Product) {
    return this.http.post<Product>("http://localhost:3000/products", p);
  }

  getProduct(): Observable<Product[]>{
    return this.http.get<Product[]>("http://localhost:3000/products")
  }

  getProductByID(id :number): Observable<Product>{
    return this.http.get<Product>("http://localhost:3000/products/"+id)
  }

  deleteProduct(id:number){
    return this.http.delete("http://localhost:3000/products/"+id)
  }

  updateProduct(p:Product){
    return this.http.put<Product>("http://localhost:3000/products/"+p.id,p)
  }
}
