import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tema } from 'src/app/model/Tema';
import { TemaService } from 'src/app/service/tema.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-tema-edicao',
  templateUrl: './tema-edicao.component.html',
  styleUrls: ['./tema-edicao.component.css']
})
export class TemaEdicaoComponent implements OnInit {

  tema: Tema = new Tema

  constructor(
    private temaService: TemaService,
    private router: Router,
    //Essa injeção de independência faz com que eu pegue o que está na rota ativa. No caso, pegaremos o ID.
    private route: ActivatedRoute
  ) { }

  ngOnInit(){
    if(environment.tolken == ''){
      this.router.navigate(['/entrar'])
    }
    //Esse código faz com que eu pegue o ID que está na URL ativa.
    let id = this.route.snapshot.params['id']
    this.findByIdTema(id)
  }
  findByIdTema(id: number){
    this.temaService.getByIdTema(id).subscribe((resp: Tema) => {
      this.tema = resp
    })
  }

  atualizar(){
    this.temaService.atualizarTema(this.tema).subscribe((resp: Tema)=>{
      this.tema = resp
      alert('Tema atualizado com sucesso')
      this.router.navigate(['/tema'])
    })
  }
}
