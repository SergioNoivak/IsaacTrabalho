import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import Usuario from '../../../model/Usuario';
import { CriarContaService } from './criar-conta.service';

@Component({
  selector: 'app-criar-conta',
  templateUrl: './criar-conta.component.html',
  styleUrls: ['./criar-conta.component.scss']
})
export class CriarContaComponent implements OnInit {
  dadosValidos = true;
  dadosCadastrados = false;
  
  usuarioFormulario = this.fb.group({

    usuario: [''],
    senha: ['']

  });
  
  constructor(private fb: FormBuilder,private criarContaService:CriarContaService) {
   }
ngOnInit(){

}




onSubmit() {

  let usuario: Usuario = new Usuario(this.usuarioFormulario.value.usuario,this.usuarioFormulario.value.senha)

this.criarContaService.cadastrarUsuario(usuario).subscribe(response => {
  this.dadosValidos = response.success;
  this.dadosCadastrados = response.success;
})

  }
}
