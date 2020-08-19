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
    this.getUsuarios().then( usuarios => {
      console.log(usuarios);
    });

   // this.getUsuarios();
   /* const promesa = new Promise( ( resolve, reject )=> {
      if( false ){
        resolve("Hola mundo");
      }else{
        reject('Algo salio mal');
      }
     
    });
    promesa.then( (mensaje) => {
      console.log(mensaje);
    }).catch( err => console.log('Error en mi promesa', err));
    console.log("Fin del Init"); */
  }

  getUsuarios(){

    return  new Promise( resolve => {
      fetch('https://reqres.in/api/users')
      .then( resp => resp.json() )
      .then( body => console.log( body.data ));
    });
    // const promesa = new Promise( resolve => {
    //   fetch('https://reqres.in/api/users')
    //   .then( resp => resp.json() )
    //   .then( body => console.log( body.data ));
    // });

    //return promesa;
    
      // .then( resp => {
      //    resp.json().then( body => console.log( body ));
      // })
  }

}
