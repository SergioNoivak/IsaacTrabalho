import { Injectable } from '@angular/core';
import { api } from '../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

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


  setMedico(nome:any,CRM:any,CPF:any,predio:any,setor:any,periodoAtendimento:any){


    let that = this;
    let params = new HttpParams().set("CPF",CPF) //Create new HttpParams

     return this.http.get<any>(api.url+'api/buscar-medico/',{ headers: new HttpHeaders({ 'Content-Type': 'application/json'})
     , params:params}).pipe(
          );


    
  }


}
