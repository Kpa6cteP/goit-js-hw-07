// Напиши скрипт, который реагирует на изменение значения
// input#font-size-control (событие input) и изменяет инлайн-стиль
// span#text обновляя свойство font-size. В результате при перетаскивании
// ползунка будет меняться размер текста.

const inputRange = document.querySelector("input#font-size-control");
const spanText = document.querySelector("span#text");

inputRange.addEventListener("input", changeFontSize);

function changeFontSize() {
  let size = inputRange.value;
  spanText.style.fontSize = size + "px";
}
