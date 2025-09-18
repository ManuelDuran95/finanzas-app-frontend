import { Component } from '@angular/core';
import { environment } from '@environments/environment';

@Component({
  selector: 'app-finance-side-menu-header',
  imports: [],
  templateUrl: './finance-side-menu-header.component.html'
})
export class FinanceSideMenuHeaderComponent { 
  envs = environment;
}
