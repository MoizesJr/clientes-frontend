import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { servicoPrestado } from './servico-prestado/servicoPrestado';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ServicoPrestadoBusca } from './servico-prestado/service-prestado-lista/servicoPrestadoBusca';

@Injectable({
  providedIn: 'root'
})
export class ServicoPrestadoService {

  ApiURL: string = environment.apiURLBase + '/servicos-prestados';

  constructor(private http: HttpClient) { }

  salvar(servicoPrestado: servicoPrestado): Observable<servicoPrestado> {
    return this.http.post<servicoPrestado>(`${this.ApiURL}`, servicoPrestado);
  }

  buscar(nome: string, mes: number): Observable<ServicoPrestadoBusca[]> {

    const httpParams = new HttpParams()
      .set("nome", nome)
      .set("mes",  mes ? mes.toString() : '');

    const url = this.ApiURL + '?' + httpParams.toString();
    return this.http.get<any>(url);
  }
}
