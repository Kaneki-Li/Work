'use strict';

const box = document.getElementById("box");

console.log(box);

const btns = document.getElementsByTagName("button"); // Возвращает HTML коллекцию, т.е. псевдомассив

console.log(btns[0]);

const circles = document.getElementsByClassName('circle'); // Возвращает HTML коллекцию, т.е. псевдомассив
console.log(circles);

const hearts = document.querySelectorAll('.heart');

hearts.forEach(item => {
    console.log(item);
});

const oneHeart = document.querySelector("div");
console.log(oneHeart);