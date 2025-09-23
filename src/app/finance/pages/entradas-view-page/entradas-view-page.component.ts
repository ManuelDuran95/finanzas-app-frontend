import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { EntradasService } from '../../services/entradas.service';
import { Entrada } from '../../interfaces/entradas.interface';

interface entradas {
  id: string;
  tipoEntrada: string;
  monto: number;
  fecha: string;
  facturaUrl?: string;
}

@Component({
  selector: 'app-entradas-view-page',
  imports: [DatePipe, CurrencyPipe],
  templateUrl: './entradas-view-page.component.html'
})
export default class EntradasViewPageComponent implements OnInit{ 

  @Input() isReporting: boolean = true;

  public allEntradas: Entrada[] = [];
  entradasService=inject(EntradasService)
  public entradas: entradas[] = [
    { id: '1', tipoEntrada: 'Venta de productos', monto: 500, fecha: '2024-01-10', facturaUrl: 'factura_001.pdf' },
    { id: '2', tipoEntrada: 'Servicios prestados', monto: 750.50, fecha: '2024-02-15', facturaUrl: 'factura_002.pdf' },
    { id: '3', tipoEntrada: 'Ingreso por alquiler', monto: 1200, fecha: '2024-03-20', facturaUrl: 'factura_003.pdf' },
    { id: '4', tipoEntrada: 'Intereses bancarios', monto: 300.75, fecha: '2024-04-25', facturaUrl: 'factura_004.pdf' },
    { id: '5', tipoEntrada: 'Otros ingresos', monto: 450, fecha: '2024-05-30' }
  ];

  getAllEntradas(){
    this.entradasService.getAll().subscribe(resp =>{
      this.allEntradas=resp;
      console.log(resp)
    }
    )
  }
  ngOnInit(): void {
      this.getAllEntradas();
  }

  getTotalEntradas(): number {
    return this.allEntradas.reduce((total, entrada) => total + parseFloat(entrada.Monto), 0);
  }

}
