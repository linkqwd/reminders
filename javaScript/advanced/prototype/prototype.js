// === Object.create ===
// Inhertits prototype chain form provided object
var gold = { color: 'gold', show: function () { console.log(this.color) } }
var rose = Object.create(gold);
rose.color = 'red';
gold.show();
rose.show();

// ================================

// Example from Udacity 
var Car = function (loc) {
    var obj = Object.create(Car.prototype);
    obj.loc = loc;
    return obj;
};
Car.prototype.move = function () {
    this.loc++;
}
// Here we want to call move with "dot access"
var amy = Car(1);
amy.move();
var ben = Car(9);
ben.move();

// SAME AS:
var Car2 = function (loc) {
    this.loc = loc;
};
Car2.prototype.move = function () {
    this.loc++;
}
// Here we want to call move with "dot access"
var amy2 = new Car2(1);
amy2.move();
var ben2 = new Car2(9);
ben2.move();

// ================================

var Car3 = function (loc) {
    this.loc = loc;
};
Car3.prototype.move = function () {
    this.loc++;
};

var Van = function (loc) {
    Car3.call(this, loc);
};

Van.prototype = Object.create(Car3.prototype);
Van.prototype.constructor = Van;

Van.prototype.grab = function () {
    console.log(this + ' ! ! ');
};

var kek = new Car3(3);
kek.move();

var lol = new Van(8);
lol.move();
lol.grab();

console.log(kek)
console.log(lol)