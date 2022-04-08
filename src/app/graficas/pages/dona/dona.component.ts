import { Component } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

  public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Devoluciones' ];

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 350, 450, 100, 150 ], backgroundColor: ['#6D41F0', '#6D41F0', '#4974E3', '#9974E3'], hoverBackgroundColor: 'red' },
      { data: [ 50, 150, 120 ], backgroundColor: '#4347FA', hoverBackgroundColor: 'red' },
      { data: [ 250, 130, 70 ], backgroundColor: '#4974E3', hoverBackgroundColor: 'red' }
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';

}
