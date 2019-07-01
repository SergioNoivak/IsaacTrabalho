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
import { CriarMedicoService } from './criar-medico/criar-medico.service';
import { CriarVeiculoService } from './criar-veiculo/criar-veiculo.service';
import { ConsultarMedicoService } from './consultar-medico/consultar-medico.service';
import { ConsultarVeiculoService } from './consultar-veiculo/consultar-veiculo.service';
import { EditarMedicoService } from './editar-medico/editar-medico.service';
import { EditarVeiculoService } from './editar-veiculo/editar-veiculo.service';
import { DeletarMedicoService } from './deletar-medico/deletar-medico.service';
import { DeletarVeiculoService } from './deletar-veiculo/deletar-veiculo.service';
import { CriarContaService } from './criar-conta/criar-conta.service';
import { NgModel, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 



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
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [
    CriarMedicoService,
    CriarVeiculoService,
    ConsultarMedicoService,
    ConsultarVeiculoService,
    EditarMedicoService,
    EditarVeiculoService,
    DeletarMedicoService,
    DeletarVeiculoService,
    CriarContaService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
