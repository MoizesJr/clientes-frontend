import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ServicoPrestadoRoutingModule } from './servico-prestado-routing.module';
import { ServicePrestadoListaComponent } from './service-prestado-lista/service-prestado-lista.component';
import { ServicePrestadoFormComponent } from './service-prestado-form/service-prestado-form.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ServicePrestadoListaComponent,
    ServicePrestadoFormComponent
  ],
  imports: [
    CommonModule,
    ServicoPrestadoRoutingModule,
    FormsModule,
    RouterModule
  ], exports: [
    ServicePrestadoListaComponent,
    ServicePrestadoFormComponent
  ]
})
export class ServicoPrestadoModule { }
