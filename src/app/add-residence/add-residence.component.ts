import { Residence } from 'src/app/core/models/residence';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-residence',
  templateUrl: './add-residence.component.html',
  styleUrls: ['./add-residence.component.css']
})

export class AddResidenceComponent {
  ResidenceForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    address: new  FormControl(),
    image: new FormControl(),
    status: new FormControl(),
  })

}
