// forEach 
// передается три параметра в callback(item, i, arr)
// для каждого элемента массива вызывает функцию callback.
// Второй аргумент forEach позволяет указать контекст this для callback
var gh = ["Яблоко", "Апельсин", "Груша"];
gh.forEach(function(item, i, gh) {
  console.log( i + ": " + item + " (массив:" + gh + ")" );
});

// === filter ===
// «arr.filter(callback(item, i, arr) )» 
// Создаёт новый массив, в который войдут только те элементы arr, для которых вызов callback(item, i, arr) возвратит true
// Не менчет исходный массив
var arra = [1, -1, 2, -2, 3];
var positiveArr = arra.filter(function(number) {
  return number > 0;
});
console.log( positiveArr ); // 1,2,3

// === map ===
// «arr.map(callback[, thisArg])» 
// создаёт новый массив, который будет состоять из результатов вызова callback(item, i, arr) для каждого элемента arr.
var names = ['HTML', 'CSS', 'JavaScript'];
var nameLengths = names.map(function(name) {
  return name.length;
});
console.log( nameLengths ); // 4,3,10  // получили массив с длинами

// every/some //  «arr.every(callback[, thisArg])» 
var arr = [1, -1, 2, -2, 3];
function isPositive(number) {
  return number > 0;
}
console.log( arr.every(isPositive) ); // false, не все положительные
console.log( arr.some(isPositive) ); // true, есть хоть одно положительное

// === SORT === 
// принимает функцию сортировки, НЕ изменяет исходный массив. Должна возвращать: 
// Положительное значение, если a > b, Отрицательное значение, если a < b,
var h = [1, 15, 2, 0];
compareNumeric = (a, b) => a - b
h.sort(compareNumeric); // сортирует элементы массива h в порядке: 1<>15, 15<>2, 2<>0
console.log(h);  // [0, 1, 2, 15]


// ====== find() ====== findIndex()
// arr.find(callback[, thisArg])
// возвращает значение первого найденного в массиве элемента, которое удовлетворяет условию переданному в callback функции
console.log('find: ' + [1,2,3].find(el => el === 3)) // 3
console.log('find: ' + [1,2,3].findIndex(el => el === 1)) // 0


// === reduce ===
// «arr.reduce(callback, initialValue)» // свести массив к одному значению
// Аргументы функции callback(stack, value, index, arr)
// stack - переменная внутри метода, в которую будут накапливаться данные.
  // Когда метод дойдет до конца массива - это значение будет возвращено как результат работы
// Если нет второго аргумента, то initialValue равно первому элементу массива, перебор начинается со второго.
function getSums(arr) {
  var reduceArr = [];
  arr.reduce(function(stack, value) {
    stack = stack + value;
    reduceArr.push(stack);
    return stack; // нужно вернуть значение, чтобы в след. итерации обновился stack
  }, 0)
  return reduceArr
} 
console.log(getSums([1,2,3,4,5])); // 1,3,6,10,15
console.log(getSums([-2,-1,0,1])); // -2,-3,-3,-2

function count(array){
  return array.reduce(function (stack, value) {
    // The comma separates the two expressions in the statement
    return stack[value] ? stack[value]++ : stack[value] = 1, stack; 
  }, {});
}