// const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', "");


// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };


// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?',''),
//           b = prompt('На сколько вы оцените его?', "");
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     }else{
//         console.log('error');
//         i--;
//     }
    
// }




// if (personalMovieDB.count < 10){
//     alert("Просмотрено довольно мало фильмов");
// }else if(personalMovieDB.count > 10 && personalMovieDB.count < 30){
//     alert("Вы классический зритель");
// }else if(personalMovieDB.count > 30){
//     alert('Вы киноман!');
// }else{
//     alert('Произошла ошибка');
// }

// console.log(personalMovieDB);













// Выведите столбец четных чисел в промежутке от 0 до 100.

// var i = 0;
// var result = 0;
// while(i < 50){
//     result+=2;
//     document.write(result + "<br/>");
//     i++;
// }




// Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти
// элементы на экран.

// var arr = [1,2,3,4,5];
// for(var i=0; arr.length > i; i++){
//     document.write(arr[i] + '<br>');
// }




// Дан массив с элементами 2, 5, 9, 15, 0, 4. С помощью цикла for и
// оператора if выведите на экран столбец тех элементов массива, которые
// больше 3-х, но меньше 10.

// var arr = [2, 5, 9, 15, 0, 4];
// for(var i =0; arr.length > i; i++){
//     if(arr[i] > 3 && arr[i] < 10){
//         document.write(arr[i] + '<br>');
//     }
// }




// Дан массив с элементами 1, 2, 5, 9, 4, 13, 4, 10. С помощью цикла for и
// оператора if проверьте есть ли в массиве элемент со значением, равным 4. Если есть
// выведите на экран 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо

// var arr = [1, 2, 5, 9, 4, 13, 4, 10];

// for(var i = 0; arr.length > i; i++){
//     if( arr[i] == 4 ){
//         alert('Есть');
//         break;
//     }
// }




// Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9. С помощью цикла for создайте строку '-
// 1-2-3-4-5-6-7-8-9-'.

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for(var i = 0; arr.length > i; i++){
//     document.write(arr[i]+'-')
// }




// Составьте массив дней недели. С помощью цикла for выведите все дни недели, а
// выходные дни выведите жирным.

// var arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];

// for(var i = 0; arr.length > i; i++){
//     if( arr[i] == 'сб' || arr[i] == 'вс'){
//         document.write('<b>' + arr[i] + '</b>' + '<br>');
//     }else{
//         document.write(arr[i] + '<br>');
//     }
// }




// Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет
// меньше 50. Какое число получится? Посчитайте количество итераций, необходимых
// для этого (итерация - это проход цикла), и запишите его в переменную num.




