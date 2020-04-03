import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './navmenu/home/home.component';
import { LoginComponent } from './navmenu/login/login.component';
import { ContatoComponent } from './navmenu/contato/contato.component';
import { CadastroComponent } from './navmenu/cadastro/cadastro.component';


const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'entrar', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'contato', component: ContatoComponent },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
