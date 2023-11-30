import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastrarEcopontosComponent } from './components/ecopontos/cadastrar-ecopontos/cadastrar-ecopontos.component';
import { ListarEcopontosComponent } from './components/ecopontos/listar-ecopontos/listar-ecopontos.component';
import { HomeComponent } from './components/ecopontos/home/home.component';
import { HeaderComponent } from './template/header/header.component';
import { FormsModule } from '@angular/forms';

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
    AppRoutingModule,
    FormsModule,
    HttpClientModule,   BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
