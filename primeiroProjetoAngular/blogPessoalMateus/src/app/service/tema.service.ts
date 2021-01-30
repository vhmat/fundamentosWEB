import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(
    private http: HttpClient
  ) { }

  tolken = {
    headers: new HttpHeaders().set('Authorization', environment.tolken)
  }
  
  getByIdTema(id: number): Observable<Tema>{
    return this.http.get<Tema>(`http://localHost:8080/tema/${id}`, this.tolken)
  }

  pegueTodosOsTemas(): Observable<Tema[]>{
    return this.http.get<Tema[]>('http://localHost:8080/tema', this.tolken)
  }

  criarTema(tema: Tema): Observable<Tema>{
return this.http.post<Tema>('http://localHost:8080/tema', tema, this.tolken)
  }
  
  atualizarTema(tema: Tema): Observable<Tema>{
    return this.http.put<Tema>('http://localHost:8080/tema', tema, this.tolken)
  }
  //O método abaixo fará com que o usuário consiga deletar um tema do banco de dados através do ID. Para isso, precisamos passar o ID como parâmetro e a forma com que se faz isso é utilizando o (id: number) e após, no caminho da URL que também devemos passar o ID como parâmetro nós utilizamos o /${id}. O CAMINHO DESSA URL É DIFERENTE. PRECISAMOS ESCREVÊ-LO ENTRE CRASES!!!!! 
  deletarTema(id: number){
  return this.http.delete(`http://localHost:8080/tema/${id}`, this.tolken)
  }
}
