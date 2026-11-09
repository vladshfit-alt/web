/*
    app.component.ts - головний компонент: шапка і компонент
    для роботи з класами
    Шаренко Владислав Юрійович, група АнД-31, варіант 24
*/
import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { TovarComponent } from './tovar/tovar.component';

@Component({
    selector: 'app-root',
    imports: [HeaderComponent, TovarComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {}
