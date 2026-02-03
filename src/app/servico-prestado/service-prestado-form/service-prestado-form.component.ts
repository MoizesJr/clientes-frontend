import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../clientes/cliente';
import { ClientesService } from 'src/app/clientes.service';
import { servicoPrestado } from '../servicoPrestado';
import { ServicoPrestadoService } from 'src/app/servico-prestado.service';

@Component({
  selector: 'app-service-prestado-form',
  templateUrl: './service-prestado-form.component.html',
  styleUrls: ['./service-prestado-form.component.css']
})
export class ServicePrestadoFormComponent implements OnInit {

  clientes: Cliente[] = [];
  servico: servicoPrestado;

  constructor(
    private clienteService: ClientesService,
    private service: ServicoPrestadoService
  ) {
    this.servico = new servicoPrestado();
   }

  ngOnInit(): void {
    this.clienteService
      .buscarTodos()
      .subscribe(response => {
        this.clientes = response;
      });
  }

  onSubmit() {
    this.service
      .salvar(this.servico)
      .subscribe(response => {
        console.log(response);
      });
  }

}
