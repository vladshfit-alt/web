/*
    masyv2.ts - клас для роботи з двовимірним масивом (варіант 24)
    Шаренко Владислав Юрійович, група АнД-31, варіант 24
*/
import { Vypadkove } from './vypadkove';

export class Masyv2 {
    a: number[][] = [];
    b: number[][] = [];
    maks: number = 0;
    i_maks: number = 0;
    j_maks: number = 0;

    /* заповнення масиву n * m випадковими дійсними числами */
    generuvaty(n: number, m: number, min: number, max: number) {
        let vypadkove = new Vypadkove();
        this.a = [];
        this.b = [];
        for (let i = 0; i < n; i++) {
            this.a[i] = [];
            for (let j = 0; j < m; j++) {
                this.a[i][j] = vypadkove.dijsne(min, max);
            }
        }
    }

    /* пошук найбільшого за модулем елемента та його індексів */
    maks_modul() {
        this.maks = this.a[0][0];
        this.i_maks = 0;
        this.j_maks = 0;
        for (let i = 0; i < this.a.length; i++) {
            for (let j = 0; j < this.a[i].length; j++) {
                if (Math.abs(this.a[i][j]) > Math.abs(this.maks)) {
                    this.maks = this.a[i][j];
                    this.i_maks = i;
                    this.j_maks = j;
                }
            }
        }
    }

    /* новий масив: кожен елемент ділимо на найбільший за модулем */
    podilyty() {
        this.maks_modul();
        this.b = [];
        for (let i = 0; i < this.a.length; i++) {
            this.b[i] = [];
            for (let j = 0; j < this.a[i].length; j++) {
                let chastka = this.a[i][j] / this.maks;
                this.b[i][j] = Math.round(chastka * 1000) / 1000;
            }
        }
    }
}
