// objects like arrays, dates, and plain objects are compared by their reference (same location in memory)

// Returns if a value is an object
function isObject(value) {
  return value && typeof value === 'object' && value.constructor === Object;
}

const person = {
  firstName: 'Steve',
  lastName: 'Smith',
  age: 36,
  email: 'steve@aol.com',
  address: {
    city: 'Miami',
    state: 'FL'
  },
  getBirthYear: function () {
    return 2017 - this.age;
  }
}

// Удаление значения, свойство остается
delete person.age

// Get specific value
var a = 'address'
console.log(person.firstName);
console.log(person['lastName']);
console.log(person[a]);

// Проверить наличие свойства в объекте
console.log("email" in person); // true

// Перебор свойств  // выведет имя свойства и значения
for (var key in person) console.log("Ключ: " + key + " значение: " + person[key]);

// Object.keys() method returns an array of a given object's own property 
const object1 = { a: 'somestring', b: 42, c: false };
console.log(Object.keys(object1)); // output: Array ["a", "b", "c"]

// Object.getOwnPropertyNames() 
// возвращает массив со всеми свойствами (независимо от того, перечисляемые они или нет), найденными непосредственно в переданном объекте.
var arr = ['a', 'b', 'c'];
console.log(Object.getOwnPropertyNames(arr).sort()); // напечатает '0,1,2,length' !ИНОГДА включает в себя length



// ------------------------ Functions ----------------------- //
console.log('----- Функция removeClass -----')
obj = { className: 'my menu menu bsas' };

function removeClass(obj, cls) {
  if ('className' in obj) {
    result = obj.className.split(' ')

    for (let i = 0; i < result.length; i++) {
      if (result[i] === cls) result.splice(i, 1), i--;
    }

    obj.className = result.join(' ')
  }
}
removeClass(obj, 'menu'); console.log((obj.className)); // 'my'


console.log('----- Сравнение объектов -----')
function isEquivalent(a, b) {
  // Create arrays of property names
  var aProps = Object.getOwnPropertyNames(a);
  var bProps = Object.getOwnPropertyNames(b);

  // If number of properties is different,  // objects are not equivalent
  if (aProps.length != bProps.length) { return false; }

  for (var i = 0; i < aProps.length; i++) {
    var propName = aProps[i];
    // If values of same property are not equal, // objects are not equivalent
    if (a[propName] !== b[propName]) { return false; }
  }

  // If we made it this far, objects  // are considered equivalent
  return true;
}