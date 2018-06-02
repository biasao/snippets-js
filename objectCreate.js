/** 
 * Object.create() will create a new object,
 * making its __proto__ be the argument handed in. 
 * Object.create() is more natural than the new keyword
 * to prototype model.
 */

const cat = {
    makeSound: function() {
        console.log(this.sound);
    }
}

const mark = Object.create(cat);
mark.sound = 'mewuuuuuF';
mark.makeSound();

const waffles = Object.create(cat);
waffles.sound = 'mrrrrrrrrrrrrrooooow';
waffles.makeSound();


console.log('Is mark a cat?',
    cat.isPrototypeOf(mark));

console.log('Is waffles a cat?',
    cat.isPrototypeOf(waffles));

console.log('are mark and waffles the same object?',
    mark === waffles);