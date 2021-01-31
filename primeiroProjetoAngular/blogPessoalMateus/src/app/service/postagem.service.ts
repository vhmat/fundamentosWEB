import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(
    private http: HttpClient
  ) { }

  tolken = {
    headers: new HttpHeaders().set('Authorization', environment.tolken)
  }

  getAllPostagens():Observable<Postagem[]>{
    return this.http.get<Postagem[]>('http://localHost:8080/postagens', this.tolken)
  }

  postPostagem(postagem: Postagem): Observable<Postagem>{
    return this.http.post<Postagem>('http://localHost:8080/postagens', postagem, this.tolken)
  }
}