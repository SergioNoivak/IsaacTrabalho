import { Injectable } from '@angular/core';
import Usuario from '../../../model/Usuario';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { api } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CriarContaService {

  constructor(private http:HttpClient) {}

  public cadastrarUsuario(usuario:Usuario){


    let resp:any;
    console.log(`${api.url}`)
    let that = this;
    let request = this.http.post<any>(api.url+'api/criar-usuario/',usuario,{ headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }).pipe(
          );

      return request;

  }
}
