import { Residence } from './../core/models/residence';
import  { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import type { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ResidenceService {
  private apiUrl = "http://localhost:3000/residences"; 

  constructor( private http:HttpClient) { }

  getResidences(): Observable<Residence[]>{
    return this.http.get<Residence[]>("http://localhost:3000/residences") ;
  }

  // Récupérer une résidence par ID
  getResidenceById(id: number): Observable<Residence> {
    return this.http.get<Residence>(`${this.apiUrl}/${id}`);
  }

  addResidence( residence: Residence ){
    return this.http.post<Residence>(`${this.apiUrl}`,residence)
  }
}
