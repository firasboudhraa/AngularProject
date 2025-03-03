import { Component } from '@angular/core';
import { Residence } from 'src/app/core/models/residence';
import  { ResidenceService } from '../services/residence.service';


@Component({
  selector: 'app-residences-component',
  templateUrl: './residences-component.component.html',
  styleUrls: ['./residences-component.component.css']
})
export class ResidencesComponentComponent {
  search!: string
  selectedResidence: Residence | null = null;
  constructor (private rs:ResidenceService){}
  listResidences!:Residence[] ;
  ngOnInit(){
    this.rs.getResidences().subscribe(
      (data) => this.listResidences = data
    )
  }
  showLocation(r: Residence) {
    if (r.address === 'inconnu') {
      alert(`L'adresse de ${r.name} est inconnue`);
    } else {
      alert(`Adresse : ${r.address}`);
    }
  }

  favorites: Residence[] = [];

addToFavorites(r: Residence) {
  if (!this.favorites.includes(r)) {
    this.favorites.push(r);
    alert(`${r.name} ajouté aux favoris !`);
  }
}
removeFavorite(r: Residence) {
  this.favorites = this.favorites.filter(fav => fav.id !== r.id);
  alert(`${r.name} retiré des favoris.`);
}

delete( id :number){
  this.rs.deleteResidence(id).subscribe(
    ()=> this.ngOnInit()
  )
}
filteredResidences() : Residence[] {
  if (this.search === '') {
    return this.listResidences;
  } else {
    return this.listResidences.filter(
      (r) => r.name.toLowerCase().includes(this.search
        .toLowerCase())
    );  
}
}
}
