import { Component } from '@angular/core';
import  { Residence } from '../core/models/residence';
import  { ActivatedRoute, Router } from '@angular/router';
import  { ResidenceService } from '../services/residence.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modify-residence',
  templateUrl: './modify-residence.component.html',
  styleUrls: ['./modify-residence.component.css']
})
export class ModifyResidenceComponent {
 residence!: Residence
 id!: number
 ResidenceForm!: FormGroup;
 statusOptions: string[] = ["Disponible", "En construction", "Vendu"];
 

 constructor(
  private Act:ActivatedRoute,
  private mr:ResidenceService,
  private router:Router
 ){
  this.ResidenceForm = new FormGroup({
    id: new FormControl('', [Validators.required, Validators.min(1)]),
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    address: new FormControl('', [Validators.required, Validators.minLength(6)]),
    status: new FormControl('', [Validators.required]),
    image: new FormControl('',Validators.required)
  });
 }

   ngOnInit() {
    this.id=this.Act.snapshot.params['id']
    this.mr.getResidenceById(this.id).subscribe(
      (data) =>this.ResidenceForm.patchValue(data)
    )
   }

   onSubmit(){
    if (this.ResidenceForm.valid) {      
      this.mr.updateResidence(this.ResidenceForm.value).subscribe({
        next: () => {
          console.log('Résidence ajoutée avec succès !');
          this.router.navigate(['/residences']); 
        },
      });
    }
   }

}
