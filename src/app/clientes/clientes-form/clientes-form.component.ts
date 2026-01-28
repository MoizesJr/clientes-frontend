import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClientesService } from 'src/app/clientes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  cliente: Cliente;
  success: boolean = false;
  errors: String[];

  constructor( 
    private router: Router,
    private service: ClientesService) {
    this.cliente = new Cliente();
   }

  ngOnInit(): void {
  }

  OnSubmit() {
    this.service
      .salvar(this.cliente)
      .subscribe
      (response => {
        this.success = true;
        this.errors = null;
        this.cliente = response;
      }, errorResponse => {
        this.errors = errorResponse.error.errors;
        console.log(errorResponse.error.errors);
      }
    );
  }

  voltarParaLista() {
    this.router.navigate(['/clientes-lista']);
  }

}
