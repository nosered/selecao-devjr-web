import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'idade'
})
export class IdadePipe implements PipeTransform {

    transform(valor: string) {
        if(valor) {
            let dataNascimento: Date = new Date(valor);
            return this.calcularIdade(
                dataNascimento.getFullYear(),
                dataNascimento.getMonth(),
                dataNascimento.getDate()
            );
        }
    }

    calcularIdade(anoNascimento:number, mesNascimento:number, diaNascimento:number): number {
        let dataAtual = new Date();
        let anoAtual = dataAtual.getFullYear();
        let mesAtual = dataAtual.getMonth() + 1;
        let diaAtual = dataAtual.getDate();

        anoNascimento = +anoNascimento;
        mesNascimento = +mesNascimento;
        diaNascimento = +diaNascimento;

        let idade = anoAtual - anoNascimento;

        if (mesAtual < mesNascimento || mesAtual == mesNascimento && diaAtual < diaNascimento) {
            idade--;
        }
        return idade < 0 ? 0 : idade;
    }
}