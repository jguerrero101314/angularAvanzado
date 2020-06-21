import { Component, OnInit, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
@Component({
  selector: 'app-grafica-dona',
  templateUrl: './grafica-dona.component.html',
  styles: [],
})
export class GraficaDonaComponent implements OnInit {


  @Input('label') doughnutChartLabels: Label[] = [];
  @Input('data') doughnutChartData: MultiDataSet = [];
  @Input('tipo') doughnutChartType: ChartType = 'doughnut';
  @Input('Nombre') leyenda: string = 'Leyenda';

  constructor() {}

  ngOnInit(): void {}
}
