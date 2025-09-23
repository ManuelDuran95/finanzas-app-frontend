import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { Salida } from '../../interfaces/salidas.interface';
import { SalidasService } from '../../services/salidas.service';

interface Salidas{
  id: number;
  tipoSalida: string;
  monto: number;
  fecha: Date;
  factura: string;
}

@Component({
  selector: 'app-salidas-view-page',
  imports: [DatePipe, CurrencyPipe],
  templateUrl: './salidas-view-page.component.html'
})
export default class SalidasViewPageComponent implements OnInit {


  @Input() isReporting: boolean = true;
  public allSalidas: Salida[] = [];
  private salidasService = inject(SalidasService)
  salidas: Salidas[] = [
    { id: 1, tipoSalida: 'Compra de materiales', monto: 150.75, fecha: new Date('2024-01-15'), factura: 'factura_001.pdf' },
    { id: 2, tipoSalida: 'Pago de servicios', monto: 200.00, fecha: new Date('2024-02-10'), factura: 'factura_002.pdf' },
    { id: 3, tipoSalida: 'Gastos de viaje', monto: 300.50, fecha: new Date('2024-03-05'), factura: 'factura_003.pdf' },
    { id: 4, tipoSalida: 'Mantenimiento de equipo', monto: 120.00, fecha: new Date('2024-04-20'), factura: 'factura_004.pdf' },
    { id: 5, tipoSalida: 'Publicidad y marketing', monto: 250.00, fecha: new Date('2024-05-18'), factura: 'factura_005.pdf' }
  ];

  getAllSalidas(){
    this.salidasService.getAll().subscribe(resp =>{
      this.allSalidas=resp;
      console.log(resp)
    }
    )
    }

  ngOnInit(): void {
      this.getAllSalidas();
  } 
  getTotalSalidas(): number {
    return this.allSalidas.reduce((total, salida) => total + parseFloat(salida.Monto), 0);
  }

 }
