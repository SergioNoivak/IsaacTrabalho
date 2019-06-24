import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CriarContaComponent } from './criar-conta/criar-conta.component';
import { HomeComponent } from './home/home.component';
import { MinhaContaComponent } from './minha-conta/minha-conta.component';
import { CriarMedicoComponent } from './criar-medico/criar-medico.component';
import { EditarMedicoComponent } from './editar-medico/editar-medico.component';
import { ConsultarMedicoComponent } from './consultar-medico/consultar-medico.component';
import { DeletarMedicoComponent } from './deletar-medico/deletar-medico.component';
import { CriarVeiculoComponent } from './criar-veiculo/criar-veiculo.component';
import { ConsultarVeiculoComponent } from './consultar-veiculo/consultar-veiculo.component';
import { EditarVeiculoComponent } from './editar-veiculo/editar-veiculo.component';
import { DeletarVeiculoComponent } from './deletar-veiculo/deletar-veiculo.component';

const routes: Routes = [


  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'criar-conta',
    component: CriarContaComponent
  },

  {
    path: 'home',
    component: HomeComponent
  },


  {
    path: 'minha-conta',
    component: MinhaContaComponent
  },

  {
    path: 'criar-medico',
    component: CriarMedicoComponent
  },
  {
    path: 'consultar-medico',
    component: ConsultarMedicoComponent
  },
  {
    path: 'editar-medico',
    component: EditarMedicoComponent
  },
  {
    path: 'deletar-medico',
    component: DeletarMedicoComponent
  },



  {
    path: 'criar-veiculo',
    component: CriarVeiculoComponent
  },
  {
    path: 'consultar-veiculo',
    component: ConsultarVeiculoComponent
  },
  {
    path: 'editar-veiculo',
    component: EditarVeiculoComponent
  },
  {
    path: 'deletar-veiculo',
    component: DeletarVeiculoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
