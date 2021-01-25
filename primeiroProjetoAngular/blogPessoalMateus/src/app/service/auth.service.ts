import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
    ) { }

  entrar(userLogin: UserLogin): Observable<UserLogin>{
    return this.http.post<UserLogin>('http://localHost:8080/usuarios/logar', userLogin)
  }

  cadastrar(user: User): Observable<User>{
    return this.http.post<User>('http://localHost:8080/usuarios/cadastrar', user)
  }

  logado(){
    //Declarando a variável testandoStatusLogado. 
    let testandoStatusLogado: boolean = false
    //Nesse if estamos verificando se existe algum tolken. Se exister, a variável testandoStatusLogado receberá um true.
    if(environment.tolken != ''){
      testandoStatusLogado = true
    }
    return testandoStatusLogado
  }
}
