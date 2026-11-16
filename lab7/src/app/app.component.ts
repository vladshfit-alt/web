/*
    app.component.ts - головний компонент: шапка, головне меню
    і місце для компонентів, які відкриває меню
    Шаренко Владислав Юрійович, група АнД-31, варіант 24
*/
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive }
    from '@angular/router';
import { HeaderComponent } from './header/header.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, RouterLink, RouterLinkActive, HeaderComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {}
