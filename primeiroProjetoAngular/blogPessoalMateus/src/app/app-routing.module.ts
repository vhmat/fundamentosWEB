import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EntrarComponent } from './entrar/entrar.component';

<<<<<<< HEAD
const routes: Routes = [

  //Esse comando está dizendo que ao entrar no site a primeira página será a de login, ou seja, o caminho 'entrar'. O comando pathMatch é para evitar que a página carregue pela metade ou faltando componentes (serve para evitar bugs).
  {path:'', redirectTo: 'entrar', pathMatch: 'full'},
  //Rota para a tela de login
  {path:'entrar', component: EntrarComponent},
  //Rota para a tela de cadastro
  {path:'cadastrar', component: CadastrarComponent}
=======
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EntrarComponent } from './entrar/entrar.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  {path: '', redirectTo: 'entrar', pathMatch: 'full'},

  {path: 'entrar', component: EntrarComponent},
  {path: 'cadastrar', component: CadastrarComponent},
  {path: 'inicio', component: InicioComponent}

>>>>>>> consumo-parte1
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
