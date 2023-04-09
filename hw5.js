// задание 1
function compare(a, b) {
    if (a >= b) {
        return b;
    } else {
        return a;
    }
};

// задание 2
function lsee(num) {
    if (num % 2 === 1) {
        return ('число нечетное');
    } else if (num % 2 === 0) {
        return ('число четное');
    } else {
        return ('это не число');
    }
};

// задание 3
function doble(c) {
    console.log(c * c);
};
function cuadro(c) {
    return (c * c);
};

// задание 4
function hello() {
    let age = prompt('Сколько вам лет?');
    if (age < 0) {
        alert('Вы ввели неправильное значение');
    } else if (age >= 0 && age <= 12) {
        alert('Привет, друг!');
    } else {
        alert('Добро пожаловать!')
    }
};

// задание 5
function mult() {
    let num1 = prompt('Введите первое число');
    let num2 = prompt('Введите второе число');
    if (isNaN(num1) || isNaN(num2)) {
        return ('Одно или оба значения не являются числом');
    } else {
        return num1 * num2;
    }
};

// задание 6
function extent() {
    let num = prompt('Введите любое число');
    if (isNaN(num)) {
        return ('Переданный параметр не является числом');
    } else {
        return num ** 3;
    }
};

// задание 7
const circle1 = {
    radius: 20,

    getArea() {
        return Math.PI * this.radius ** 2;
    },

    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
}
const circle2 = {
    radius: 30,

    getArea() {
        return Math.PI * this.radius ** 2;
    },

    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
}