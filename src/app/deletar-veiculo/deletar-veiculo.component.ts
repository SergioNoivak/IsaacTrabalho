import { Component, OnInit } from '@angular/core';
import Veiculo from '../../../model/Veiculo';
import { DeletarVeiculoService } from './deletar-veiculo.service';
import { EditarVeiculoService } from '../editar-veiculo/editar-veiculo.service';


@Component({
  selector: 'app-deletar-veiculo',
  templateUrl: './deletar-veiculo.component.html',
  styleUrls: ['./deletar-veiculo.component.scss']
})
export class DeletarVeiculoComponent implements OnInit {
  editadoComSucesso:boolean = false;
  numeroSerieBusca:any;
  veiculo:Veiculo;  
  CPFexiste:boolean = true;
  podeEditar = false;
  
  
  constructor(private editarVeiculoService:EditarVeiculoService,private deletarVeiculoService:DeletarVeiculoService) { 
    this.veiculo = new Veiculo("","","Manual",0,"","");
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
      this.deletarVeiculoService.delete(this.veiculo).subscribe(response => {
        this.editadoComSucesso=true;
      this.veiculo.zerar();
        
      })
      



  }  

}
