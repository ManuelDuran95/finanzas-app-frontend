import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
//import {  } from 'ng2-charts';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-balance-page',
  imports: [CommonModule, ],
  templateUrl: './balance-page.component.html'
 
})
export default class BalancePageComponent implements OnInit { 
  public config:any = {
  type: 'pie',
  data: {
  labels: ['Entradas', 'Salidas'],
  datasets: [
    {
      label: '',
      data: [30, 100],
      backgroundColor: ['#4613beff', '#f42c51ff'],
    }
  ]
},
  options: {

    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Entradas vs Salidas'
      }
    }
  },
};
chart: any;
  ngOnInit(): void {
   this.chart = new Chart("myChart", this.config);

  }

}
