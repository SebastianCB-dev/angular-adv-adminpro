import { Component } from '@angular/core';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  labels1: string[] = ['Hola', 'Mundo', 'XD'];
  data1: number[] = [200, 100, 300];

  labels2: string[] = ['JavaScript', 'TypeScript', 'Java'];
  data2: number[] = [200, 100, 300];

  labels3: string[] = ['React', 'Vue', 'Angular'];
  data3: number[] = [200, 100, 300];

}
