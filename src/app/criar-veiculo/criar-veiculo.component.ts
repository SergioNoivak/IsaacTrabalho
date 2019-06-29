import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormBuilder
} from '@angular/forms';
import Medico from '../../../model/Medico';
import { CriarMedicoService } from '../criar-medico/criar-medico.service';
import { CriarVeiculoService } from './criar-veiculo.service';
import Veiculo from '../../../model/Veiculo';




@Component({
  selector: 'app-criar-veiculo',
  templateUrl: './criar-veiculo.component.html',
  styleUrls: ['./criar-veiculo.component.scss']
})
export class CriarVeiculoComponent implements OnInit {


  dadosValidos = true;
  dadosCadastrados = false;
  veiculoFormulario = this.fb.group({

    modelo: [''],
    montadora: [''],
    cambio: [''],
    numeroSerie: 0,
    proprietario: [''],
    ano: ['']

  });



  constructor(private fb: FormBuilder,private criarVeiculoService:CriarVeiculoService) {

  }

  ngOnInit() {}

  onSubmit() {

    let veiculo: Veiculo = new Veiculo(
      this.veiculoFormulario.value.modelo,
      this.veiculoFormulario.value.montadora,
      this.veiculoFormulario.value.cambio,
      this.veiculoFormulario.value.numeroSerie,
      this.veiculoFormulario.value.proprietario,
      this.veiculoFormulario.value.ano);

this.criarVeiculoService.cadastrar(veiculo).subscribe(response => {
  this.dadosValidos = response.success;
  this.dadosCadastrados = response.success;
})

    }

}
