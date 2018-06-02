console.log('__proto__ vs prototype\n');

let cat = {
    breed: 'munchkin'
}

let myCat = {
    name: 'flfufykins'
}

Object.setPrototypeOf(myCat, cat);
console.log('__proto__:');
console.log('myCat.__proto__ is now set to be the cat object:', myCat.__proto__)

cat.tailLength = 15

// __proto__ is a pointer to the original cat object
console.log('and as it is a reference poiting to cat, any change to it will reflect on myCat.__proto__:', myCat.__proto__)

/**
 * Objects have __proto__, used as for prototypal delegation i.e. if object does not contain a property, it will check on __proto__ recursively. 
 * Whereas, prototype is the property on Functions, and Functions only, used when you use the new keyword for instantiation
 **/ 
function Cat() {};
Cat.prototype = {
    breed: 'siamese'
}

myNewCat = new Cat();

console.log('\nprototype');
console.log('function Cat() has prototype property:', Cat.prototype);
console.log('but myNewCat does not have prototype:', myNewCat.prototype);
console.log('myNewCat.__proto__ is equal to Cat.prototype:', myNewCat.__proto__ == Cat.prototype);