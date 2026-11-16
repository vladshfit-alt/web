/*
    masyv2.component.ts - компонент для роботи з двовимірним масивом
    Шаренко Владислав Юрійович, група АнД-31, варіант 24
*/
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Masyv2 } from '../Class/masyv2';

@Component({
    selector: 'app-masyv2',
    imports: [CommonModule],
    templateUrl: './masyv2.component.html',
    styleUrl: './masyv2.component.css',
})
export class Masyv2Component {
    masyv: Masyv2 = new Masyv2();
    pomylka: string = '';
    rezultat: string = 'Натисніть «Згенерувати і обчислити»';

    /* 1. ПЕРЕВІРКА РОЗМІРНОСТІ */
    cile(text: string): boolean {
        return text != '' && Number.isInteger(Number(text)) &&
            Number(text) >= 1 && Number(text) <= 10;
    }

    perevirka(n: string, m: string) {
        if (!this.cile(n)) {
            this.pomylka = 'Кількість рядків n - ціле число від 1 до 10.';
        } else if (!this.cile(m)) {
            this.pomylka = 'Кількість стовпців m - ціле число від 1 до 10.';
        } else {
            this.pomylka = '';
        }
    }

    /* 2. ГЕНЕРАЦІЯ МАСИВУ І ДІЛЕННЯ */
    rozrahunok(n: string, m: string) {
        this.perevirka(n, m);
        if (this.pomylka != '') {
            return;
        }
        this.masyv.generuvaty(Number(n), Number(m), -10, 10);
        this.masyv.maks_modul();
        if (this.masyv.maks == 0) {
            this.rezultat = 'Усі елементи дорівнюють нулю - ділити нема ' +
                'на що.';
            return;
        }
        this.masyv.podilyty();
        this.rezultat = 'Найбільший за модулем елемент a[' +
            (this.masyv.i_maks + 1) + '][' + (this.masyv.j_maks + 1) +
            '] = ' + this.masyv.maks + '. Ділимо на нього всі елементи.';
    }
}
