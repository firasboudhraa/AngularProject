import { Component } from '@angular/core';
import { Residence } from 'src/app/core/models/residence';


@Component({
  selector: 'app-residences-component',
  templateUrl: './residences-component.component.html',
  styleUrls: ['./residences-component.component.css']
})
export class ResidencesComponentComponent {
  listResidences: Residence[] = [
    { id: 1, name: 'Résidence A', address: 'Rue 123, Paris', image: 'assets/R1.jpg', status: 'Disponible' },
    { id: 2, name: 'Résidence B', address: 'inconnu', image: 'assets/R2.jpg', status: 'En Construction' },
    { id: 3, name: 'Résidence C', address: 'Rue 456, Lyon', image: 'assets/R3.jpg', status: 'Vendu' }
  ];

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

}
