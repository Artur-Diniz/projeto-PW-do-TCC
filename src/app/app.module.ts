import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastrarEcopontosComponent } from './components/ecopontos/cadastrar-ecopontos/cadastrar-ecopontos.component';
import { ListarEcopontosComponent } from './components/ecopontos/listar-ecopontos/listar-ecopontos.component';
import { HomeComponent } from './components/ecopontos/home/home.component';
import { HeaderComponent } from './template/header/header.component';

@NgModule({
  declarations: [
    
    AppComponent,
    CadastrarEcopontosComponent,
    ListarEcopontosComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
