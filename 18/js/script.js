"use strict";

let str = "some";
let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

console.dir([1,2,3]);

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log('Hello');
    }
};

const john = Object.create(soldier); // Object.create(прототип) - Создаём объект Джон, которому наследуем прототип Солдат

// const john = {
//     health: 100
// };

// john.__proto__ = soldier; // Прототипом Джона является общий объект Солдат(Устаревший формат)

// Object.setPrototypeOf(john, soldier); // Object.setPrototypeOf(кому наследовать,от кого наследовать)-установить прототип на существующий объект


// console.log(john.armor);
john.sayHello(); // 