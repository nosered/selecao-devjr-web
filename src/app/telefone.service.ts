import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { environment } from '../environments/environment';
import { Telefone } from './telefone';

@Injectable()
export class TelefoneService {

    apiTelefoneUrl: string;

    constructor(private http: Http) {
        this.apiTelefoneUrl = `${environment.apiBaseUrl}/telefones`;
    }

    public salvar(telefone: Telefone): Observable<Telefone> {
        return this.http.post(this.apiTelefoneUrl, telefone).map(res => res.json());
    }

    /*public recuperar(id: number): Observable<Telefone> {
        return this.http.get(apiTelefoneUrl + '/' +id).map(res => res.json());
    }*/

    public recuperarTodos(): Observable<Telefone[]> {
        return this.http.get(this.apiTelefoneUrl).map(res => res.json());
    }

    /*public atualizar(telefone: Telefone): Observable<Telefone> {
        return this.http.put(apiTelefoneUrl + '/' + telefone.id, telefone).map(res => res.json());
    }*/

    public remover(telefone: Telefone): Observable<void> {
        return this.http.delete(this.apiTelefoneUrl + '/' + telefone.id).map(res => res.json());
    }
}