import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from './clientes/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) { 

   }

  salvar( cliente: Cliente ) : Observable<any> {
    return this.http.post('http://localhost:8080/clientes', cliente);
  }

  buscarTodos() : Observable<Cliente[]> { 
  return this.http.get<Cliente[]>('http://localhost:8080/clientes');
  }

}
