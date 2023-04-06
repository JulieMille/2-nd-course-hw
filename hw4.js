// задание 1
let a = 1;
while (a < 3) {
    console.log('Привет');
    a++;
}

// задание 2
let b = 1;
while (b <= 5) {
    console.log(b);
    b++;
}

// задание 3
let c = 7;
while (c <= 22) {
    console.log(c);
    c++;
}

// задание 4
const obj = {
    'Коля': 200,
    'Вася': 300,
    'Петя': 400,
};
for (let key in obj) {
    console.log(`${key} - зарплата ${obj[key]} долларов`);
}

// задание 5
let n = 1000;
let num = 0;
while (n >= 50) {
    n = n / 2;
    num++;
}
console.log(num);

// задание 6
let day = 2;
while (day < 31) {
    day++;
    if ((day - 3) % 7 === 0) {
        console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет`);
    };
}