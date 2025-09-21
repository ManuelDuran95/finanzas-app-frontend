import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface MenuOptions {
  icon: string;
  lebel: string;
  subLebel: string;
  route: string;
}

@Component({
  selector: 'app-finance-side-menu-options',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './finance-side-menu-options.component.html'
})
export class FinanceSideMenuOptionsComponent { 
  public menuOptions: MenuOptions[] = [
    {
      icon: 'fa-solid fa-coins',
      lebel: 'Inicio',
      subLebel: 'Pagina principal',
      route: '/app/home'
    },
    {
      icon: 'fa-solid fa-money-bill-transfer',
      lebel: 'Registrar Entrada',
      subLebel: 'Registrar una entrada',
      route: '/app/registrar-entrada'
    },
    {
      icon: 'fa-solid fa-money-bill-transfer',
      lebel: 'Registrar Salida',
      subLebel: 'Registrar una salida',
      route: '/app/registrar-salida'
    },
    {
      icon: 'fa-solid fa-wallet',
      lebel: 'Ver Entradas',
      subLebel: 'Ver todas las entradas',
      route: '/app/ver-entradas'
    },
    {
      icon: 'fa-solid fa-receipt',
      lebel: 'Ver Salidas',
      subLebel: 'Ver todas las salidas',
      route: '/app/ver-salidas'
    },
    {
      icon: 'fa-solid fa-money-bill-trend-up',
      lebel: 'Balance',
      subLebel: 'Ver el balance',
      route: '/app/balance'
    }
  ];

}
