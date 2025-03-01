import { Component } from '@angular/core';
import  { Product } from '../core/models/product';
import  { ProductService } from '../services/product.service';
import  { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modify-product',
  templateUrl: './modify-product.component.html',
  styleUrls: ['./modify-product.component.css']
})
export class ModifyProductComponent {
  id!: number
  product!:Product
  productForm!: FormGroup
  constructor(
    private pr:ProductService,
    private Act: ActivatedRoute,
    private router:Router
  ){
    this.productForm=new FormGroup({
      id: new FormControl('',[Validators.required,Validators.min(1)]),
      title: new FormControl('', [Validators.required, Validators.minLength(4)]),
      price: new FormControl('', [Validators.required, Validators.min(1)]),
      quantity: new FormControl('', [Validators.required, Validators.min(1)]),
      image: new FormControl('', [Validators.required, Validators.minLength(6)]),
    })
  }

  ngOnInit(){
    this.id= this.Act.snapshot.params['id']
    this.pr.getProductByID(this.id).subscribe(
      (data)=>this.productForm.patchValue(data)
    )
  }

  onSubmit(){
    if(this.productForm.valid){
      this.pr.updateProduct(this.productForm.value).subscribe(
        ()=>this.router.navigateByUrl('/products')
       )
    }
  }
}
