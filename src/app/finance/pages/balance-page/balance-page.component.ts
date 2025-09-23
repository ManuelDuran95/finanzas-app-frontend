import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
//import {  } from 'ng2-charts';
import { Chart, registerables } from 'chart.js';
import EntradasViewPageComponent from '../entradas-view-page/entradas-view-page.component';
import SalidasViewPageComponent from '../salidas-view-page/salidas-view-page.component';
import { BalanceService } from '../../services/balance.service';
Chart.register(...registerables);

import pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { EntradasService } from '../../services/entradas.service';


(pdfMake as any).vfs = pdfFonts.vfs;
 interface Movimientos {
  cantidad_entradas?: string;
  cantidad_salidas?: string;
  suma_entradas?: string;
  suma_salidas?: string;
  suma_total?: string;
  total_registros?: string;
}

@Component({
  selector: 'app-balance-page',
  imports: [CommonModule, EntradasViewPageComponent, SalidasViewPageComponent],
  templateUrl: './balance-page.component.html'
 
})
export default class BalancePageComponent implements OnInit { 
   private balanceService = inject(BalanceService);
   
   private entradasService = inject(EntradasService);
   private salidasService = inject(EntradasService);

  public movimientos!: Movimientos;  
  public entradas: any[] = [];
  public salidas: any[] = []

  chart: Chart | null = null;

  ngOnInit(): void {
    this.getBalance();
    this.getEntradas();
    this.getSalidas();
  }

  getEntradas() {
    this.entradasService.getAll().subscribe(resp =>{
      this.entradas=resp;
      console.log('entradas NEW',resp);
    })
  }
  getSalidas() {
    this.salidasService.getAll().subscribe(resp =>{
      this.salidas=resp;
      console.log('salidas NEW',resp);
    })
  }

  getBalance() {
    this.balanceService.getBalance().subscribe(resp => {
      this.movimientos = resp;

      const entradas = parseInt(this.movimientos.cantidad_entradas ?? '0', 10);
      const salidas  = parseInt(this.movimientos.cantidad_salidas ?? '0', 10);

      // Destroy chart if it already exists (avoid duplicates)
      if (this.chart) {
        this.chart.destroy();
      }

      this.chart = new Chart("myChart", {
        type: 'pie',
        data: {
          labels: ['Entradas', 'Salidas'],
          datasets: [
            {
              label: '',
              data: [entradas, salidas],
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
        }
      });
    });
  }
  

  generatePDF() {
    this.getEntradas();
    this.getSalidas();
     let numE = 1;
  let numS = 1;

    const chartImage = this.chart ? this.chart.toBase64Image() : null;
  const documentDefinition: any = {
    content: [
      { 
        text: 'Reporte mensual de entradas vs salidas', 
        style: 'header' 
      },
      { text: '\n' },
       {
          image: chartImage,  // 
          width: 300,
          alignment: 'center',
          margin: [0, 10, 0, 20]
        },

      { text: 'Entradas', style: 'subheader' },
      {
        style: 'tableExample',
        table: {
         widths: ['auto', '*', 'auto'],
          body: [
    [
      { text: 'No', alignment: 'center', fillColor: '#4682b4', color: '#ffffff' },
      { text: 'Tipo Entradas', alignment: 'center', fillColor: '#4682b4', color: '#ffffff' },
      { text: 'Monto', alignment: 'center', fillColor: '#4682b4', color: '#ffffff' },
     
    ],
    ...this.entradas.map((e, i) => [
       { text: i + 1, alignment: 'center' },
    { text: e.tipo ?? 'SIN DATO', alignment: 'center' },
    { text: e.monto != null ? e.monto.toString() : '0', alignment: 'center' },
    ])
  ]
        },
        layout: 'lightHorizontalLines'
      },

      { text: '\n' },

      { text: 'Salidas', style: 'subheader' },
      {
        style: 'tableExample',
        table: {
          widths: ['auto', '*', 'auto'],
          body: [
    [
      { text: 'No', alignment: 'center', fillColor: '#f44336', color: '#ffffff' },
      { text: 'Tipo Salida', alignment: 'center', fillColor: '#f44336', color: '#ffffff' },
      { text: 'Monto', alignment: 'center', fillColor: '#f44336', color: '#ffffff' },
      
    ],
    ...this.salidas.map((s, i) => [
      { text: i + 1, alignment: 'center' },
    { text: s.tipo ?? 'SIN DATO', alignment: 'center' },
    { text: s.monto != null ? s.monto.toString() : '0', alignment: 'center' },
     
    ])
  ]
        },
        layout: 'lightHorizontalLines'
      }
    ],
    styles: {
      header: {
        fontSize: 18,
        bold: true,
        alignment: 'center',
        margin: [0, 0, 0, 10]
      },
      subheader: {
        fontSize: 14,
        bold: true,
        margin: [0, 10, 0, 5]
      },
      tableExample: {
        margin: [0, 5, 0, 15]
      }
    }
  };

  pdfMake.createPdf(documentDefinition).open();
}

}
