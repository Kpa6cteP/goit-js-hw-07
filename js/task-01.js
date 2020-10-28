// В HTML есть список категорий ul#categories.

// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories,
// то есть элементов li.item. Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и
//  выведет в консоль текст заголовка элемента (тега h2) и количество
//  элементов в категории (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

const liRefs = document.querySelectorAll('li.item');
console.log(`В списке ${liRefs.length} категории.`);

const h2Refs = document.querySelectorAll('h2');

h2Refs.forEach(h2Ref => {
  console.log(`Категория: ${h2Ref.textContent}`)
  console.log(`Количество элементов: ${h2Ref.nextElementSibling.children.length}`);
})


// const h2Refs = document.querySelectorAll('li.item > h2');
// const liItems = document.querySelectorAll('li.item > ul');
// for (let i = 0; h2Refs.length > i; i++) {
//   console.log(`Категория: ${h2Refs[i].textContent}`);
//   console.log(
//     `Количество элементов: ${liItems[i].children.length}`
//   );
// }