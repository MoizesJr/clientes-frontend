import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from './clientes/clientes-form/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) { 

   }

  salvar( cliente: Cliente ) : Observable<any> {
    return this.http.post('http://localhost:8080/clientes', cliente);
  }

  getClientes() : Cliente{
    let cliente : Cliente = new Cliente();
    cliente.id = 1;
    cliente.nome = "Cliente Exemplo";
    cliente.cpf = "88.785.52301-01";
    return cliente;
  }
}
