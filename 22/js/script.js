'use strict';

const box = document.getElementById('box'),
            btns = document.getElementsByTagName("button"),
            circles = document.getElementsByClassName('circle'),
            wrapper = document.querySelector(".wrapper"),
            hearts = wrapper.querySelectorAll('.heart'),
            oneHeart = wrapper .querySelector('.heart');

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText = `background-color: blue; width: 500px`;

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++){
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item =>{
    item.style.backgroundColor = 'blue';
});

const div = document.createElement("div"); // Существует только в js файле
// const text = document.createTextNode('Hello world!');

div.classList.add('black');

wrapper.append(div); // В конец
// wrapper.appendChild(div); // В конец ( старый способ )

// wrapper.prepend(div); // В начало


// hearts[0].before(div); // до элемента
// hearts[0].after(div); // после элемента

// wrapper.insertBefore(div, hearts[1]); // Поставить 1-е перед 2-м ( старый способ )

// circles[0].remove(); // Удалить из документа
// wrapper.removeChild(hearts[1]); // Удалить из документа (старый способ, через родителя)

// hearts[0].replaceWith(circles[1]); // Заменить другим
// wrapper.replaceChild(circles[0], hearts[0]); // Поставить 1-м что, 2-м вместо чего (старый способ)

div.innerHTML = '<h1>Hello world</h1>'; // Добавить HTML структуру

// div.textContent = 'Hello'; // Работает только с текстом

div.insertAdjacentElement('afterend', "<h2>Hello</h2>");


