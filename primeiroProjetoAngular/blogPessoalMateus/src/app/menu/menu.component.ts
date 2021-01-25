import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  //Declaração de duas variáveis para receber o que estiver dentro do environment. Dessa forma, podemos chamá-las em outro local para poder exibir o nome e a foto do usuário que estiver logado.
  nomeUsuario = environment.nome
  fotoUsuario = environment.foto

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  sair(){
    this.router.navigate(['/entrar'])
    environment.tolken = ''
    environment.nome = ''
    environment.id = 0
    environment.foto = ''
  }
}
