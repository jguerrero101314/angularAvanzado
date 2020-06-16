import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {

 @Input('Nombre') leyenda: string = 'Leyenda';
 @Input() porcentaje: number = 50;

 @Output('actualizaValor') cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
    console.log('Leyenda: ', this.leyenda);
    console.log('Porcentaje: ', this.porcentaje);
   }

  ngOnInit(): void {
  }
  cambiarValor(valor: number){
    if(this.porcentaje >= 100 && valor > 0 ){
      this.porcentaje = 100;
      return;
    }
    if(this.porcentaje <= 0 && valor < 0){
      this.porcentaje = 0;
      return;
    }

    this.porcentaje = this.porcentaje + valor;
    this.cambioValor.emit( this.porcentaje );
  }

}
