import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Pessoa } from '../pessoa';
import { PessoaService, PessoaQueryParam } from '../pessoa.service';

@Component({
  selector: 'app-listagem-pessoas',
  templateUrl: './listagem-pessoas.component.html',
  styleUrls: ['./listagem-pessoas.component.css']
})
export class ListagemPessoasComponent implements OnInit {

  pessoas;
  pesquisaForm: FormGroup;

  constructor(
    private pessoaService: PessoaService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.pessoaService.recuperarTodos({ nome: null, cpf: null}).subscribe(
      pessoas => this.pessoas = pessoas,
      () => alert('Erro ao carregar lista de pessoas!'),
      () => {}
    );

    this.pesquisaForm = this.formBuilder.group({
      nome: [ null ],
      cpf: [ null ]
    });
  }

  pesquisar() {
    let pessoaQueryParam: PessoaQueryParam = this.pesquisaForm.value;
    this.pessoaService.recuperarTodos(pessoaQueryParam).subscribe(
      pessoas => this.pessoas = pessoas,
      () => alert('Não foi possível realizar a pesquisa!')
    );
  }

  remover(pessoa: Pessoa): void {
    this.pessoaService.remover(pessoa).subscribe(
      () => {
        let index = this.pessoas.indexOf(pessoa);
        this.pessoas.splice(index,1);
      },
      () => alert('Erro ao remover pessoa')
    );
  }
}
