import { Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';

export const routes: Routes = [

    {
        path: 'home',
        canActivate: [authGuard],
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
    },

    {
        path: 'create-meal',
        canActivate: [authGuard],
        loadComponent: () => import('./pages/create-meal/create-meal.component').then(m => m.CreateMealComponent)
    },

    {
        path: 'view-metrics',
        canActivate: [authGuard],
        loadComponent: () => import('./pages/view-metrics/view-metrics.component').then(m => m.ViewMetricsComponent)
    },

    {
        path: 'not-is-diet',
        canActivate: [authGuard],
        loadComponent: () => import('./pages/not-is-diet/not-is-diet.component').then(m => m.NotIsDietComponent)
    },

    {
        path: 'is-diet',
        canActivate: [authGuard],
        loadComponent: () => import('./pages/isdiet/isdiet.component').then(m => m.IsdietComponent)
    },

    {
        path: 'view-meal/:id',
        canActivate: [authGuard],
        loadComponent: () => import('./pages/view-meal/view-meal.component').then(m => m.ViewMealComponent)
    },

    {
        path: 'login',
        loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent)
    },

    {
        path: 'register',
        loadComponent: () => import('./pages/register/register.component').then(m => m.RegisterComponent)
    },

    {
        path: 'edit-meal/:id',
        canActivate: [authGuard],
        loadComponent: () => import('./pages/view-meal/edit-meal/edit-meal.component').then(m => m.EditMealComponent)
    },

    {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
    }

];
