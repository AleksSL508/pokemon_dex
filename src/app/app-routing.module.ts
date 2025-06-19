import { Routes } from '@angular/router';
import { HomePage } from './home/home.page';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'details/:name',
    loadComponent: () => import('./details/details.page').then(m => m.DetailsPage),
  },
];