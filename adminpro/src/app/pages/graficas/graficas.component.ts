import { Component } from '@angular/core';

@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styles: [],
})
export class GraficasComponent {

  public labels1: String[] = ['Pan','Refresco','Tacos',
  ];
  public data1:number[] = [500, 100, 600];
}
