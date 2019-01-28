var Person = function (firstAndLast) {
    var fullName = firstAndLast;

    this.getFirstName = function () {
        return fullName.split(" ")[0];
    };

    this.getLastName = function () {
        return fullName.split(" ")[1];
    };

    this.getFullName = function () {
        return fullName;
    };

    this.setFirstName = function (name) {
        fullName = name + " " + fullName.split(" ")[1];
    };

    this.setLastName = function (name) {
        fullName = fullName.split(" ")[0] + " " + name;
    };

    this.setFullName = function (name) {
        fullName = name;
    };
};

var bob = new Person('Bob Ross');

console.log(Object.keys(bob).length) // should return 6.
console.log(bob instanceof Person) // should return true.
console.log(bob.firstName) // should return undefined.
console.log(bob.lastName) // should return undefined.
console.log(bob.getFirstName()) // should return "Bob".
console.log(bob.getLastName()) // should return "Ross".

console.log(bob.getFullName()) // should return "Bob Ross".
bob.setFirstName("Haskell")
console.log(bob.getFullName()) // should return "Haskell Ross" 
//after bob.setFirstName("Haskell").
bob.setLastName("Curry")
console.log(bob.getFullName()) // should return "Haskell Curry" 
//after bob.setLastName("Curry").
bob.setFullName("Haskell Curry")
console.log(bob.getFullName()) // should return "Haskell Curry" 
//after bob.setFullName("Haskell Curry").
bob.setFullName("Haskell Curry")
console.log(bob.getFirstName()) // should return "Haskell" 
//after bob.setFullName("Haskell Curry").
bob.setFullName("Haskell Curry")
console.log(bob.getLastName()) // should return "Curry" 
//after bob.setFullName("Haskell Curry").