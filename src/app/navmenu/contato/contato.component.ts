import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormValidations } from '../form-validations';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss'],
  preserveWhitespaces: true
})
export class ContatoComponent implements OnInit {

  formulario: FormGroup

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private http: HttpClient,
  ) { }

  ngOnInit() {

    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(45)]],
      email: [null, [Validators.required, Validators.email]],
      confirmarEmail: [null, [Validators.required, FormValidations.equalsTo('email')]],
    });

  }

  get controleDeFormulario() {
    return this.formulario.controls;
  }

  onSubmit() {
    if (this.formulario.valid) {
      this.http.post('https://httpbin.org/post', JSON.stringify({}))
        .pipe(map(res => res))
        .subscribe(dados => {
          console.log(dados);
        },

        );
    } else {
      console.log('formulario invalido');
      Object.keys(this.formulario.controls).forEach(campo => {
        console.log(campo);
        const controle = this.formulario.get(campo);
        controle.markAsTouched();
      });
    }
  }

  
}
