// Ошибка вычислений дает NaN.
// Арифметические и математические функции преобразуют строку в точности в число, игнорируя начальные и конечные пробелы.
// Функции parseInt/parseFloat делают числа из строк, которые начинаются с числа.
// Есть четыре способа округления: Math.floor, Math.round, Math.ceil и битовый оператор. Для округления до нужного знака используйте +n.toFixed(p) или трюк с умножением и делением на 10p.
// Дробные числа дают ошибку вычислений. При необходимости ее можно отсечь округлением до нужного знака.
// Случайные числа от 0 до 1 генерируются с помощью Math.random(), остальные – преобразованием из них.


// Math Object
Math.round(74.5); // Округляет до ближайшего целого
Math.ceil(2.4); // Округляет вверх
Math.floor(2.8); // Округляет вниз
Math.sqrt(64); // Возвращает квадратный корень из x.
Math.abs(-3); // Возвращает абсолютное значение числа
Math.pow(8, 2); // Возводит число в степен, например Math.pow(2,10) = 1024. Работает в том числе с дробными и отрицательными степенями, например: Math.pow(4, -1/2) = 0.5.
Math.min(2, 33, 4, 1, 55, 6, 3, -2); // Возвращает наименьший из списка аргументов
Math.max(2, 33, 4, 1, 55, 6, 3, -2); // Возвращает наибольший из списка аргументов
Math.random();

function getRandomInt(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
}

//Округление 
12.745.toFixed(2) // 12.74, округляет до указанного знака после запятой, результат с ошибкой из-за неточности вычислений
console.log( 6.35.toFixed(1) ); // 6.3
console.log( Math.round(6.35 * 10) / 10 ); // 6.4, правильно

// Перевести число в другую систему счисления
var n = 1234567890;
console.log(n.toString(36)); // kf12oi

// Три специальных числовых значения: NaN, Infinity и -Infinity.
console.log(isFinite(1)); // true
console.log(isFinite(Infinity)); // false
console.log(isFinite(NaN)); // false

var a = 0 / 0; // output: NaN
console.log(isNaN(a)); // true
console.log(isNaN("12")); // false, строка преобразовалась к обычному числу 12

// Преобразования
console.log(+"  -12"); // -12
console.log(+" \n34  \n"); // 34, перевод строки \n является пробельным символом
console.log(+""); // 0, пустая строка становится нулем
console.log(+"1 2"); // NaN, пробел посередине числа - ошибка

console.log(parseInt('12px')) // 12, ошибка на символе 'p'
console.log(parseFloat('12.3.4')) // 12.3, ошибка на второй точке
console.log(parseInt('a123')); // NaN
console.log('binary: ' + parseInt('111', 2)); // output: 7, binary:111 = decimal:7 (returns only decimal)
// === Number.isInteger() ===
/// Метод определяет, является ли переданное значение целым числом.
console.log('isInteger: ' + Number.isInteger('value')); // false
console.log('isInteger: ' + Number.isInteger(2.1)); // false
console.log('isInteger: ' + Number.isInteger(1)); // true


// Проверка на число
// Функция isFinite(n) преобразует аргумент к числу и возвращает true, если это не Infinity/-Infinity/NaN.
// Правая часть отсеет заведомо не-числа, но оставит такие значения как true/false/null и пустую строку '', так как они корректно преобразуются в числа.
// Для их проверки нужна левая часть. Вызов parseFloat(true/false/null/'') вернёт NaN для этих значений.
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}









// Random numbers check
// function getRandomInt(min, max) {
//     return Math.floor(min + Math.random() * (max + 1 - min));
//   }

// var zero = 0;
// var one = 0;
// var two = 0;
// var three = 0;
// const today = new Date().getTime();

// for (let index = 0; index < 200000; index++) {
//     if (getRandomInt(1, 4) === 1) {
//         zero++
//     }
//     if (getRandomInt(1, 4) === 2) {
//         one++
//     }
//     if (getRandomInt(1, 4) === 3) {
//         two++
//     }
//     if (getRandomInt(1, 4) === 4) {
//         three++
//     }
// }
// console.log(today - new Date().getTime())

// console.log(zero)
// console.log(one)
// console.log(two)
// console.log(three)