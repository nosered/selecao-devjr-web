import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { ListagemPessoasComponent } from './listagem-pessoas/listagem-pessoas.component';
import { CadastroPessoasComponent } from './cadastro-pessoas/cadastro-pessoas.component';
import { AtualizaPessoasComponent } from './atualiza-pessoas/atualiza-pessoas.component';

const appRoutes: Route[] = [
    { path: 'pessoas/listagem', component: ListagemPessoasComponent },
    { path: 'pessoas/cadastro', component: CadastroPessoasComponent },
    { path: 'pessoas/:id/atualiza', component: AtualizaPessoasComponent },
    { path: '', redirectTo: 'pessoas/listagem', pathMatch: 'full' }
];

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }