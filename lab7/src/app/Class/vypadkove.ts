/*
    vypadkove.ts - клас для генерації випадкових чисел
    Шаренко Владислав Юрійович, група АнД-31, варіант 24
*/
export class Vypadkove {
    /* випадкове дійсне число від min до max, два знаки після коми */
    dijsne(min: number, max: number): number {
        let chyslo = min + Math.random() * (max - min);
        return Math.round(chyslo * 100) / 100;
    }
}
