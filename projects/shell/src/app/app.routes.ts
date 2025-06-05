import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';
import { Home } from './home/home';

export const routes: Routes = [
   {
      path: '',
      pathMatch: 'full',
      component: Home
   },
   {
    path: 'micro-front-1',
    loadComponent: () =>
      loadRemoteModule('micro-front-1', './Component').then((m) => m.App),
   },
   {
    path: 'micro-front-2',
    loadComponent: () =>
      loadRemoteModule('micro-front-2', './Component').then((m) => m.App),
   },
];
