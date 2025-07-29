import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'basic',
        title: 'Pipes Basicos',
        loadComponent: () => import('./pages/basic/basic.component'),
    },
    {
        path: 'custom',
        title: 'Pipes Personalizados',
        loadComponent: () => import('./pages/custom/custom.component'),
    },
    {
        path: 'numbers',
        title: 'Pipes Numericos',
        loadComponent: () => import('./pages/numbers/numbers.component'),
    },
    {
        path: 'uncommon',
        title: 'Pipes No Comunes',
        loadComponent: () => import('./pages/uncommon/uncommon.component'),
    },
    {
        path: '**',
        redirectTo: 'basic',
    }
];
