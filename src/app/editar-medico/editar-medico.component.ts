import { Component, OnInit } from '@angular/core';
import { EditarMedicoService } from './editar-medico.service';
import Medico from '../../../model/Medico';

@Component({
  selector: 'app-editar-medico',
  templateUrl: './editar-medico.component.html',
  styleUrls: ['./editar-medico.component.scss']
})
export class EditarMedicoComponent implements OnInit {
  editadoComSucesso:boolean = false;
  CPFbusca:any;
  medico:Medico;  
  CPFexiste:boolean = true;
  podeEditar = false;
  
  
  constructor(private editarMedicoService:EditarMedicoService) { 
    this.medico = new Medico("","","Vespertino",0,"","");
  }

  ngOnInit() {
  }

  buscar(){
    this.editarMedicoService.getMedico(this.CPFbusca).subscribe(response => {
      
      if(response.result){
        this.podeEditar=true;
        this.medico.nome = response.result.nome ; 
        this.medico.CRM = response.result.CRM ; 
        this.medico.CPF = response.result.CPF ; 
        this.medico.predio = response.result.predio ; 
        this.medico.setor = response.result.setor ; 
        this.medico.periodoAtendimento = response.result.periodoAtendimento;
        this.CPFexiste = true;
        this.podeEditar=true;


      }
     else if(response.result==null){
        this.CPFexiste = false;
        this.zerar();
        this.podeEditar=false
        this.editadoComSucesso= false;
      }
     
      console.log(response)
      })
  }

  zerar(){
      this.medico.zerar();
  }

  salvar(){
    console.log("dsadas") ;
      this.editarMedicoService.setMedico(this.medico,this.CPFbusca).subscribe(response => {
        this.editadoComSucesso=true;
      this.medico.zerar();
        
      })
      



  }

}
