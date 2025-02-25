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

  getResidenceById(id: number): Observable<Residence> {
    return this.http.get<Residence>(`${this.apiUrl}/${id}`);
  }

  addResidence( residence: Residence ){
    return this.http.post<Residence>(`${this.apiUrl}`,residence)
  }
  deleteResidence(id : number) {
    return this.http.delete("http://localhost:3000/residences/"+id)

  }
}
