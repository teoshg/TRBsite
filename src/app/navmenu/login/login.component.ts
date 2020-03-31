import { Usuario } from './usuario';
import { MenuService } from './../menu.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  preserveWhitespaces: true
})
export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario();
  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private menuService: MenuService,
  ) { }

  ngOnInit() {

    this.formulario = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      senha: [null, Validators.required]
    });

  }

  get controleDeFormulario() {
    return this.formulario.controls;
  }

  fazerLogin(){
    this.menuService.fazerLogin(this.usuario);
  }
}
