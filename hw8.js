// задание 1
// const arr = [3, 4, 1, 9];
function sum(arr) {
    for (let i = 0; i < arr.length; i++) {
        let res = 0;
        res = res + arr[i];
    }
    console.log(res);
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

// // задание 2
// const users = [
//     { name: 'Jon', age: 22 },
//     { name: 'Richard', age: 18 },
//     { name: 'Anton', age: 32 },
//     { name: 'Lida', age: 23 },
//     { name: 'Bob', age: 44 }
// ];
// function compareUser(a, b) {
//     if (a.age > b.age) return 1;
//     if (a.age < b.age) return -1;
//     return 0;
// };
// users.sort(compareUser);
// console.log(users);

// задание 3