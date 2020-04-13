import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ContatoComponent } from './contato/contato.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ErrorMsgComponent } from './error-msg/error-msg.component';
import { RecuperarContaComponent } from './recuperar-conta/recuperar-conta.component';



@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    ContatoComponent,
    CadastroComponent,
    ErrorMsgComponent,
    RecuperarContaComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ]
})
export class MenuModule { }
