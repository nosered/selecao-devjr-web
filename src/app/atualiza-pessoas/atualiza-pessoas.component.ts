import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Pessoa } from '../pessoa';
import { PessoaService } from '../pessoa.service';
import { Telefone } from '../telefone';
import { TelefoneService } from '../telefone.service';

@Component({
  selector: 'app-atualiza-pessoas',
  templateUrl: './atualiza-pessoas.component.html',
  styleUrls: ['./atualiza-pessoas.component.css']
})
export class AtualizaPessoasComponent implements OnInit {

  pessoa: Pessoa;
  formPessoa: FormGroup;
  formTelefone: FormGroup;

  constructor(
    private pessoaService: PessoaService,
    private telefoneService: TelefoneService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.formPessoa = this.formBuilder.group({
      id: [ null ],
      nome: [ null ],
      cpf: [ null ],
      email: [ null ],
      dataNascimento: [ null ]
    });

    this.formTelefone = this.formBuilder.group({
      ddd: [ null ],
      numero: [ null ],
      pessoa: this.formBuilder.group({
        id: [ null ]
      })
    });

    const idPessoa = this.activatedRoute.snapshot.params['id'];
    this.pessoaService.recuperar(idPessoa).subscribe(
      pessoa => {
        this.pessoa = pessoa;
        this.formPessoa.patchValue({
          id: pessoa.id,
          nome: pessoa.nome,
          cpf: pessoa.cpf,
          email: pessoa.email,
          dataNascimento: pessoa.dataNascimento
        })
      },
      () => alert('Erro ao carregar dados da pessoa!')
    );
  }

  onSubmitPessoa() {
    this.pessoaService.atualizar(this.formPessoa.value).subscribe(
      () => alert('Os dados foram atualizados com sucesso!'),
      () => alert('Erro ao atualizar os dados!')
    );
  }

  onSubmitTelefone() {
    this.formTelefone.patchValue({
      pessoa: {
        id: this.pessoa.id
      }
    });
    this.telefoneService.salvar(this.formTelefone.value).subscribe(
      telefone => {
        this.pessoa.telefones.push(telefone);
        this.formTelefone.reset();
      },
      () => alert('Não foi possível adicionar o telefone!')
    );
  }

  remover(telefone: Telefone) {
    this.telefoneService.remover(telefone).subscribe(
      () => {
        let index = this.pessoa.telefones.indexOf(telefone);
        this.pessoa.telefones.splice(index, 1);
      },
      () => alert('Não foi possível remover o telefone')
    );
  }

}
