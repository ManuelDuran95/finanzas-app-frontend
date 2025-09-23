import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>import('./auth/auth.routes')
    //TODO: guards
  },
  {
    path: 'app',
    loadComponent: () =>
      import('./finance/pages/dashboard-page/dashboard-page.component'),
    children: [
      {
        path: 'home',
        loadComponent: () => import('./finance/pages/home/home.component'),
      },
      {
        path: 'search',
        loadComponent: () =>
          import('./finance/pages/search-page/search-page.component'),
      },
      {
        path: 'registrar-entrada',
        loadComponent: () =>
          import('./finance/pages/registrar-entrada-page/registrar-entrada-page.component'),
      },
      {
        path: 'registrar-salida',
        loadComponent: () =>
          import('./finance/pages/registrar-salidas-page/registrar-salidas-page.component'),
      },
      {
        path: 'ver-entradas',
        loadComponent: () =>
          import('./finance/pages/entradas-view-page/entradas-view-page.component'),
      },
      {
        path: 'ver-salidas',
        loadComponent: () =>
          import('./finance/pages/salidas-view-page/salidas-view-page.component'),
      },
      {
        path: 'balance',
        loadComponent: () =>
          import('./finance/pages/balance-page/balance-page.component'),
      },
      {
        path: 'about',
        loadComponent: () =>
          import('./finance/pages/acerca-page/acerca-page.component'),
      },

      {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'app/home',
    pathMatch: 'full',
  }
];
