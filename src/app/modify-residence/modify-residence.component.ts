import { Component } from '@angular/core';
import  { Residence } from '../core/models/residence';
import  { ActivatedRoute, Router } from '@angular/router';
import  { ResidenceService } from '../services/residence.service';

@Component({
  selector: 'app-modify-residence',
  templateUrl: './modify-residence.component.html',
  styleUrls: ['./modify-residence.component.css']
})
export class ModifyResidenceComponent {
 residence!: Residence
 id!: number

 constructor(
  private Act:ActivatedRoute,
  private mr:ResidenceService,
  private router:Router
 ){}

 ngOnInit(){
  this.id= this.Act.snapshot.params['id']
 }

}
