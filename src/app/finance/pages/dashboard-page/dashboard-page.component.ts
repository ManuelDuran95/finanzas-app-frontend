import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenuComponent } from "../../components/side-menu/side-menu.component";
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";

@Component({
  selector: 'app-dashboard-page',
  imports: [RouterOutlet, SideMenuComponent, NavBarComponent],
  templateUrl: './dashboard-page.component.html'
})
export default class DashboardPageComponent { }
