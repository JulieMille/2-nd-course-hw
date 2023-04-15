function getWords() {
    let fruit = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    fruit = fruit.sort(() => Math.random() - 0.5);
    alert(fruit);
    let answer1 = prompt('Какой элемент был первый?')
    let answer2 = prompt('Какой элемент был последний?')
    if (answer1.toLowerCase() == fruit[0].toLowerCase() && answer2.toLowerCase() == fruit[6].toLowerCase()) {
        alert('Поздравляю! Все правильно!');
    } else if (answer1.toLowerCase() == fruit[0].toLowerCase() || answer2.toLowerCase() == fruit[6].toLowerCase()) {
        alert('Вы были близки к победе!');
    }
    else {
        alert('Вы ответили неверно');
    }
}