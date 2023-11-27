import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-ecopontos',
  templateUrl: './listar-ecopontos.component.html',
  styleUrls: ['./listar-ecopontos.component.css']
})
export class ListarEcopontosComponent implements OnInit {

  listaStrings: string[] = ['Primeiro', 'Segundo', 'Terceiro'];
  listaNumeros: number[] = [15, 15.08, 100];

  ObjEcopontos: any[] = [
    {EcopontoNome: 'Ecoponto Tatuapé',HoraFuncIn: 8.00,HoraFuncFim: 18.00, Endereco: 'Av.Salim Farah',NumEndereco:179,IdEcoponto: 1001}
  
  ];

  constructor() {
    for (let item of this.listaStrings) {
      console.log(item);

    }

    for (const item of this.listaNumeros){
      console.log(item);
    }

  }

  ngOnInit(): void {
  }

}
