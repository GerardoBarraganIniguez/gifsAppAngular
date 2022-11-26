import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: [
  ]
})
export class BuscadorComponent {

  constructor(private gifsService: GifsService) { } //inyección del servicio

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>; //referencia al input

  buscar(){
    const valor: string = this.txtBuscar.nativeElement.value;
    this.txtBuscar.nativeElement.value = ''; //borrar el texto del input

    if(valor.trim().length === 0) { //si el input esta vacío 
      return;
    }

    this.gifsService.buscarGifs( valor ) //uso del servicio

  }

}
