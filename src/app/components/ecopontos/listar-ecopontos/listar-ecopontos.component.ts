import { Observable } from 'rxjs';
import { EcopontosService } from 'src/app/services/ecopontos.service';
import { Component, OnInit } from '@angular/core';
import { Iecopontos} from '../../../model/IEcoponto.model'


@Component({
  selector: 'app-listar-ecopontos',
  templateUrl: './listar-ecopontos.component.html',
  styleUrls: ['./listar-ecopontos.component.css']
  
})
export class ListarEcopontosComponent implements OnInit {

  listaEcopontos: Iecopontos[] = [
 
  
  ]

  constructor(private ecopontosService: EcopontosService) {
    

    for (let item of this.listaEcopontos)
    {
      console.log(item);
    }

  }


  ngOnInit(): void {
    this.carregarEcopontos();
  }
  
  carregarEcopontos(): void{
    this.ecopontosService.buscarTodos().subscribe(retorno =>{
      this.listaEcopontos = retorno;
    })

  }

}
