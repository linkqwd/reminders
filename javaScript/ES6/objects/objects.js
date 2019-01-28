// === Getters === === Setters ===
const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    _numOfSensors: 15,
    get numOfSensors() {
        if (typeof this._numOfSensors === 'number') {
            return this._numOfSensors;
        } else {
            return 'Sensors are currently down.'
        }
    },
    set numOfSensors(num) {
        if (typeof num === 'number' && num >= 0) {
            this._numOfSensors = num;
        } else {
            console.log('Pass in a number that is greater than or equal to 0')
        }
    }
};

robot.numOfSensors = 100;
console.log(robot.numOfSensors);
// ========================

// === FACTORY FUNCTION ===
const monsterFactory = (name, age, energySource, catchPhrase) => {
    return {
        // Here can be use destructuring shortcuts
        name: name, // name,
        age: age, // age,
        energySource: energySource, // energySource,
        scare() {
            console.log(catchPhrase);
        }
    }
};

const ghost = monsterFactory('Ghouly', 251, 'ectoplasm', 'BOO!');
console.log(ghost.scare()); // 'BOO!'
// ========================

// === Object.keys() ===
// The Object.keys() method returns an array of a given object's own property names, in the same order as we get with a normal loop.
const object11 = {
    a: 'somestring',
    b: 42,
    c: false
};

console.log(Object.keys(object11)); // expected output: Array ["a", "b", "c"]
// ========================

// === Object.assign() ===
// Method is used to copy the values of all enumerable own properties from one or more source objects to a target object. It will return the target object.
const object12 = {a: 1, b: 2, c: 3};
const object22 = Object.assign({ c: 4, d: 5 }, object12);
console.log(object22);  // expected output: {c: 3, d: 5, a: 1, b: 2}
// ========================

// === Object.entries() ===
// The Object.entries() method returns an array of a given object's own enumerable property [key, value] pairs, in the same order as that provided by a for...in loop (the difference being that a for-in loop enumerates properties in the prototype chain as well) . The order of the array returned by Object.entries() does not depend on how an object is defined. If there is a need for certain ordering then the array needs to be sorted first like Object.entries(obj).sort((a, b) => a[0] - b[0]);.
const object13 = { foo: 'bar', baz: 42 };
console.log(Object.entries(object13)[1]); // expected output: Array ["baz", 42]

const object23 = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.entries(object23)[2]); // expected output: Array ["2", "c"]

const result = Object.entries(object23).sort((a, b) => a - b);
console.log(Object.entries(result)[1]); // expected output: Array ["1", Array ["1", "b"]]
// ========================