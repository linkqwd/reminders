class Animal {

    // JavaScript will invoke the constructor() method every time we create a new instance of our Dog class.
    // Inside of the constructor() method, we use the this keyword. In the context of a class, this refers to an instance of that class. In the Dog class, we use this to set the value of the Dog instance's name property to the name argument.
    constructor(name) {
        this._name = name;
        this._behavior = 0;
    }

    // Cannot call static methods (.generateName()) on an instance (Cat)
    static generateName() {
        const names = ['Angel', 'Spike', 'Buffy', 'Willow', 'Tara'];
        const randomNumber = Math.floor(Math.random() * 5);
        return names[randomNumber];
    }

    get name() {
        return this._name;
    }

    get behavior() {
        return this._behavior;
    }

    incrementBehavior() {
        this._behavior++;
    }
}

// Extends keyword makes the methods of the animal class available inside the cat class.
class Cat extends Animal {
    constructor(name, usesLitter) {
        // The super keyword calls the constructor of the parent class. In this case, super(name) passes the name argument of the Cat class to the constructor of the Animal class. When the Animal constructor runs, it sets this._name = name; for new Cat instances.
        // always call the super method before you can use the this keyword — if you do not, JavaScript will throw a reference error.
        super(name);
        this._usesLitter = usesLitter;
    }

    get usesLitter() {
        return this._usesLitter;
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }
}

// The new keyword calls the constructor(), runs the code inside of it, and then returns the new instance.
const bryceCat = new Cat('Bryce', false);
const halley = new Dog('Halley');

console.log(bryceCat.name);
console.log(bryceCat.usesLitter);
console.log(halley.name);

console.log(Animal.generateName());



// === USE CASE FOR STATIC METHODS ====
class Bird {
    constructor({ color = "red" } = {}) {
        this.color = color;
    }
    static compareBirds(first, second) {
        return (first.color === second.color);
    }
}

let redBird = new Bird;
let blueBird = new Bird({ "color": "blue" });

console.log(Bird.compareBirds(redBird, blueBird)); // false
console.log(Bird.compareBirds(redBird, redBird)); // true