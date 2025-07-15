import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: 'home',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
    },

    {
        path: 'create-meal',
        loadComponent: () => import('./pages/create-meal/create-meal.component').then(m => m.CreateMealComponent)
    },

    {
        path: 'view-metrics',
        loadComponent: () => import('./pages/view-metrics/view-metrics.component').then(m => m.ViewMetricsComponent)
    },

    {
        path: 'not-is-diet',
        loadComponent: () => import('./pages/not-is-diet/not-is-diet.component').then(m => m.NotIsDietComponent)
    },

    {
        path: 'is-diet',
        loadComponent: () => import('./pages/isdiet/isdiet.component').then(m => m.IsdietComponent)
    },

    {
        path: 'view-meal/:id',
        loadComponent: () => import('./pages/view-meal/view-meal.component').then(m => m.ViewMealComponent)
    },

    {
        path: 'login',
        loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent)
    },

    {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
    }

];
