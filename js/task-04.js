// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика
// на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса


const btnDecrement = document.querySelector('button[data-action=decrement]');
const btnIncrement = document.querySelector('button[data-action=increment]');

const counterValue = document.querySelector('#value');
let counter = 0;

function decrement() {
counter -= 1;
counterValue.textContent = counter;
}

function increment() {
counter += 1;
counterValue.textContent = counter;
}

btnDecrement.addEventListener('click', decrement);
btnIncrement.addEventListener('click', increment);