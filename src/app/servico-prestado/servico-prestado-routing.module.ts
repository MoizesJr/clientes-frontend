import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicePrestadoListaComponent } from './service-prestado-lista/service-prestado-lista.component';
import { ServicePrestadoFormComponent } from './service-prestado-form/service-prestado-form.component';


const routes: Routes = [
  { path: 'servicos-prestados-listagem', component: ServicePrestadoListaComponent },
  { path: 'servicos-prestados-form', component: ServicePrestadoFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicoPrestadoRoutingModule { }
