import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RodapeComponent } from './rodape/rodape.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CriarContaComponent } from './criar-conta/criar-conta.component';
import { HomeComponent } from './home/home.component';
import { MinhaContaComponent } from './minha-conta/minha-conta.component';
import { CriarMedicoComponent } from './criar-medico/criar-medico.component';
import { CriarVeiculoComponent } from './criar-veiculo/criar-veiculo.component';
import { ConsultarMedicoComponent } from './consultar-medico/consultar-medico.component';
import { ConsultarVeiculoComponent } from './consultar-veiculo/consultar-veiculo.component';
import { EditarMedicoComponent } from './editar-medico/editar-medico.component';
import { EditarVeiculoComponent } from './editar-veiculo/editar-veiculo.component';
import { DeletarMedicoComponent } from './deletar-medico/deletar-medico.component';
import { DeletarVeiculoComponent } from './deletar-veiculo/deletar-veiculo.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RodapeComponent,
    NavBarComponent,
    CriarContaComponent,
    HomeComponent,
    MinhaContaComponent,
    CriarMedicoComponent,
    CriarVeiculoComponent,
    ConsultarMedicoComponent,
    ConsultarVeiculoComponent,
    EditarMedicoComponent,
    EditarVeiculoComponent,
    DeletarMedicoComponent,
    DeletarVeiculoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
