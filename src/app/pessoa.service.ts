import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { environment } from '../environments/environment';
import { Pessoa } from './pessoa';

export interface PessoaQueryParam {
    nome: string;
    cpf: string;
}

@Injectable()
export class PessoaService {

    apiPessoaUrl: string;

    constructor(
        private http: Http,
        private httpClient: HttpClient
    ) {
        this.apiPessoaUrl = `${environment.apiBaseUrl}/pessoas`;
    }

    public salvar(pessoa: Pessoa): Observable<Pessoa> {
        return this.http.post(this.apiPessoaUrl, pessoa).map(res => res.json());
    }

    public recuperar(id: number): Observable<Pessoa> {
        return this.http.get(this.apiPessoaUrl + '/' +id).map(res => res.json());
    }

    public recuperarTodos(pessoaQueryParam: PessoaQueryParam): Observable<Pessoa[]> {
        let requestOptions = new RequestOptions({
            headers: new Headers({'Content-Type': 'application/json'}),
            params: new URLSearchParams()
        });
        if(pessoaQueryParam.nome) {
            console.log(pessoaQueryParam.nome);
            requestOptions.params.append('nome', pessoaQueryParam.nome);
        }
        if(pessoaQueryParam.cpf) {
            console.log(pessoaQueryParam.cpf);
            requestOptions.params.append('cpf', pessoaQueryParam.cpf);
        }
        return this.http.get(this.apiPessoaUrl, requestOptions).map(res => res.json());                                                                         
    }

    public atualizar(pessoa: Pessoa): Observable<Pessoa> {
        return this.http.put(this.apiPessoaUrl + '/' + pessoa.id, pessoa).map(res => res.json());
    }

    public remover(pessoa: Pessoa): Observable<void> {
        return this.http.delete(this.apiPessoaUrl + '/' + pessoa.id).map(res => res.json());
    }
}