// Напиши скрипт, который бы при потере фокуса на инпуте,
// проверял его содержимое на правильное количество символов.

// Сколько символов должно быть в инпуте, указывается в его
// атрибуте data-length.
// Если введено подходящее количество, то border инпута
// становится зеленым, если неправильное - красным.

const input = document.querySelector("#validation-input");
input.addEventListener("blur", inputValidation);

function inputValidation(event) {
  if (event.currentTarget.value.length === 6) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}