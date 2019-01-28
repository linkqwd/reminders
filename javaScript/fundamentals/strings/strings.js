// Escaping
console.log('That\'s awesome, I can\'t wait')
console.log("I'm a JavaScript \"programmer\" ") // I'm a JavaScript "programmer"

// Перевод строки
console.log('Привет\nМир') // выведет "Мир" на новой строке

// строка = число
console.log('a'.charCodeAt(0)) // 65
console.log(String.fromCharCode(65)); // a

// Число привести к строку
var num = 14356.22
typeof `${num}`  // output: string
typeof String(num) // output: string
num+'' // output: string
 
// indexOf, аналогичный метод lastIndexOf, который ищет с конца строки.
var string = "Widget with id"
console.log(string.indexOf("id")) // 1, т.к. "id" найден, начиная с позиции 1
console.log(string.indexOf("widget")) // -1, не найдено, так как поиск учитывает регистр
console.log(string.indexOf("id", 2)) // 12, поиск начат с позиции 2
// вызов ~n эквивалентен выражению -(n+1), ( ~-1 ) // -(-1+1) = 0
// читается как: "если найдено"
~string.indexOf('gest') ? console.log('yes') : console.log('noo')

// Взятие подстроки (не изменяют исходную строку)
// SLICE(start [, end])
console.log("stringify".slice(2)) // ringify, символы с позиции 2  _до конца_
console.log("testme".slice(-2)) // "me", Отрицательные значения отсчитываются от конца строки
console.log("testme".slice(1, -1)) // "estm", от 1 позиции до первой с конца.
// SUBSTR(start [, length])
console.log("stringify".substr(2, 4)) // ring, со 2-й позиции 4 символа
// SUBSTRING(start [, end]) 
console.log("stringify".substring(0, 1)) // "s", символы с позиции 0 по 1 не включая 1.
console.log("testme".substring(-2)) // "testme", -2 становится 0
console.log("testme".substring(4, -1)) // аргументы меняются местами

// SPLIT // возвращает массив из строки // воторой аргумент - ограничение элементов
console.log('Маша, Петя, Марина, Василий'.split(',', 3)) // ["Маша", " Петя", " Марина"]
console.log('Маша, Петя, Марина, Василий'.split('')) // ["М", "а", "ш", "а", "," ...]

// JOIN // склеивает массив в строку
console.log(['Маша', 'Петя', 'Марина', 'Василий'].join(';')) // Маша;Петя;Марина;Василий

// Другие методы
console.log(' Hello world! '.trim()) // удаляет пробелы с начала и конца строки
console.log('+38063 585 15 27'.charAt('2')) // 8, получить индекс подстроки
console.log('+38063 585 15 27'.charAt(0))  // + , получить подстроку по индексу
console.log('concat:   '.concat(' 01 ', '12')) // сохраняет количество пробелов
console.log('Brad lol'.replace('Brad', 'Jack')) // замена части строки
console.log('aFoo'.includes('foo')) // false, не содержится

// --------------------------- Functions ---------------------------------//

// Функция возвращающая строку с большой буквы
function ucFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log('---------Заменить разделитель на camelCase-------------')
function camelize(str) {
    let array = str.split('-');

    for (let i = 1; i < array.length; i++) {
        array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
    }

    return array.join('')
}
console.log(camelize("list-style-image")) // 'listStyleImage';