import {Component } from '@angular/core';
import { environment } from '@environments/environment';

@Component({
  selector: 'app-nav-bar',
  imports: [],
  templateUrl: './nav-bar.component.html',
})
export class NavBarComponent { 
  envs = environment;
}
