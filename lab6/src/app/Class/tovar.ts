/*
    tovar.ts - базовий клас «Товар» (варіант 12)
    Шаренко Владислав Юрійович, група АнД-31, варіант 24
*/
export class Tovar {
    kilkist: number;
    cina: number;

    constructor(kilkist: number, cina: number) {
        this.kilkist = kilkist;
        this.cina = cina;
    }

    /* вартість товару */
    vartist(): number {
        return this.kilkist * this.cina;
    }
}
