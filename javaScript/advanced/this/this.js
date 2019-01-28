// this
// Используется ля доступа к текущему объекту. Значением this является объект перед «точкой», в контексте которого вызван метод.
// Значение this называется контекстом вызова и будет определено в момент вызова функции.
// Через this метод может не только обратиться к любому свойству объекта, но и передать куда-то ссылку на сам объект целиком:

var user = {
    name: 'Василий',
    sayHi: function () {
        showName(this); // передать текущий объект в showName
    }
};
function showName(namedObj) {alert(namedObj.name);}
user.sayHi(); // Василий


// Example from Udacity 
var carlike = function(obj, loc) {
    obj.loc = loc;
    obj.move = move;
    return obj;
};

var move = function() {this.loc++;};
// Here we want to call move with "dot access"
var amy = carlike({}, 1);
amy.move();
var ben = carlike({}, 9);
ben.move();