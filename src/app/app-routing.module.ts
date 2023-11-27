import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './components/ecopontos/home/home.component';
import { ListarEcopontosComponent } from './components/ecopontos/listar-ecopontos/listar-ecopontos.component';
import { CadastrarEcopontosComponent } from './components/ecopontos/cadastrar-ecopontos/cadastrar-ecopontos.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'ecopontos/Ecopontos', component:ListarEcopontosComponent},
  {path:'ecopontos/CadastrarEcopontos', component:CadastrarEcopontosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
