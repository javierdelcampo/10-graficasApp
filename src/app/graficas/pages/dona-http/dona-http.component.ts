import { Component, OnInit, AfterViewInit, AfterContentInit, OnChanges } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { Grafica } from '../../interfaces/grafica.interface';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  public doughnutChartLabels: string[] = [];
  
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [] }
    ]
  };

  public doughnutChartType: ChartType = 'doughnut';

  constructor( private graficasService: GraficasService ) { }

  ngOnInit(): void {

    // this.graficasService.getUsuariosRedesSociales()
    //   .subscribe( data => {
    //     this.datosGrafica = data;
    //     console.log(this.datosGrafica);

    //     const labels = Object.keys( data );
    //     const values = (Object.values( data )).map(Number);
        
    //     let doughnutChartData: ChartData<'doughnut'> = {
    //       labels: labels,
    //       datasets: [
    //         { data: values }
    //       ]
    //     };
    //     this.doughnutChartData = doughnutChartData;

    //     // const labels = Object.keys( data );
    //     // const values = Object.values( data );
    //     // this.doughnutChartLabels = labels;
    //     // this.doughnutChartData.push( data );
    //   })

      this.graficasService.getUsuariosRedesSocialesDonaData()
      .subscribe( ({ labels, datasets }) => {
        this.doughnutChartData = { labels, datasets };
      })

  }

}
