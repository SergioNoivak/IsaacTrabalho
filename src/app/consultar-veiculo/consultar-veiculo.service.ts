import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { api } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ConsultarVeiculoService {

  constructor(private http:HttpClient) { }
getAll(){

  console.log(`${api.url}`)
  let that = this;
   return this.http.get<any>(api.url+'api/get-all-veiculo/',{ headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  }).pipe(
        );

}
  
}
