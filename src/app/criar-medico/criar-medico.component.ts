import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormBuilder, Validators
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

  dadosValidos = true;
  dadosCadastrados = false;
  medicoFormulario = this.fb.group({

    nome: ['', [Validators.minLength(6),Validators.required]],
    CRM: ['',Validators.required],
    periodoAtendimento: [''],
    CPF: ['',[Validators.pattern("[0-9]{3}[0-9]{3}[0-9]{3}[0-9]{2}"),Validators.required]],
    predio: [''],
    setor: ['']

  });



  constructor(private fb: FormBuilder,private criarMedicoService: CriarMedicoService) {

  }

  ngOnInit() {}

  onSubmit() {
if(this.medicoFormulario.valid){

  let medico: Medico = new Medico(
    this.medicoFormulario.value.nome,
    this.medicoFormulario.value.CRM,
    this.medicoFormulario.value.periodoAtendimento,
    this.medicoFormulario.value.CPF,
    this.medicoFormulario.value.predio,
    this.medicoFormulario.value.setor);
    
    this.criarMedicoService.cadastrarMedico(medico).subscribe(response => {
      this.dadosValidos = response.success;
      this.dadosCadastrados = response.success;
    })
    
  }

  }
  
}
