class Mammal {
    constructor(sound) {
        // sound is not a private member. 
        // The use of _ prefix is a convention to avoid messing with it
        this._sound = sound;
    }

    talk() {
        return this._sound;
    }
}

class Dog extends Mammal {
    constructor() {
        super('woofwoofly')
    }
}


let fluffykins = new Dog('woof');
console.log(fluffykins.talk());

console.log('Class in javascript is just a synthatic sugar for prototype model. ')
console.log('hence Dog is just a function:', typeof Dog);
console.log('and Dog is just the prototype of fluffykins ', Dog.prototype.isPrototypeOf(fluffykins));

console.log('fluffykins delegates to Dog() on its __proto__:', fluffykins.__proto__)
console.log('and also delegates to Mammal on the next hop in the prototype delegation chain: ', fluffykins.__proto__.__proto__)