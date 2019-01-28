// === Closure Counter ===
// * Все переменные и параметры функций являются свойствами объекта переменных LexicalEnvironment. Каждый запуск функции создает новый такой объект. На верхнем уровне им является «глобальный объект», в браузере – window.
// ** При создании функция получает системное свойство [[Scope]], которое ссылается на LexicalEnvironment, в котором она была создана.
// ***При вызове функции, куда бы её ни передали в коде – она будет искать переменные сначала у себя, а затем во внешних LexicalEnvironment с места своего «рождения».
function makeCounter() {
    // при каждом запуске makeCounter создаётся свой объект переменных LexicalEnvironment, со своим свойством currentCount
    var currentCount = 1;

    return function () { // При создании эта функция получает внутреннее свойство [[Scope]] со ссылкой на текущий LexicalEnvironment
        return currentCount++;
    };
}

// Итоговым значением, записанным в переменную counter, является функция:
var counter0 = makeCounter(); // создаётся LexicalEnvironment для переменных текущего вызова

// каждый вызов увеличивает счётчик и возвращает результат
console.log(counter0()); // 1
console.log(counter0()); // 2
console.log(counter0()); // 3
console.log(counter0); // 3

// Возвращённая из makeCounter() функция помнит через [[Scope]] о том, в каком окружении была создана и к какому LexicalEnvironment обращаиться
var counter20 = makeCounter(); // создать другой счётчик, он будет независим от первого
console.log(counter20()); // 1

// =====================================================

console.log('-------------------------');

// === One more example ===
var test = 42;

// когда функция "а" была содана, она получила [[scope]] = Windows; и значит все переменные она будет искать в Windows. 
function a() {
    console.log(test);
}

function b() {
    var test = 13;
    a();
}

b(); // в этой строке мы запускаем функцию b, которая запускает функцию a.

// =====================================================

console.log('-------------------------');

// === Example from comment section ===

// function makeCounter() {
//     var currentCount = 1;

//     return function () {
//         return currentCount++;
//     };
// }
// console.log(makeCounter()());
// console.log(makeCounter()());
// console.log(makeCounter()());

// Если вызывать функцию по ее имени - то будет просто исполняться ее код, а после исполнения все данные будут удаляться.
// Чтобы currentCount сохранялся между вызовами, нужно эту функцию присвоить в переменную:

// var a = makeCounter();

// Чему будет равна переменная "a"? Может показаться, что она равна всему коду функции makeCounter(), но на самом деле она равна результату ее выполнения. А результатом функции makeCounter() будет функция:

// function() {
//  return currentCount++;
// };

// соответственно, 
// a = function() {
//  return currentCount++;
// };

// На внутреннюю функцию (которая внутри makeCounter()) есть ссылка из внешней переменной (в нашем случае это переменная "a"). А мы знаем, что раз такая ссылка имеется, то объект переменных функции будет сохраняться, пока ссылка существует. И будет сохраняться лексическое окружение этой функции, вместе с переменной currentCount.

// =====================================================

console.log('-------------------------');

// === Object Counter ===
// Использование функции как объекта
function makeCounter() {
    var currentCount = 1;

    // возвращаемся к функции
    function counter() {
        return currentCount++;
    }

    // ...и добавляем ей методы!
    counter.set = function (value) {
        currentCount = value;
    };

    counter.reset = function () {
        currentCount = 1;
    };

    return counter;
}

var counter = makeCounter();

console.log(counter()); // 1
console.log(counter()); // 2
counter.set(5);
console.log(counter()); // 5

// ====================================================

console.log('-------------------------');

// === Задача ===
// army[0](); // стрелок выводит 10, а должен 0
// army[5](); // стрелок выводит 10...
// .. все стрелки выводят 10 вместо 0,1,2...9
// Почему все стрелки́ выводят одно и то же? Поправьте код, чтобы стрелки работали как задумано. Предложите несколько вариантов исправления.
function makeArmy() {

    var shooters = [];

    for (var i = 0; i < 10; i++) {
        var shooter = function (i) { // функция-стрелок
            return function () {
                console.log(i)
            }
        }(i);
        shooters.push(shooter);
    }

    return shooters;
}

var army = makeArmy();

army[0](); // стрелок выводит 10, а должен 0
army[1](); // стрелок выводит 10, а должен 0
army[2](); // стрелок выводит 10, а должен 0
army[3](); // стрелок выводит 10...
army[8](); // стрелок выводит 10...
// .. все стрелки выводят 10 вместо 0,1,2...9
console.log(army)
console.log(army[8])
console.log(army[8]())

// ====================================================

console.log('-------------------------');

// === Пример модуля через замыкание === 
var lodash = function () {

    var version;
    function assignDefaults() { return 'c'} 

    return {
        defaults: function () {return 'b'}
    }

}();

// или 

;(function () {

    // lodash - основная функция для библиотеки
    function lodash(value) {
        // ...
    }

    // вспомогательная переменная
    var version = '2.4.1';
    // ... другие вспомогательные переменные и функции

    // код функции size, пока что доступен только внутри
    function size(collection) {
        return Object.keys(collection).length;
    }

    // присвоим в lodash size и другие функции, которые нужно вынести из модуля
    lodash.size = size
    // lodash.defaults = ...
    // lodash.cloneDeep = ...

    // "экспортировать" lodash наружу из модуля
    window._ = lodash; // в оригинальном коде здесь сложнее, но смысл тот же

}());