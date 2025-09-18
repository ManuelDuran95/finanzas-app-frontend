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
      icon: 'fa-solid fa-chart-simple',
      lebel: 'Movimientos',
      subLebel: 'Movimientos de la cuenta',
      route: '/app/search'
    }
  ];

}
