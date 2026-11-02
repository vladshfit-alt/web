/*
    task1.js - завдання 1 (варіант 4): яка зараз пара
    Шаренко Владислав Юрійович, група АнД-31, варіант 24
*/

/* 1. ВИХІДНІ МАСИВИ */
let predmety = ['Веб-програмування', 'Бази даних', 'Методи оптимізації',
                'Теорія ймовірностей', 'Англійська мова',
                "Комп'ютерні мережі"];
let pochatky = ['08:40', '10:35', '12:20', '14:05', '15:50', '17:30'];
let vykladachi = ['Федусенко О. В.', '', 'Білан С. М.',
                  'Шевченко І. П.', '', 'Коваленко А. М.'];

const TRYVALIST = 80;   /* тривалість пари, хвилин */
let now = 0;            /* момент розрахунку, хвилин від початку доби */

/* 2. ПЕРЕТВОРЕННЯ ЧАСУ */
function v_hvylyny(text) {
    let chastyny = text.split(':');
    return Number(chastyny[0]) * 60 + Number(chastyny[1]);
}

function v_chas(hvylyn) {
    let hod = Math.floor(hvylyn / 60);
    let hv = hvylyn % 60;
    return (hod < 10 ? '0' : '') + hod + ':' + (hv < 10 ? '0' : '') + hv;
}

function tryvalist_slovamy(hvylyn) {
    let hod = Math.floor(hvylyn / 60);
    let hv = hvylyn % 60;
    if (hod == 0) {
        return hv + ' хв';
    }
    return hod + ' год ' + hv + ' хв';
}

/* час з поля вводу, а якщо поле порожнє - поточний час */
function potochni_hvylyny() {
    let pole = document.getElementById('chas');
    if (pole.value != '') {
        return v_hvylyny(pole.value);
    }
    let data = new Date();
    return data.getHours() * 60 + data.getMinutes();
}

/* 3. МАСИВ ОБ'ЄКТІВ «ПАРА» З ТРЬОХ МАСИВІВ */
function stvoryty_pary() {
    let pary = [];
    for (let i = 0; i < predmety.length; i++) {
        let start = v_hvylyny(pochatky[i]);
        pary[i] = {
            nomer: i + 1,
            predmet: predmety[i],
            pochatok: pochatky[i],
            kinec: v_chas(start + TRYVALIST),
            vykladach: vykladachi[i],
            start: start,
            stop: start + TRYVALIST
        };
    }
    return pary;
}

/* 4. РЯДОК ТАБЛИЦІ ДЛЯ ОДНІЄЇ ПАРИ */
function vyvod(item, i, array) {
    let stan = '';
    let klas = '';
    if (now >= item.stop) {
        stan = 'Уже закінчилася';
        klas = 'past';
    } else if (now >= item.start) {
        stan = 'Триває зараз, до кінця ' +
               tryvalist_slovamy(item.stop - now);
        klas = 'current';
    } else {
        stan = 'Почнеться через ' + tryvalist_slovamy(item.start - now);
    }
    let vykladach = item.vykladach;
    if (vykladach == '') {
        vykladach = '<span class="no-teacher">не вказано</span>';
    }
    return '<tr class="' + klas + '"><td>' + item.nomer + '</td><td>' +
           item.predmet + '</td><td>' + item.pochatok + ' - ' + item.kinec +
           '</td><td>' + vykladach + '</td><td>' + stan + '</td></tr>';
}

/* 5. ЗАГАЛЬНИЙ СТАН РОЗКЛАДУ */
function zagalnyj_stan(pary) {
    /* пари ще не почалися */
    if (now < pary[0].start) {
        return '<p class="msg msg-info">Пари ще не почалися. ' +
               'Перша пара («' + pary[0].predmet + '») розпочнеться о ' +
               pary[0].pochatok + '.</p>';
    }

    /* пари закінчилися */
    let ostannja = pary[pary.length - 1];
    if (now >= ostannja.stop) {
        return '<p class="msg msg-info">Пари закінчилися. ' +
               'Остання пара завершилась о ' + ostannja.kinec + '.</p>';
    }

    /* зараз іде одна з пар */
    for (let i = 0; i < pary.length; i++) {
        if (now >= pary[i].start && now < pary[i].stop) {
            let rjadok = '<p class="msg msg-ok">Зараз іде ' +
                pary[i].nomer + ' пара: «' + pary[i].predmet + '» (' +
                pary[i].pochatok + ' - ' + pary[i].kinec +
                '). До кінця пари залишилося ' +
                tryvalist_slovamy(pary[i].stop - now) + '.</p>';
            if (pary[i].vykladach == '') {
                rjadok += '<p class="msg msg-warn">Увага: для поточної ' +
                          'пари не вказано прізвище викладача.</p>';
            }
            return rjadok;
        }
    }

    /* перерва після <номер> пари */
    for (let i = 0; i < pary.length - 1; i++) {
        if (now >= pary[i].stop && now < pary[i + 1].start) {
            return '<p class="msg msg-info">Перерва після ' +
                   pary[i].nomer + ' пари. Наступна пара («' +
                   pary[i + 1].predmet + '») розпочнеться о ' +
                   pary[i + 1].pochatok + '.</p>';
        }
    }
    return '';
}

/* 6. ДОДАТКОВЕ ПОВІДОМЛЕННЯ ПРО ПАРИ БЕЗ ВИКЛАДАЧА */
function nevidomi_vykladachi(pary) {
    let spysok = [];
    for (let i = 0; i < pary.length; i++) {
        if (pary[i].vykladach == '') {
            spysok.push(pary[i].nomer + ' пара («' +
                        pary[i].predmet + '»)');
        }
    }
    if (spysok.length == 0) {
        return '';
    }
    return '<p class="msg msg-warn">Не вказано прізвище викладача ' +
           'для таких занять: ' + spysok.join(', ') + '.</p>';
}

/* 7. ГОЛОВНА ФУНКЦІЯ */
function ras() {
    now = potochni_hvylyny();
    let pary = stvoryty_pary();
    let html = '<p class="hint">Час розрахунку: <b>' + v_chas(now) +
               '</b>. Тривалість пари - ' + TRYVALIST + ' хвилин.</p>';
    html += zagalnyj_stan(pary);
    html += '<table class="schedule"><tr><th>№</th><th>Предмет</th>' +
            '<th>Час</th><th>Викладач</th><th>Стан</th></tr>';
    pary.forEach(function (item, i, array) {
        html += vyvod(item, i, array);
    });
    html += '</table>';
    html += nevidomi_vykladachi(pary);
    document.getElementById('rezult').innerHTML = html;
}

function skynuty() {
    document.getElementById('chas').value = '';
    ras();
}

ras();
