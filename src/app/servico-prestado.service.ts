import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { servicoPrestado } from './servico-prestado/servicoPrestado';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicoPrestadoService {

  ApiURL: string = environment.apiURLBase + '/servicos-prestados';

  constructor(private http: HttpClient) { }

  salvar(servicoPrestado: servicoPrestado): Observable<servicoPrestado> {
    return this.http.post<servicoPrestado>(`${this.ApiURL}`, servicoPrestado);
  }
}
