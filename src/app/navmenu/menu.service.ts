import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './login/usuario';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  usuarioAutenticado: boolean = false;

  constructor(
    private router: Router,
  ) { }

  fazerLogin(usuario: Usuario) {
    if (usuario.email === 'trbsenha@email.com' &&
      usuario.senha === '123456') {

      this.usuarioAutenticado = true;

      this.router.navigate(['/home']);

    } else {
      this.usuarioAutenticado = false
    }
  }
}
