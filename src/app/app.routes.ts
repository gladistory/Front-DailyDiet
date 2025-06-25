import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CreateMealComponent } from './pages/create-meal/create-meal.component';
import { ViewMetricsComponent } from './pages/view-metrics/view-metrics.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },

    {
        path: 'create-meal',
        component: CreateMealComponent
    },

    {
        path: 'view-metrics',
        component: ViewMetricsComponent
    }
];
