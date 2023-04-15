// задание 1
const arr = [3, 4, 1, 9];
let sum = (arr) => {
    let res = arr.reduce((a, b) => a + b)
    console.log(res);
    return res;
}
let mult = (arr) => {
    let res = arr.reduce((a, b) => a * b)
    console.log(res);
    return res;
}
const getResult = (arr, callback) => {
    callback(arr);
}

function mult(arr) {
    for (let i = 0; i < arr.length; i++) {
        let res = 1;
        res = res * arr[i];
    }
    console.log(res);
}
function getResult(arr, callback) {
    callback(arr);
}

// задание 2
const users = [
    { name: 'Jon', age: 22 },
    { name: 'Richard', age: 18 },
    { name: 'Anton', age: 32 },
    { name: 'Lida', age: 23 },
    { name: 'Bob', age: 44 }
];
function compareUser(a, b) {
    if (a.age > b.age) return 1;
    if (a.age < b.age) return -1;
    return 0;
};
users.sort(compareUser);
console.log(users);

// задание 3
const a = [1, '4', 9, 'two'];
const b = [1, '4', false, 9, 'two'];

const reversArr = (array) => {
    let arr = array.reverse();
    console.log(arr);
    return arr;
}

const toNumberArr = (array) => {
    let arr = array.map(el => +el);
    arr = arr.filter(el => !Number.isNaN(el));
    console.log(arr);
    return arr;
}

function each(arr, callback) {
    callback(arr);
}

// задание 4
const timer = (deadline) => {
    let time = deadline;
    const interval = setInterval(() => {
        time -= 3;
        console.log(new Date);
    }, 3000);

    setTimeout(() => {
        clearInterval(interval);
        console.log('30 секунд прошло')
    }, deadline * 1000)
};

const deadline = 30;
timer(deadline);

// задание 5
function calling() {
    console.log('Звоню!')
};

function beeps(callback) {
    setTimeout(() => {
        console.log('Идут гудки...')
        callback();
    }, 1000);
}

function talk() {
    console.log('Разговор')
}

calling();
beeps(talk);