import { Injectable } from '@angular/core';
import { api } from '../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import Medico from '../../../model/Medico';

@Injectable({
  providedIn: 'root'
})
export class EditarMedicoService {

  constructor(private http:HttpClient) {

   }

public  getMedico(CPF:string){

    console.log(`${api.url}`)
    let that = this;
    let params = new HttpParams().set("CPF",CPF) //Create new HttpParams
     return this.http.get<any>(api.url+'api/buscar-medico/',{ headers: new HttpHeaders({ 'Content-Type': 'application/json'})
     , params:params}).pipe(
          );



  }


  setMedico(medico:Medico,oldCPF:any){

    let params = new HttpParams()
    .set("CPF",""+medico.CPF)
    .set("CRM",""+medico.CRM)
    .set("nome",""+medico.nome)
    .set("periodoAtendimento",""+medico.periodoAtendimento)
    .set("predio",""+medico.predio)
    .set("setor",""+medico.setor);
console.log(medico)
     return this.http.post<any>(api.url+'api/alterar-medico/',{medico:medico,oldCPF:oldCPF},{ headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    })

    
  }



}
