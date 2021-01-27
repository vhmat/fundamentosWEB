import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EntrarComponent } from './entrar/entrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { TemaComponent } from './tema/tema.component';

const routes: Routes = [
  
  //Esse comando está dizendo que ao entrar no site a primeira página será a de login, ou seja, o caminho 'entrar'. O comando pathMatch é para evitar que a página carregue pela metade ou faltando componentes (serve para evitar bugs).
  {path:'', redirectTo: 'entrar', pathMatch: 'full'},
  //Rota para a tela de login
  {path:'entrar', component: EntrarComponent},
  //Rota para a tela de Cadastro
  {path:'cadastrar', component: CadastrarComponent},
  //Rota para a tela de Início
  {path:'inicio', component: InicioComponent},
  //Rota para a tela de Tema
  {path:'tema', component: TemaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
