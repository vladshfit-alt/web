/*
    task2.js - завдання 2.1 (варіант 4): закриття блоків;
    завдання 2.2 (варіант 11): суми додатних і від'ємних елементів
    Шаренко Владислав Юрійович, група АнД-31, варіант 24
*/

/* ===== ЗАВДАННЯ 2.1 ===== */

/* 1. КОПІЯ ПОЧАТКОВИХ БЛОКІВ ДЛЯ ВІДНОВЛЕННЯ */
let pochatkovi_bloky = document.getElementById('bloky').innerHTML;

/* 2. ОБРОБНИК КНОПКИ «ЗАКРИТИ БЛОК» */
function zakryty_blok(podija) {
    let knopka = podija.currentTarget;
    let blok = knopka.parentNode;   /* блок, у якому лежить кнопка */
    /* вилучаємо блок разом з його кнопкою та вкладеними блоками */
    blok.parentNode.removeChild(blok);
}

function pidkljuchyty_knopky() {
    let knopky = document.querySelectorAll('.close-btn');
    for (let i = 0; i < knopky.length; i++) {
        knopky[i].onclick = zakryty_blok;
    }
}

function vidnovyty_bloky() {
    document.getElementById('bloky').innerHTML = pochatkovi_bloky;
    pidkljuchyty_knopky();
}

pidkljuchyty_knopky();

/* ===== ЗАВДАННЯ 2.2 ===== */

/* 3. ЧИСЛА З ТАБЛИЦІ У ДВОВИМІРНИЙ МАСИВ */
function generate_arr(id) {
    let rjadky = document.getElementById(id).getElementsByTagName('tr');
    let masyv = [];
    for (let i = 0; i < rjadky.length; i++) {
        let komirky = rjadky[i].getElementsByTagName('td');
        masyv[i] = [];
        for (let j = 0; j < komirky.length; j++) {
            masyv[i][j] = Number(komirky[j].textContent);
        }
    }
    return masyv;
}

/* 4. СУМИ ПО РЯДКАХ І ПО СТОВПЧИКАХ (нулі не входять у жодну суму) */
function sumy_rjadkiv(masyv) {
    let rezultat = [];
    for (let i = 0; i < masyv.length; i++) {
        let dodatni = 0;
        let vidjemni = 0;
        for (let j = 0; j < masyv[i].length; j++) {
            if (masyv[i][j] > 0) {
                dodatni = dodatni + masyv[i][j];
            } else if (masyv[i][j] < 0) {
                vidjemni = vidjemni + masyv[i][j];
            }
        }
        rezultat[i] = { dodatni: dodatni, vidjemni: vidjemni };
    }
    return rezultat;
}

function sumy_stovpciv(masyv) {
    let rezultat = [];
    let kilkist = masyv[0].length;
    for (let j = 0; j < kilkist; j++) {
        let dodatni = 0;
        let vidjemni = 0;
        for (let i = 0; i < masyv.length; i++) {
            if (masyv[i][j] > 0) {
                dodatni = dodatni + masyv[i][j];
            } else if (masyv[i][j] < 0) {
                vidjemni = vidjemni + masyv[i][j];
            }
        }
        rezultat[j] = { dodatni: dodatni, vidjemni: vidjemni };
    }
    return rezultat;
}

/* 5. ТАБЛИЦЯ СУМ У ВИГЛЯДІ HTML */
function vyvod_sum(nazva, sumy) {
    let html = '<table class="sums"><tr><th>' + nazva + '</th>' +
               '<th>Сума додатних</th><th>Сума від\'ємних</th></tr>';
    for (let i = 0; i < sumy.length; i++) {
        html += '<tr><td>' + nazva + ' ' + (i + 1) + '</td>' +
                '<td class="plus">' + sumy[i].dodatni + '</td>' +
                '<td class="minus">' + sumy[i].vidjemni + '</td></tr>';
    }
    return html + '</table>';
}

/* 6. ПІДСВІЧУВАННЯ ДОДАТНИХ І ВІД'ЄМНИХ ЧИСЕЛ */
function color(id) {
    let komirky = document.getElementById(id).getElementsByTagName('td');
    for (let i = 0; i < komirky.length; i++) {
        let chyslo = Number(komirky[i].textContent);
        if (chyslo > 0) {
            komirky[i].className = 'plus';
        } else if (chyslo < 0) {
            komirky[i].className = 'minus';
        }
    }
}

/* 7. ГОЛОВНА ФУНКЦІЯ ЗАВДАННЯ 2.2 */
function table_obrab() {
    let masyv = generate_arr('tabl');
    let rjadky = sumy_rjadkiv(masyv);
    let stovpci = sumy_stovpciv(masyv);
    color('tabl');
    document.getElementById('sumy').innerHTML =
        '<h3>Результуючі таблиці сум</h3><div class="sums-row">' +
        vyvod_sum('Рядок', rjadky) + vyvod_sum('Стовпчик', stovpci) +
        '</div>';
}

function ochystyty() {
    document.getElementById('sumy').innerHTML = '';
    let tablycja = document.getElementById('tabl');
    let komirky = tablycja.getElementsByTagName('td');
    for (let i = 0; i < komirky.length; i++) {
        komirky[i].className = '';
    }
}
