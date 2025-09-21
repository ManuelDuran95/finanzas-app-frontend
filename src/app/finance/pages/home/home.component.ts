import { ChangeDetectionStrategy, Component } from '@angular/core';
import RegistrarEntradaPageComponent from '../registrar-entrada-page/registrar-entrada-page.component';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface DashboardItem {
  name: string;
  ruta: string;
  description: string;
  icon: string;
}
@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomeComponent {
   
  public dashboardItems: DashboardItem[] =[
    {
      name:'Registrar Entrada',
      ruta:'/app/registrar-entrada',
      description:'Registra una nueva entrada',
      icon:'fa-solid fa-money-bill-transfer'
    },
    { name:'Registrar Salida',
      ruta:'/app/registrar-salida',
      description:'Registra una nueva salida',
      icon:'fa-solid fa-money-bill-transfer'
    },
    { name:'Ver Entradas',
      ruta:'/app/ver-entradas',
      description:'Ver todas las entradas registradas',
      icon:'fa-solid fa-wallet'
    },
    { name:'Ver Salidas',
      ruta:'/app/ver-salidas',
      description:'Ver todas las salidas registradas',
      icon:'fa-solid fa-receipt'
    },
    { name:'Balance',
      ruta:'/app/balance',
      description:'Ver el balance de entradas y salidas',
      icon:'fa-solid fa-money-bill-trend-up'
    }
  ]
 }
