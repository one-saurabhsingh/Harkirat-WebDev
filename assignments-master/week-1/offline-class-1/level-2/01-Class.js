// This code defines a class `Animal` with a constructor that initializes the name and leg count of the animal.
class Animal {
  constructor(name, legCount) {
    this.name = name
    this.legCount = legCount
  }
  legs() {
    return `${this.name} has ${this.legCount} legs`
  }
}


const dog = new Animal('Dog', 4)
const cat = new Animal('Cat', 4)
const spider = new Animal('Spider', 8) 

console.log(dog.legs()) // Dog has 4 legs
console.log(cat.legs()) // Cat has 4 legs
console.log(spider.legs()) // Spider has 8 legs

//spider.legCount(); // This line will throw an error because `legCount` is not a function

