import { Component, OnInit } from '@angular/core';
import { ConsultarMedicoService } from './consultar-medico.service';

@Component({
  selector: 'app-consultar-medico',
  templateUrl: './consultar-medico.component.html',
  styleUrls: ['./consultar-medico.component.scss']
})
export class ConsultarMedicoComponent implements OnInit {


  capacity=30;
  constructor(private consultarMedicoService:ConsultarMedicoService) {   
     

    let p =new Promise( resolve =>{ setTimeout(resolve,500); } );
    p.then(()=> this.capacity=60)
    this.consultarMedicoService.getAllMedico().subscribe(response => {
    this.capacity=70;  
    this.medicos = response.resultado;
    this.capacity=100;  

  })}
  medicos:any;
  ngOnInit() {


    
  }

  

}
