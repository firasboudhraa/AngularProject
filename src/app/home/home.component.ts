import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import type { Product } from '../core/models/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  color!:string
  search!:number 
  title: string = "welcome 4arctic 7"
  products!: Product[]

  constructor(private ps:ProductService){}
 ngOnInit(){
  this.ps.getProduct().subscribe(
    (data)=> this.products=data
  )
 }
  show() {
    alert("bonjour")
  }

  like(i: number) {
    this.products[i].like++
  }
  acheterProduit(product: Product) {
    if (product.quantity > 0) {
      product.quantity--;
    } else {
      alert("Stock épuisé !");
    }
  }

  delete (id:number){
    this.ps.deleteProduct(id).subscribe(
      ()=>this.ngOnInit()
    )
  }

}
