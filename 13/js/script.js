const str = 'tESt';

console.log(str[2] = 'd');

console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str);

const fruit = "Some fruit";
console.log(fruit.indexOf("q")); // indexOf(аргумент) - Возвращает индекс под которым стоит аргумент
// Выведет -1 - это значит что такого нету в строке


const logg = "Hello world";
console.log(logg.slice(6)); // slice(нач., кон.) - Возвращает часть символов используя аргументы
// Если аргумент один, то возвращает от начально заданной точки до конца строки
// Второй аргумент не включается в вывод
// Поддерживает оттрицательные значения аргумента

console.log(logg.substring(6, 11)); // Тоже самое что и slice()
// Не поддерживает отрицательные аргументы


console.log(logg.substr(6, 5)); // Тоже самое что и slice(), но вторым аргументом указывается сколько надо срезать символов



const num = 12.2;
console.log(Math.round(num)); // Округление

const test = "FDD";
console.log(parseInt(test, 10)); // Перевод СС 
console.log(parseFloat(test)); // Возвращает тоже самое, но с плавающей точкой


