var Inhabitant = {
    inhabitantInit: function (name, gender, friends) {
        this.name = name;
        this.gender = gender;
        this.friends = friends;
    },
    inhabitantInfo: function () {
        // just in sake of pretty output
        return JSON.stringify(this).split('').map(function (el) {
            return el === '"' || el === '[' || el === ']' ? '' : el === ',' ? ';  ' : el
        }).join('').slice(1, -1);
    }
}

var Human = {
    humanInit: function (legs, arms) {
        this.specie = 'Human';
        this.legs = legs || 2;
        this.arms = arms || 2;
    }
}

var Person = {
    personInit: function (message) {
        this.greeting = message || 'My name is ' + this.name
    }
}

var Animal = {
    animalInit: function (paws) {
        this.specie = 'Animal';
        this.paws = paws || 4;
    }
}

var Cat = {
    catInit: function (greeting) {
        this.family = 'Cats';
        this.greeting = greeting || 'Moew moewing';
    }
}

var Dog = {
    dogInit: function (greeting) {
        this.family = 'Dogs';
        this.greeting = greeting || 'Bark-bark';
    }
}

var CatWomen = {
    catWomentInit: function (message) {
        Cat.catInit();
        this.greeting = message || Cat.greeting;
    }
}

Human.__proto__ = Inhabitant;
Person.__proto__ = Human;
CatWomen.__proto__ = Human;
Animal.__proto__ = Inhabitant;
Cat.__proto__ = Animal;
Dog.__proto__ = Animal;

var pachacutec = Object.create(Person);
pachacutec.inhabitantInit('Pachacutec', 'male', ['whitney', 'rambler']);
pachacutec.humanInit(22);
pachacutec.personInit('<strong>I\'m Pachacútec the ruler of the great Inca empire</strong>');

var whitney = Object.create(Person);
whitney.inhabitantInit('Whitney', 'female', 'Houston');
whitney.humanInit();
whitney.personInit();

var houston = Object.create(Cat);
houston.inhabitantInit('Houston', 'Male', 'Whitney');
houston.animalInit();
houston.catInit();

var rambler = Object.create(Dog);
rambler.inhabitantInit('Rambler',  'Male');
rambler.animalInit();
rambler.dogInit();

var womenCat = Object.create(CatWomen);
womenCat.inhabitantInit('<strong>Selina Kyle</strong>', 'female', 'Houston');
womenCat.humanInit();
womenCat.catWomentInit();

print(pachacutec.inhabitantInfo());
print(whitney.inhabitantInfo());
print(houston.inhabitantInfo());
print(rambler.inhabitantInfo());
print(womenCat.inhabitantInfo());