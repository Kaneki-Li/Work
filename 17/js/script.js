"use strict";

// let a = 5,
//     b = a;

// b = b + 5; // Изменяет значение

// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj; // Передает ссылку

// copy.a = 10; // Модернизирует объект

// console.log(copy);
// console.log(obj);

function copy(mainObj) { // Создаём функцию для копирования объекта ( 1-й способ )
    let objCopy = {};
    
    let key;
    for(key in mainObj){
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers); // Поверхностная копия, при вложенной структуре объекта будет ссылочная 

newNumbers.a = 10;
newNumbers.c.x = 10;

// console.log(numbers);
// console.log(newNumbers);

const add = {
    d: 17,
    e: 20
};

const clone = Object.assign({}, add); // Object.assign(куда поместить, что поместить) - используется для
                                      // помещения одного объекта в структуру другого
// Данный метод создаёт поверхностную копию ( 2-й способ )

clone.d = 20;

// console.log(add);
// console.log(clone);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice(); // 1-й способ для копирования массивов

newArray[1] = 'dhdrthdtrh'; 

console.log(oldArray);
console.log(newArray);

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook']; // ... - Spread оператор, через ... указывается что с чем надо соединить

console.log(internet);

function log(a, b, c){
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);

const array = ["a", "b"];

const newAarray = [...array]; // Копия массива

const q = {
    one: 1,
    two: 2,
    three: 3
};

const newObj = {...q}; // Копия объекта