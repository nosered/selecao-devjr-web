import { Pessoa } from './pessoa';

export interface Telefone {
    id: number;
    ddd: string;
    numero: string;
    pessoa: Pessoa;
}