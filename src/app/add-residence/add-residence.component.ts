import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-residence',
  templateUrl: './add-residence.component.html',
  styleUrls: ['./add-residence.component.css']
})
export class AddResidenceComponent {

  statusOptions: string[] = ["Disponible", "En construction", "Vendu"];

  ResidenceForm= new FormGroup({
    name : new FormControl('',[Validators.minLength(4),Validators.required]),
    status : new FormControl('',[Validators.required]),
    id: new FormControl('',[Validators.minLength(1),Validators.required]),
    address : new FormControl('',[Validators.minLength(6),Validators.required]),
  })

}
