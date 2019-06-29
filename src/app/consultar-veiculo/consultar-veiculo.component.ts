import { Component, OnInit } from '@angular/core';
import { ConsultarVeiculoService } from './consultar-veiculo.service';

@Component({
  selector: 'app-consultar-veiculo',
  templateUrl: './consultar-veiculo.component.html',
  styleUrls: ['./consultar-veiculo.component.scss']
})
export class ConsultarVeiculoComponent implements OnInit {



  capacity=30;
  veiculos:any;
  constructor(private consultarVeiculoService:ConsultarVeiculoService) {   
     

    let p =new Promise( resolve =>{ setTimeout(resolve,500); } );
    p.then(()=> this.capacity=60)
    this.consultarVeiculoService.getAll().subscribe(response => {
    this.capacity=70;  
    this.veiculos = response.resultado;
    this.capacity=100;  

  })}
  ngOnInit() {


    
  }
}
