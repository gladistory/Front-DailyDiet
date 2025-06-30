import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CreateMealComponent } from './pages/create-meal/create-meal.component';
import { ViewMetricsComponent } from './pages/view-metrics/view-metrics.component';
import { NotIsDietComponent } from './pages/not-is-diet/not-is-diet.component';
import { IsdietComponent } from './pages/isdiet/isdiet.component';
import { ViewMealComponent } from './pages/view-meal/view-meal.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },

    {
        path: 'home',
        component: HomeComponent
    },

    {
        path: 'create-meal',
        component: CreateMealComponent
    },

    {
        path: 'view-metrics',
        component: ViewMetricsComponent
    },

    {
        path: 'not-is-diet',
        component: NotIsDietComponent
    },

    {
        path: 'is-diet',
        component: IsdietComponent
    },

    {
        path: 'view-meal/:id',
        component: ViewMealComponent
    }

];
