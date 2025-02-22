import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  productForm= new FormGroup({
    title : new FormControl('', [Validators.required, Validators.minLength(4)]),
    price : new FormControl('', [Validators.required, Validators.min(1)]),
    quantity: new FormControl('', [Validators.required, Validators.min(1)]),
    img : new FormControl('',[Validators.minLength(6),Validators.required]),
    })

}
