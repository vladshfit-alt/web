/*
    masyv1.ts - клас для роботи з одновимірним масивом (варіант 24)
    Шаренко Владислав Юрійович, група АнД-31, варіант 24
*/
import { Vypadkove } from './vypadkove';

export class Masyv1 {
    a: number[] = [];
    suma: number = 0;
    kilkist: number = 0;

    /* заповнення масиву n випадковими дійсними числами від min до max */
    generuvaty(n: number, min: number, max: number) {
        let vypadkove = new Vypadkove();
        this.a = [];
        for (let i = 0; i < n; i++) {
            this.a.push(vypadkove.dijsne(min, max));
        }
    }

    /* сума елементів, більших за дане число */
    suma_bilshyh(chyslo: number) {
        this.suma = 0;
        this.kilkist = 0;
        for (let i = 0; i < this.a.length; i++) {
            if (this.a[i] > chyslo) {
                this.suma += this.a[i];
                this.kilkist++;
            }
        }
        this.suma = Math.round(this.suma * 100) / 100;
    }
}
