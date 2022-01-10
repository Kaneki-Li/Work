"use strict";

const arr = [2, 13, 26, 8, 10]; //
                                //
arr.sort(compareNum);           //
console.log(arr);               // ЗАПОМНИТЬ
                                // СОРТИРОВКА ЧИСЕЛ В МАССИВЕ
function compareNum(a, b){      //
    return a-b;                 //
}                               //


// arr[99] = 0;
// console.log(arr.length);

arr.forEach(function(item, i, arr) { 
    console.log(`${i}: ${item} внутри массива ${arr}`);                
});
// item - каждый элемент массива(аргумент)
// i - номер по порядку
// arr - массив




// КОНЕЦ МАССИВА
// arr.pop(); // Удаляет последний элемент массива
// arr.push(10); // Добавляет в конец массива элемент 

// console.log(arr);

// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

for (let value of arr) {
    console.log(value);
}

const str = prompt("", "");
const products = str.split(', '); // Превращает строку в массив с разделением по аргументу
products.sort(); // Сортировка массива ( В строке по алфавитному порядку, а с числами по первому символу)

console.log(products.join('; ')); // Превращает массив в строку с разделением по аргументу

