import { Component } from '@angular/core';
import { FinanceSideMenuHeaderComponent } from "./finance-side-menu-header/finance-side-menu-header.component";
import { FinanceSideMenuOptionsComponent } from "./finance-side-menu-options/finance-side-menu-options.component";

@Component({
  selector: 'app-side-menu',
  imports: [FinanceSideMenuHeaderComponent, FinanceSideMenuOptionsComponent],
  templateUrl: './side-menu.component.html',
})
export class SideMenuComponent { }
