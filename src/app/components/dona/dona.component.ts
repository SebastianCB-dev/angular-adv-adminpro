import { Component, Input, OnInit } from '@angular/core';

import { ChartData, ChartEvent, ChartOptions, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit{

  @Input('titulo') title: string = 'Default Graphic';

  @Input('labels') etiquetas: string[] = ['Label1', 'Label2', 'Label3'];

  @Input('data') data: number[] = [100, 100, 100];
  
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.etiquetas,
    datasets: [{
      data: this.data,
      backgroundColor: ['#6857E6', "#009FEE", '#F02059'],
      hoverBackgroundColor: ['#6857E6', "#009FEE", '#F02059']
    },
    ]
  };

  ngOnInit(): void {
    this.doughnutChartData = {
      labels: this.etiquetas,
      datasets: [{
        data: this.data,
        backgroundColor: ['#6857E6', "#009FEE", '#F02059'],
        hoverBackgroundColor: ['#6857E6', "#009FEE", '#F02059']
      },
      ]
    };
  }


}
