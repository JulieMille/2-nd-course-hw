let aa = 10;
alert(aa);
aa = 20;
alert(aa);

let year = 2007;
alert(year);

let theName = 'Брендан Эйх';
alert(theName);

let ten = 10;
let two = 2;
alert(ten + two);
alert(ten - two);
alert(ten * two);
alert(ten / two);

let result = 2 ** 5;
alert(result);

let a = 9;
let b = 2;
let newResult = a % b;
alert(newResult);

let num = 1;
num = num + 5;
num = num - 3;
num = num * 7;
num = num / 3;
num = num++;
num = num--;
alert(num);

let yourAge = Number(prompt('Сколько вам лет?'));
alert(yourAge);

const user = {
    name: 'Julie',
    age: 33,
    isAdmin: 1
}
user['city of residence'] = 'Moscow';
user.age = 23;
delete user['city of residence'];

let info = prompt('Что вы хотите узнать о пользователе?');
alert(user[info]);

let yourName = prompt('Как вас зовут?');
alert(`Привет, ${yourName} !`);