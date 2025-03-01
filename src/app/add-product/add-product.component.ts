import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  productForm!: FormGroup;
  
  constructor(private pr: ProductService, private router: Router) {}

  ngOnInit() {
    this.productForm = new FormGroup({
      id: new FormControl('',[Validators.required,Validators.min(1)]),
      title: new FormControl('', [Validators.required, Validators.minLength(4)]),
      price: new FormControl('', [Validators.required, Validators.min(1)]),
      quantity: new FormControl('', [Validators.required, Validators.min(1)]),
      image: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }


  onSubmit() {
    if (this.productForm.valid) {      
      this.pr.addProduct(this.productForm.value).subscribe({
        next: () => {
          this.router.navigateByUrl('/products'); 
        },
      });
    }
  }
}
