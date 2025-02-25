import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  color!:string
  search!:number 
  title: string = "welcome 4arctic 7"
  products!: any[]

  constructor(private ps:ProductService){}
 ngOnInit(){
  this.products=this.ps.products
 }
  show() {
    alert("bonjour")
  }

  like(i: number) {
    this.products[i].like++
  }
  acheterProduit(product: any) {
    if (product.quantity > 0) {
      product.quantity--;
    } else {
      alert("Stock épuisé !");
    }
  }

}
