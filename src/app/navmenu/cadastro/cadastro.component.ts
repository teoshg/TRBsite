import { VerificaEmailService } from './../verifica-email.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ConsultaCepService } from '../consulta-cep.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { FormValidations } from '../form-validations';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  formulario: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private cepService: ConsultaCepService,
    private verificaEmailService: VerificaEmailService,
  ) { }

  ngOnInit() {

    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(45)]],
      cep: [null, [Validators.required]],
      bairro: [null, Validators.required],
      numero: [null, Validators.required],
      rua: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(45)]],
      email: [null, [Validators.required, Validators.email], [this.validarEmail.bind(this)]],
      confirmarEmail: [null, [Validators.required, FormValidations.equalsTo('email')]],
      password: [null,[Validators.required, Validators.minLength(5), Validators.maxLength(9)]],
      confirmePassword: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(9), FormValidations.equalsTo('password')]],
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

  consultaCEP() {

    let cep = this.formulario.get('cep').value;

    if (cep != null && cep !== '') {
      this.cepService.consultaCEP(cep)
        .subscribe(dados => this.populaDadosForm(dados));
    }
  }

  populaDadosForm(dados) {
    this.formulario.patchValue({
      rua: dados.logradouro,
      cep: dados.cep,
      bairro: dados.bairro,
    });
  }

  validarEmail(formControl: FormControl) {
    return this.verificaEmailService.verificarEmail(formControl.value)
      .pipe(map(emailExiste => emailExiste ? { emailInvalido: true } : null));
  }

}
