import { Component, OnInit } from '@angular/core';
import { EditarVeiculoService } from '../editar-veiculo/editar-veiculo.service';
import { EditarMedicoService } from './editar-medico.service';

@Component({
  selector: 'app-editar-medico',
  templateUrl: './editar-medico.component.html',
  styleUrls: ['./editar-medico.component.scss']
})
export class EditarMedicoComponent implements OnInit {
  CPFbusca:any;
  
  nome:any="";
  CRM:any="";
  CPF:any=0;
  predio:any="";
  setor:any="";
  periodoAtendimento:any="Vespertino"
  
  CPFexiste:boolean = true;
  podeEditar = false;


  
  
  constructor(private editarMedicoService:EditarMedicoService) { 
 
  }

  ngOnInit() {
  }

  buscar(){
    this.editarMedicoService.getMedico(this.CPFbusca).subscribe(response => {
      
      if(response.result){
        this.podeEditar=true;
        this.nome = response.result.nome ; 
        this.CRM = response.result.CRM ; 
        this.CPF = response.result.CPF ; 
        this.predio = response.result.predio ; 
        this.setor = response.result.setor ; 
        this.periodoAtendimento = response.result.periodoAtendimento;
        this.CPFexiste = true;
        this.podeEditar=true;


      }
      if(response.result==null){
        this.CPFexiste = false;
        this.zerar();
        this.podeEditar=false
      }
     
      console.log(response)
      })
  }

  zerar(){

    this.nome="";
    this.CRM="";
    this.CPF=0;
    this.predio="";
    this.setor="";
    this.periodoAtendimento="Vespertino";
  }

}
