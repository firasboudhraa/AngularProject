import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import  { ProductService } from '../services/product.service';
import  { Product } from '../core/models/product';

@Component({
  selector: 'app-detail-prod',
  templateUrl: './detail-prod.component.html',
  styleUrls: ['./detail-prod.component.css']
})
export class DetailProdComponent {
  id!: number
  product!:Product
  constructor( private Act:ActivatedRoute, private pr:ProductService){}
  

  ngOnInit(){
    this.id=this.Act.snapshot.params['id']
    this.pr.getProductByID(this.id).subscribe(
      (data) => 
        this.product = data
      
    )
  }
}
