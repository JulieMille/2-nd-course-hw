// задание 1
let password = 'threewords';
let checkPW = String(prompt('Введите пароль'));
password === checkPW ? alert('Пароль введен верно') : alert('Пароль введен неправильно')

// задание 2
let c = 27;
if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

// задание 3
let d = 107;
let e = 73;
if (d > 100 || e > 100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

// задание 4
let a = '2';
let b = '3';
alert(Number(a) + Number(b));

// задание 5
let monthNumber = Number(prompt('Введите номер месяца'));
switch (monthNumber) {
    case 1:
    case 2:
    case 12:
        console.log('Это месяц зимы');
        break;
    case 3:
    case 4:
    case 5:
        console.log('Это месяц весны');
        break;
    case 6:
    case 7:
    case 8:
        console.log('Это месяц лета');
        break;
    case 9:
    case 10:
    case 11:
        console.log('Это месяц осени');
        break;
    default:
        console.log('Нет такого месяца');
        break;
}

// задание 7
let num = prompt('Пожалуйста, введите любое число');
num = Number(num);
num = Math.abs(num);
if (num % 2 === 1) {
    alert('число нечетное');
} else if (num % 2 === 0) {
    alert('число четное');
} else {
    alert('это не число');
}

// задание 8
let clientOS1 = Number(prompt('Введите 0, если ваша операционная система - iOS, и 1 если Android'));
if (clientOS1 === 0) {
    alert('Установите версию приложения для iOS по ссылке')
} else if (clientOS1 === 1) {
    alert('Установите версию приложения для Android по ссылке')
} else {
    alert('Неверный ввод')
}

// задание 9
let clientOS = Number(prompt('Введите 0, если ваша операционная система - iOS, и 1 если Android'));
let clientDeviceYear = Number(prompt('Введите год выхода модели вашего телефона'));
if (clientDeviceYear >= 2015 && clientDeviceYear < 2024) {
    if (clientOS === 0) {
        alert('Установите версию приложения для iOS по ссылке');
    } else if (clientOS === 1 && clientDeviceYear < 2024) {
        alert('Установите версию приложения для Android по ссылке');
    } else {
        alert('Неверный ввод');
    }
} else if (clientDeviceYear < 2015 && clientDeviceYear >= 2008) {
    if (clientOS === 0) {
        alert('Установите облегченную версию приложения для iOS по ссылке');
    } else if (clientOS === 1) {
        alert('Установите облегченную версию приложения для Android по ссылке');
    } else {
        alert('Неверный ввод');
    }
} else {
    alert('Неверный ввод');
}