// задание 1
const numbs = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < numbs.length; i++) {
    if (numbs[i] == 10) {
        console.log(numbs[i]);
        break;
    };
    console.log(numbs[i]);
}

// задание 2
const numbs2 = [1, 5, 4, 10, 0, 3];
console.log(numbs2.indexOf(4));

// задание 3
let numbs3 = [1, 3, 5, 10, 20];
numbs3 = numbs3.join(' ');
console.log(numbs3);

// задание 4
const hell = [];
for (let i = 0; i <= 2; i++) {
    hell.push([]);
    for (let j = 0; j <= 2; j++) {
        hell[i][j] = 1;
    }
}
console.log(hell);

// задание 5
const numbs4 = [1, 1, 1];
for (let i = 0; i < 3; i++) {
    numbs4.push(2);
}
console.log(numbs4);

// задание 6
let arr = [9, 8, 7, 'a', 6, 5];
arr = arr.sort();
console.log(arr);
arr.pop();
console.log(arr);

// задание 7
let numbs5 = [9, 8, 7, 6, 5];
let a = Number(prompt('Введите число от 1 до 10'));
let search = numbs5.includes(a);
console.log(search);

// задание 8
let b = 'abcdef';
b = b.split('');
b.reverse();
b = b.join('');
console.log(b);

// задание 9
let d = [[1, 2, 3,], [4, 5, 6]];
let e = d[0];
let f = d[1];
const all = [...e, ...f];
console.log(all);

// задание 10
const numbs6 = [4, 7, 3, 5, 8, 1, 4, 2];
for (let i = 0; i < 7; i++) {
    let sum = numbs6[i] + numbs6[i + 1]
    console.log(sum);
}

// задание 11
let numbs7 = [2, 6, 4, 9, 3];
let cuadros = numbs7.map(item => item ** 2);
console.log(cuadros);

// задание 12
let strgs = ['cat', 'horse', 'bird', 'fish', 'plant'];
let lengths = strgs.map(item => item.length);
console.log(lengths);

// задание 13
let numbs8 = [4, 7, 0, -3, 5, -9, 1];
let newNumbs = [];
for (let i = 0; i < 7; i++) {
    if (numbs8[i] < 0) {
        newNumbs.push(numbs8[i]);
    }
}
console.log(newNumbs);

// задание 14
const arr1 = [];
const arr2 = [];
for (let i = 0; i < 10; i++) {
    arr1[i] = Math.floor(Math.random() * 10) + 1;
    if (arr1[i] % 2 === 0) {
        arr2.push(arr1[i]);
    }
}
console.log(arr1);
console.log(arr2);

// задание 15
const arr3 = [];
for (let i = 0; i < 6; i++) {
    arr3[i] = Math.floor(Math.random() * 10) + 1;
}
console.log(arr3);
let average = 0;
for (let i = 0; i < 6; i++) {
    average = average + arr3[i];
}
average = average / arr3.length
console.log(`среднее арифметическое массива ${average}`);