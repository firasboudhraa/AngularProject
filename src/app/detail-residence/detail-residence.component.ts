import { Component } from '@angular/core';
import  { ResidenceService } from '../services/residence.service';
import { ActivatedRoute } from '@angular/router';
import { Residence } from '../core/models/residence';

@Component({
  selector: 'app-detail-residence',
  templateUrl: './detail-residence.component.html',
  styleUrls: ['./detail-residence.component.css']
})
export class DetailResidenceComponent {
  id!: number
  residence!: Residence;

  constructor( private rs:ResidenceService, private Act:ActivatedRoute){}


  
    ngOnInit(){
      this.id=this.Act.snapshot.params['id']
      this.rs.getResidenceById(this.id).subscribe(
        (data) => this.residence = data
      )
    }

}
