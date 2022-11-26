import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscadorComponent } from './buscador/buscador.component';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { ResultadosComponent } from './resultados/resultados.component';



@NgModule({
  declarations: [
    BuscadorComponent,
    GifsPageComponent,
    ResultadosComponent
  ],
  exports: [
    GifsPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GifsModule { }
