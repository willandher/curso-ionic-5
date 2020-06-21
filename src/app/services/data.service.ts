import { Componente } from './../interfaces/Componente';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getMnuOpts(){
    return this.http.get<Componente[]>('/assets/data/menu.json');
  }

  getAbulnes(){
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/albums');
  }
}

