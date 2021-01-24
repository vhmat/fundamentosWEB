import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  //Declaração de uma variável precisa ser sempre em cima do construtor.
  //Declaração da variável userLogin do tipo UserLogin. Instanciando um novo objeto do tipo UserLogin.
  user: User = new User
  //Criando uma variável para receber a senha
  confirmarSenha: string 
  //Criando uma variável para receber o tipo de usuário
  tipoUsuario: string

  //Tudo o que é colocado dentro do construtor é chamdo de INJEÇÃO DE INDEPENDÊNCIA! :)
  constructor(
    //O código abaixo diz que para o módulo cadastrar depende do AuthService (necessário para fazer o cadastro).
    private authService: AuthService,
    //
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  confirmSenha(event: any){
    this.confirmarSenha = event.target.value
  }

  tipoUser(event: any){
    this.tipoUsuario = event.target.value
  }

  cadastrar(){
    this.user.tipo = this.tipoUsuario

    if(this.user.senha != this.confirmarSenha){
      alert('Senha incorreta!')
    }else{
      //O comando subscribe é responsável por transformar um objeto normal (ou typeScript) em um objeto JSON. Precisamos enviar um objeto JSON para que o servidor entenda a requisição.
      this.authService.cadastrar(this.user).subscribe((resp: User) =>{
        this.user = resp
        this.router.navigate(['/entrar'])
        alert('Usuário cadastrado com sucesso!')
      })
    }
  }
}
