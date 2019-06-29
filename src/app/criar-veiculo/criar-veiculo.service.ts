import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { api } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CriarVeiculoService {

  constructor(private http:HttpClient) { }


cadastrar(veiculo){
  

  let resp:any;
  console.log(`${api.url}`)
  let that = this;
  let request = this.http.post<any>(api.url+'api/criar-veiculo/',veiculo,{ headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }).pipe(
        );

    console.log(request);
    return request;
}

}
