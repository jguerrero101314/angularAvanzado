import { Component } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styles: [],
})
export class GraficasComponent {
  // Doughnut
  public doughnutChartLabels: Label[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales',
  ];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100]
  ];
  public doughnutChartType: ChartType = 'doughnut';

  public colors:Color[] = [
    {backgroundColor:[ '#6857E6', '#009FEE', '#F02059']}
  ]
}
