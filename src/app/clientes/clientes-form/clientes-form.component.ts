import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClientesService } from 'src/app/clientes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  cliente: Cliente;
  success: boolean = false;
  errors: String[];
  id: number;

  constructor( 
    private router: Router,
    private service: ClientesService,
    private activatedRoute: ActivatedRoute) {
    this.cliente = new Cliente();
   }

  ngOnInit(): void {
    let params = this.activatedRoute.params;
    params.subscribe( urlParams => {
      this.id = urlParams['id'];
      if (this.id) {
        this.service
          .getClienteById(this.id)
          .subscribe( response => this.cliente = response,
                      errorResponse => this.cliente = new Cliente() )
      }
    } )
  }

  OnSubmit() {
    if (this.id) {

      this.service
      .atualizar(this.cliente)
      .subscribe( response => {
        this.success = true;
        this.errors = null;
      }, errorResponse => {
        this.errors = ['Erro ao atualizar o cliente.'];
      }
    );

    } else {

    this.service
      .salvar(this.cliente)
      .subscribe
      (response => {
        this.success = true;
        this.errors = null;
        this.cliente = response;
      }, errorResponse => {
        this.errors = errorResponse.error.errors;
      }
    );
  }
  }

  voltarParaLista() {
    this.router.navigate(['/clientes-lista']);
  }

}
