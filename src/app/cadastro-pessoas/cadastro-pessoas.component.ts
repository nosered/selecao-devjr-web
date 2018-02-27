import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { PessoaService } from '../pessoa.service';

@Component({
  selector: 'app-cadastro-pessoas',
  templateUrl: './cadastro-pessoas.component.html',
  styleUrls: ['./cadastro-pessoas.component.css']
})
export class CadastroPessoasComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private pessoaService: PessoaService,
    private router: Router
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      nome: [ null ],
      cpf: [ null ],
      email: [ null ],
      dataNascimento: [ null ]
    });
  }

  onSubmit() {
    this.pessoaService.salvar(this.form.value).subscribe(
      pessoa => {
        this.form.reset();
        alert('Pessoa cadastrada com sucesso!');
        this.router.navigate(['/pessoas', 'listagem']);
      },
      () => alert('Erro ao cadastrar pessoa!')
    );
  }

}
