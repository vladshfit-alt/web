/*
    flomastery.ts - нащадок «Фломастери» класу «Товар» (варіант 12)
    Шаренко Владислав Юрійович, група АнД-31, варіант 24
*/
import { Tovar } from './tovar';

export class Flomastery extends Tovar {
    nazva: string;
    sort: number;

    constructor(kilkist: number, cina: number, nazva: string,
                sort: number) {
        /* викликаємо конструктор батьківського класу */
        super(kilkist, cina);
        this.nazva = nazva;
        this.sort = sort;
    }

    /* перевизначаємо метод: вартість з урахуванням сорту в 1 / s раз */
    override vartist(): number {
        return super.vartist() / this.sort;
    }
}
