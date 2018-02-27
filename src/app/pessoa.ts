import { Telefone } from './telefone';

export interface Pessoa {
    id: number;
    nome: string;
    cpf: string;
    email: string;
    dataNascimento: Date;
    telefones: Telefone[];
}