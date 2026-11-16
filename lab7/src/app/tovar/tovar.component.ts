/*
    tovar.component.ts - компонент для роботи з класами
    «Товар» і «Фломастери»
    Шаренко Владислав Юрійович, група АнД-31, варіант 24
*/
import { Component } from '@angular/core';
import { Tovar } from '../Class/tovar';
import { Flomastery } from '../Class/flomastery';

@Component({
    selector: 'app-tovar',
    imports: [],
    templateUrl: './tovar.component.html',
    styleUrl: './tovar.component.css',
})
export class TovarComponent {
    tovar_show: string = 'Натисніть «Розрахунок»';
    flomastery_show: string = 'Натисніть «Розрахунок»';
    tovar_pomylka: string = '';
    flomastery_pomylka: string = '';

    /* 1. ПЕРЕВІРКА ЗНАЧЕНЬ ПОЛІВ */
    cile(text: string): boolean {
        return text != '' && Number.isInteger(Number(text)) &&
            Number(text) > 0;
    }

    dodatne(text: string): boolean {
        return text != '' && Number(text) > 0;
    }

    perevirka_tovaru(k: string, c: string): string {
        if (!this.cile(k)) {
            return 'Кількість має бути цілим числом, більшим за 0.';
        }
        if (!this.dodatne(c)) {
            return 'Ціна має бути числом, більшим за 0.';
        }
        return '';
    }

    perevirka_flomasteriv(k: string, c: string, nazva: string,
                          s: string): string {
        let pomylka = this.perevirka_tovaru(k, c);
        if (pomylka != '') {
            return pomylka;
        }
        if (nazva.trim() == '') {
            return 'Вкажіть назву фломастерів.';
        }
        if (!this.cile(s)) {
            return 'Сорт має бути цілим числом, більшим за 0.';
        }
        return '';
    }

    /* 2. СТВОРЕННЯ ОБ'ЄКТІВ І РОЗРАХУНОК ВАРТОСТІ */
    rozrahunok(k1: string, c1: string, k2: string, c2: string,
               n2: string, s2: string) {
        this.tovar_pomylka = this.perevirka_tovaru(k1, c1);
        if (this.tovar_pomylka == '') {
            let tovar = new Tovar(Number(k1), Number(c1));
            this.tovar_show = 'Вартість = ' + tovar.kilkist + ' × ' +
                tovar.cina + ' = ' + tovar.vartist().toFixed(2) + ' грн';
        } else {
            this.tovar_show = '-';
        }

        this.flomastery_pomylka =
            this.perevirka_flomasteriv(k2, c2, n2, s2);
        if (this.flomastery_pomylka == '') {
            let flomastery = new Flomastery(Number(k2), Number(c2),
                                            n2.trim(), Number(s2));
            this.flomastery_show = '«' + flomastery.nazva + '», сорт ' +
                flomastery.sort + ': вартість = ' + flomastery.kilkist +
                ' × ' + flomastery.cina + ' / ' + flomastery.sort + ' = ' +
                flomastery.vartist().toFixed(2) + ' грн';
        } else {
            this.flomastery_show = '-';
        }
    }
}
