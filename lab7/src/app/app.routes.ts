/*
    app.routes.ts - маршрути головного меню
    Шаренко Владислав Юрійович, група АнД-31, варіант 24
*/
import { Routes } from '@angular/router';
import { TovarComponent } from './tovar/tovar.component';
import { Masyv1Component } from './masyv1/masyv1.component';
import { Masyv2Component } from './masyv2/masyv2.component';

export const routes: Routes = [
    { path: '', redirectTo: 'classes', pathMatch: 'full' },
    { path: 'classes', component: TovarComponent },
    { path: 'masyv1', component: Masyv1Component },
    { path: 'masyv2', component: Masyv2Component },
];
