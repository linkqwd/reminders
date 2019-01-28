// Mixins
const moewMixin = superclass => class extends superclass {
    moew(phrase = "Moew") {
        return phrase;
    }
};

const sayAboutMixin = superclass => class extends superclass {
    toString() {
        return Object.entries(this)
            .map(value => `<strong>${value[0]}:</strong> ${value[1]}`)
            .join('; ')
    }
};

const canBeFriendly = superclass => class extends superclass {
    setFriendship(friends) {
        this.friends = [...friends]
    }
}

// Classes
class Inhabitant {
    constructor(props) {
        this.name = props.name;
        this.species = this.constructor.name;
        this.gender = props.gender;
    }
}

const Social = _.flowRight(sayAboutMixin, canBeFriendly)(Inhabitant);
const SocialMoewer = _.flowRight(moewMixin)(Social);

class Human extends Social {
    constructor(props) {
        super(props)
        this.arms = 2;
        this.legs = 2;
        this.sound = props.sound;
    }
}

class Cat extends SocialMoewer {
    constructor(props) {
        super(props)
        this.paws = 4;
        this.sound = this.moew();
    }
}

class Dog extends Social {
    constructor(props) {
        super(props)
        this.paws = 4;
        this.sound = 'Bark'
    }
}

class CatWoman extends SocialMoewer {
    constructor(props) {
        super(props);
        this.arms = 2;
        this.legs = 2;
        this.gender = 'female';
        this.sound = this.moew() // props.sound
    };
};

// Class instances
const man = new Human({
    name: 'Viktor',
    gender: 'male',
    sound: 'How your doin\'',
});

const woman = new Human({
    name: 'Alisa',
    gender: 'female',
    sound: 'Hi guys',
});

const houston = new Cat({
    name: 'Houston',
    gender: 'male',
});

const rambler = new Dog({
    name: 'Rambler',
    gender: 'male',
});

const catWomen = new CatWoman({
    name: 'Selina'//,
    //sound: new Cat({}).sound
});

man.setFriendship([rambler.name, woman.name]);

print(man);
print(woman);
print(houston);
print(rambler);
print(catWomen);