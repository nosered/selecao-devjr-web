import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListagemPessoasComponent } from './listagem-pessoas/listagem-pessoas.component';
import { CadastroPessoasComponent } from './cadastro-pessoas/cadastro-pessoas.component';
import { AtualizaPessoasComponent } from './atualiza-pessoas/atualiza-pessoas.component';
import { PessoaService } from './pessoa.service';
import { TelefoneService } from './telefone.service';
import { IdadePipe } from './listagem-pessoas/idade.pipe';

import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListagemPessoasComponent,
    CadastroPessoasComponent,
    AtualizaPessoasComponent,
    IdadePipe
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [ PessoaService, TelefoneService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
