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
 
  busqueTodosOsTemas(): Observable<Tema[]>{
    return this.http.get<Tema[]>('http://localHost:8080/tema', this.tolken)
  }

  criarTema(tema: Tema): Observable<Tema>{
return this.http.post<Tema>('http://localHost:8080/tema', tema, this.tolken)
  }
  
}
