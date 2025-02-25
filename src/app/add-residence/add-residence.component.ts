// src/app/components/add-residence/add-residence.component.ts
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ResidenceService } from '../services/residence.service';
import { Router } from '@angular/router';
import { Residence } from '../core/models/residence';

@Component({
  selector: 'app-add-residence',
  templateUrl: './add-residence.component.html',
  styleUrls: ['./add-residence.component.css']
})
export class AddResidenceComponent implements OnInit {
  statusOptions: string[] = ["Disponible", "En construction", "Vendu"];
  ResidenceForm!: FormGroup;

  constructor(private rs: ResidenceService, private router: Router) {}

  ngOnInit() {
    this.ResidenceForm = new FormGroup({
      id: new FormControl('', [Validators.required, Validators.min(1)]),
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      address: new FormControl('', [Validators.required, Validators.minLength(6)]),
      status: new FormControl('', [Validators.required]),
      image: new FormControl('',Validators.required)
    });
  }

  onSubmit() {
    if (this.ResidenceForm.valid) {
      const formData: Residence = this.ResidenceForm.value; // Obtenir les valeurs du formulaire
      
      this.rs.addResidence(formData).subscribe({
        next: () => {
          console.log('Résidence ajoutée avec succès !');
          this.router.navigate(['/residences']); // Redirection après ajout
        },
      });
    }
  }
}
