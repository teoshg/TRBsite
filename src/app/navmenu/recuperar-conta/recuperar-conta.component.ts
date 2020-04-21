import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { VerificaEmailService } from '../verifica-email.service';

@Component({
  selector: 'app-recuperar-conta',
  templateUrl: './recuperar-conta.component.html',
  styleUrls: ['./recuperar-conta.component.scss']
})
export class RecuperarContaComponent implements OnInit {

  formulario: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private verificaEmailService: VerificaEmailService,
  ) { }

  ngOnInit() {

    this.formulario = this.formBuilder.group({
     email: [null, [Validators.required, Validators.email], [this.validarEmail.bind(this)]],
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

  validarEmail(formControl: FormControl) {
    return this.verificaEmailService.verificarEmail(formControl.value)
      .pipe(map(emailExiste => emailExiste ? { emailInvalido: true } : null));
  }
}
