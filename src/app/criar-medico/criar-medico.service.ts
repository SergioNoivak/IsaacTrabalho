import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { api } from 'src/environments/environment';
import Medico from '../../../model/Medico';

@Injectable({
  providedIn: 'root'
})
export class CriarMedicoService {

  constructor(private http:HttpClient) {}
  dadosCadastrados = false;

  public cadastrarMedico(medico:Medico){


    let resp:any;
    console.log(`${api.url}`)
    let that = this;
    let request = this.http.post<any>(api.url+'api/criar-medico/',medico,{ headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }).pipe(
          );

      console.log(request);
      return request;

  }
}
