// задание 1
let a = 'js';
a = a.toUpperCase();
console.log(a);

// задание 2
function findStart(words, search) {
    const words = ['переход', 'перерыв', 'прорыв', 'пролив', 'перед', 'промыв'];
    const search = 'пере';
    const newWords = [];
    words.forEach((el) => {
        if (el.toLowerCase().startsWith(search.toLowerCase())) {
            newWords.push(el);
        }
    });
    console.log(newWords);
}

// задание 3
const b = 32.58884
console.log(Math.floor(b));
console.log(Math.ceil(b));
console.log(Math.round(b));

// задание 4
console.log(`минимальное значение ${Math.min(52, 53, 49, 77, 21, 32)}`);
console.log(`максимальное значение ${Math.max(52, 53, 49, 77, 21, 32)}`);

// задание 5
function getRandomInt(minValue, maxValue) {
    return Math.round(Math.random() * maxValue);
}
console.log(getRandomInt(0, 10));

// задание 6
const arrNumbers = [];
function getRandomArrNumbers(maxValue) {
    for (i = 0; i < maxValue; i++) {
        arrNumbers.push(Math.round(Math.random() * maxValue));
    }
    console.log(arrNumbers);
}

// задание 7
function interval(a, b) {
    return Math.round(Math.random() * (b - a)) + a;
};

// задание 8
let meinDate = new Date("12 April 2023");
console.log(meinDate);

// задание 9
const currentDate = new Date();
currentDate.setDate(new Date().getDate() + 73);
console.log(`через 73 дня будет ${currentDate}`);

// задание 10
function findTime() {
    let myDate = new Date();
    const days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
    const months = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
    let hour = myDate.getHours();
    let minute = myDate.getMinutes();
    let second = myDate.getSeconds();
    let allDate = 'Дата - ' + myDate.getDate() + ' ' + months[myDate.getMonth()] + ' ' + myDate.getFullYear() + ' - это ' + days[myDate.getDay()];
    if (minute < 10) {
        minute = '0' + minute
    }
    if (second < 10) {
        second = '0' + second
    }
    let allTime = 'Время - ' + hour + ':' + minute + ':' + second;
    console.log(allDate);
    console.log(allTime);
}