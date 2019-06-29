import { Component, OnInit } from '@angular/core';
import Veiculo from '../../../model/Veiculo';
import { EditarVeiculoService } from './editar-veiculo.service';
@Component({
  selector: 'app-editar-veiculo',
  templateUrl: './editar-veiculo.component.html',
  styleUrls: ['./editar-veiculo.component.scss']
})
export class EditarVeiculoComponent implements OnInit {

  editadoComSucesso:boolean = false;
  numeroSerieBusca:any;
  veiculo:Veiculo;  
  CPFexiste:boolean = true;
  podeEditar = false;
  
  
  constructor(private editarVeiculoService:EditarVeiculoService) { 
    this.veiculo = new Veiculo("","","Manual",0,"","2000");
  }

  ngOnInit() {
  }

  buscar(){
    this.editarVeiculoService.getVeiculo(this.numeroSerieBusca).subscribe(response => {
      
      if(response.result){
        this.podeEditar=true;
        this.veiculo.modelo = response.result.modelo ; 
        this.veiculo.montadora = response.result.montadora ; 
        this.veiculo.cambio = response.result.cambio ; 
        this.veiculo.numeroSerie = response.result.numeroSerie ; 
        this.veiculo.proprietario = response.result.proprietario ; 
        this.veiculo.ano = response.result.ano;
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
      this.veiculo.zerar();
  }

  salvar(){
    console.log("dsadas") ;
      this.editarVeiculoService.setVeiculo(this.veiculo,this.numeroSerieBusca).subscribe(response => {
        this.editadoComSucesso=true;
      this.veiculo.zerar();
        
      })
      



  }
}
