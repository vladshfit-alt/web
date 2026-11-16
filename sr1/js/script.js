/*
    script.js - читання каталогу рослин з хмарного сховища jsonbin.io
    і виведення його трьома групами
    Шаренко Владислав Юрійович, група АнД-31, варіант 24
*/

/* 1. АДРЕСА JSON-ФАЙЛУ У ХМАРНОМУ СХОВИЩІ */
const ADRESA = 'https://api.jsonbin.io/v3/b/6afac557ac6210605a8b4b71';

const GRUPY = [
    { typ: 'їстівна', zagolovok: 'Їстівні рослини', klas: 'jistivni' },
    { typ: 'неїстівна', zagolovok: 'Неїстівні рослини', klas: 'nejistivni' },
    { typ: 'отруйна', zagolovok: 'Отруйні рослини', klas: 'otrujni' }
];

let roslyny = [];

/* 2. ЧИТАННЯ ДАНИХ */
async function populate() {
    try {
        const response = await fetch(ADRESA);
        if (response.ok) {
            const json = await response.json();
            novi_roslyny(json.record);
            show_catalog();
        } else {
            show_error('Помилка HTTP: ' + response.status);
        }
    } catch (err) {
        show_error('Не вдалося з\'єднатися зі сховищем.');
    }
}

/* 3. МАСИВ ОБ'ЄКТІВ КЛАСУ Roslyna */
function novi_roslyny(dani) {
    roslyny = [];
    for (const r of dani) {
        roslyny.push(new Roslyna(r.nazva, r.typ, r.opys));
    }
}

/* 4. ВИВЕДЕННЯ ТРЬОМА ГРУПАМИ */
function show_catalog() {
    const article = document.querySelector('article');
    article.innerHTML = '';
    for (const g of GRUPY) {
        const blok = document.createElement('div');
        blok.className = 'group ' + g.klas;
        const h2 = document.createElement('h2');
        const ul = document.createElement('ul');
        let kilkist = 0;
        for (const r of roslyny) {
            if (r.typ == g.typ) {
                const li = document.createElement('li');
                li.textContent = r.ryadok();
                ul.appendChild(li);
                kilkist++;
            }
        }
        h2.textContent = g.zagolovok + ' (' + kilkist + ')';
        blok.appendChild(h2);
        blok.appendChild(ul);
        article.appendChild(blok);
    }
}

function show_error(text) {
    const article = document.querySelector('article');
    article.innerHTML = '<p class="error">' + text + '</p>';
}

populate();
