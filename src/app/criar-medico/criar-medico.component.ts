import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormBuilder
} from '@angular/forms';
import {
  CriarMedicoService
} from './criar-medico.service';
import Medico from '../../../model/Medico';

@Component({
  selector: 'app-criar-medico',
  templateUrl: './criar-medico.component.html',
  styleUrls: ['./criar-medico.component.scss']
})



export class CriarMedicoComponent implements OnInit {
  medicoFormulario = this.fb.group({

    nome: [''],
    CRM: [''],
    periodoAtendimento: [''],
    CPF: [''],
    predio: [''],
    setor: ['']

  });



  constructor(private fb: FormBuilder,private criarMedicoService: CriarMedicoService) {

  }

  ngOnInit() {}

  onSubmit() {

    console.log(this.medicoFormulario);
    let medico: Medico = new Medico(
      this.medicoFormulario.value.nome,
      this.medicoFormulario.value.CRM,
      this.medicoFormulario.value.periodoAtendimento,
      this.medicoFormulario.value.CPF,
      this.medicoFormulario.value.predio,
      this.medicoFormulario.value.setor);

     this.criarMedicoService.cadastrarMedico(medico);




  }


}
