"use strict"
const contactPhones = document.querySelectorAll('.b-header-phones__part .notranslate');

contactPhones.forEach(element => replaceNumber(element));

function replaceNumber(number) {
    const phoneNumber = number.textContent;
 
    // Получаем индексы скобок
    const firstBracketIndex = phoneNumber.indexOf('('),
        lastBracketIndex = phoneNumber.indexOf(')') + 1;

    // Проверка, если скобок в номере нет - заканчиваем итерацию
    if (firstBracketIndex === -1 || lastBracketIndex === 0) return;

    // Создаем строку в которой находятся код номера вместе с скобками
    const codePart = phoneNumber.slice(firstBracketIndex, lastBracketIndex)

    // Строки с частью номера до скобок и после скобок
    const firstPhonePart = phoneNumber.slice(0, firstBracketIndex)
    const secondPhonePart = phoneNumber.slice(lastBracketIndex)

    // Создаем Ноду (span) с нужным классом 
    const code = document.createElement('span');
    code.className = 'b-header-phones__code'
    code.appendChild(document.createTextNode(codePart));

    // Склеиваем номер в новую Ноду 
    const styledPhoneNumber = document.createElement('div');
    styledPhoneNumber.className = 'notranslate'
    styledPhoneNumber.appendChild(document.createTextNode(firstPhonePart));
    styledPhoneNumber.appendChild(code);
    styledPhoneNumber.appendChild(document.createTextNode(secondPhonePart));

    number.parentElement.replaceChild(styledPhoneNumber, number);
}