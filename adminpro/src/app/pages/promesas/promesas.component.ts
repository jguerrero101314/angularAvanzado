import { Component, OnInit } from '@angular/core';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const promesa = new Promise( ( resolve, reject )=> {
      if( false ){
        resolve("Hola mundo");
      }else{
        reject('Algo salio mal');
      }
     
    });
    promesa.then( (mensaje) => {
      console.log(mensaje);
    }).catch( err => console.log('Error en mi promesa', err));
    console.log("Fin del Init");
  }

}
