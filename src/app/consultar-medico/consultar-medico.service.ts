import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { api } from 'src/environments/environment';
import Medico from '../../../model/Medico';
@Injectable({
  providedIn: 'root'
})
export class ConsultarMedicoService {
  capacity= 35;
  constructor(private http:HttpClient) { }


  public getAllMedico(){


    console.log(`${api.url}`)
    let that = this;
     return this.http.get<any>(api.url+'api/get-all-medico/',{ headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    }).pipe(
          );

}
}
