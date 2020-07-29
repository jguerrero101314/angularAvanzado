import { Component } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css'],
})
export class ProgressComponent {

  progreso1: number = 25;
  progreso2: number = 35;

  get getProgreso1(){
    return `${this.progreso1}%`;
  }
  get getProgreso2(){
    return `${this.progreso2}%`;
  }
}
