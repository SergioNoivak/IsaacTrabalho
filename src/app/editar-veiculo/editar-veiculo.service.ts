import { Injectable } from '@angular/core';
import Veiculo from '../../../model/Veiculo';
import { api } from '../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EditarVeiculoService {

  constructor(private http:HttpClient) { }

  public  getVeiculo(numeroSerie:string){

    console.log(`${api.url}`)
    let that = this;
    let params = new HttpParams().set("numeroSerie",numeroSerie) //Create new HttpParams
     return this.http.get<any>(api.url+'api/buscar-veiculo/',{ headers: new HttpHeaders({ 'Content-Type': 'application/json'})
     , params:params}).pipe(
          );



  }


  
  setVeiculo(veiculo:Veiculo,numeroSerie:any){

    let params = new HttpParams()
    .set("modelo",""+veiculo.modelo)
    .set("montadora",""+veiculo.montadora)   
    .set("cambio",""+veiculo.cambio)
    .set("numeroSerie",""+veiculo.numeroSerie)   
    .set("proprietario",""+veiculo.proprietario)
    .set("ano",""+veiculo.ano);
console.log(veiculo)
     return this.http.post<any>(api.url+'api/alterar-veiculo/',{veiculo:veiculo,oldNumeroSerie:numeroSerie},{ headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    })

    
  }

}
