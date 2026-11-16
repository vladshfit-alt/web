/*
    roslyna.js - базовий клас «Рослина» (варіант 12)
    Шаренко Владислав Юрійович, група АнД-31, варіант 24
*/
class Roslyna {
    constructor(nazva, typ, opys) {
        this.nazva = nazva;
        this.opys = opys;
        /* допустимі лише три групи, інше значення - «невідомо» */
        if (typ == 'їстівна' || typ == 'неїстівна' || typ == 'отруйна') {
            this.typ = typ;
        } else {
            this.typ = 'невідомо';
        }
    }

    /* рядок для виведення у списку */
    ryadok() {
        return this.nazva + ' - ' + this.opys;
    }
}
