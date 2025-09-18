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
