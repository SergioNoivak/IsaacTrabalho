import { Injectable } from '@angular/core';
import Medico from '../../../model/Medico';
import { api } from '../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DeletarMedicoService {

  constructor(private http:HttpClient) { }


  delete(medico:Medico){


    let params = new HttpParams()
    .set("CPF",""+medico.CPF)
    .set("CRM",""+medico.CRM)
    .set("nome",""+medico.nome)
    .set("periodoAtendimento",""+medico.periodoAtendimento)
    .set("predio",""+medico.predio)
    .set("setor",""+medico.setor);
console.log(medico)
     return this.http.post<any>(api.url+'api/deletar-medico/',{medico:medico},{ headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    })

    




  }
}
