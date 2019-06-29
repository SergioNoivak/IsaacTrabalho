import { Injectable } from '@angular/core';
import { api } from '../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import Veiculo from '../../../model/Veiculo';
@Injectable({
  providedIn: 'root'
})
export class DeletarVeiculoService {

  constructor(private http:HttpClient) { }


  delete(veiculo:Veiculo){


    let params = new HttpParams()
    .set("modelo",""+veiculo.modelo)
    .set("montadora",""+veiculo.montadora)
    .set("cambio",""+veiculo.cambio)
    .set("numeroSerie",""+veiculo.numeroSerie)
    .set("proprietario",""+veiculo.proprietario)
    .set("ano",""+veiculo.ano);
console.log(veiculo)
     return this.http.post<any>(api.url+'api/deletar-veiculo/',{veiculo:veiculo},{ headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    })

    




  }}
