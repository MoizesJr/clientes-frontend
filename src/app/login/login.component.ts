import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string;
  password: string;
  loginError: boolean;
  cadastrando: boolean;


  constructor(
    private router: Router
  ) { }

  OnSubmit() {
    this.router.navigate(['/home']);
}

prepararCadastrar(event) {
  event.preventDefault();
  this.cadastrando = true;
}

cancelarCadastro() {
  this.cadastrando = false;
}


}