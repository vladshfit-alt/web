/*
    masyv1.component.ts - компонент для роботи з одновимірним масивом
    Шаренко Владислав Юрійович, група АнД-31, варіант 24
*/
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Masyv1 } from '../Class/masyv1';

@Component({
    selector: 'app-masyv1',
    imports: [CommonModule],
    templateUrl: './masyv1.component.html',
    styleUrl: './masyv1.component.css',
})
export class Masyv1Component {
    masyv: Masyv1 = new Masyv1();
    pomylka: string = '';
    rezultat: string = 'Натисніть «Обчислити»';
    porig: number = Infinity;

    constructor() {
        this.masyv.generuvaty(20, 50, 100);
    }

    /* 1. ПЕРЕВІРКА ДАНОГО ЧИСЛА */
    perevirka(text: string) {
        if (text == '' || !isFinite(Number(text))) {
            this.pomylka = 'Введіть число, наприклад 75 або 80.5.';
        } else {
            this.pomylka = '';
        }
    }

    /* 2. РОЗРАХУНОК СУМИ */
    rozrahunok(text: string) {
        this.perevirka(text);
        if (this.pomylka != '') {
            return;
        }
        this.porig = Number(text);
        this.masyv.suma_bilshyh(this.porig);
        this.rezultat = 'Елементів, більших за ' + this.porig + ': ' +
            this.masyv.kilkist + ', їх сума = ' + this.masyv.suma;
    }

    /* 3. НОВИЙ МАСИВ */
    novyj_masyv() {
        this.masyv.generuvaty(20, 50, 100);
        this.porig = Infinity;
        this.rezultat = 'Натисніть «Обчислити»';
    }
}
