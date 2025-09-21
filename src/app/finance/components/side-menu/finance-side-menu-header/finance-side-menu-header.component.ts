import { Component } from '@angular/core';
import { environment } from '@environments/environment';

interface ususario {
  name: string;
  lastName: string;
  email: string;
  role: string;
  imgenUrl?: string;
}
@Component({
  selector: 'app-finance-side-menu-header',
  imports: [],
  templateUrl: './finance-side-menu-header.component.html'
})
export class FinanceSideMenuHeaderComponent { 
  envs = environment;
  defaultUserImage = environment.defaultUserImage;

  public usuario: ususario = {
    name: 'Manuel',
    lastName: 'Mata',
    email: 'correo@example.com',
    role: 'Admin',
    imgenUrl: 'https://sistemas.com/termino/wp-content/uploads/Usuario-Icono.jpg'
  }

 

}
