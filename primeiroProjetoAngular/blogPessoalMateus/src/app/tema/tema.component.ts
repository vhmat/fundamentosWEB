import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {
  
tema: Tema = new Tema()
listaTemas: Tema[]


  constructor(
    private router: Router,
    private temaService: TemaService
  ) { }

  ngOnInit() {
    if(environment.tolken == ''){
      alert('Sessão expirada! Favor fazer o login novamente.')
      this.router.navigate(['/entrar'])
    }
  }
  //Método para cadastrar :)
  cadastrar(){
    this.temaService.criarTema(this.tema).subscribe((resp: Tema) => {
      this.tema = resp
      alert('Tema cadastrado com sucesso!')
      this.tema = new Tema()
    })
  }
}
