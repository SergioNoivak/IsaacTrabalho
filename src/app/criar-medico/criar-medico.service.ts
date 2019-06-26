import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { api } from 'src/environments/environment';
import Medico from '../../../model/Medico';

@Injectable({
  providedIn: 'root'
})
export class CriarMedicoService {

  constructor(private http:HttpClient) {}

  public cadastrarMedico(medico:Medico){

    console.log(`${api.url}`)
     this.http.post<any>('http://localhost:8080/criar-medico/',medico, 
    { headers: new HttpHeaders({ 'Content-Type': 'application/json' })}).subscribe();   
  }
}
