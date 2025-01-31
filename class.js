
// 1. What is a JavaScript Class?
// A class in JavaScript is essentially a blueprint for creating objects. It provides a structured way to define properties and methods.

// 🔹 Before ES6, JavaScript used constructor functions and prototypes for object creation and inheritance.
// 🔹 With ES6 classes, we now have a more object-oriented approach.

// Basic Syntax of a Class:
// class Car {
//     constructor(brand, model, year){
//         this.brand = brand;
//         this.model = model;
//         this.year = year;
//     }
//     startEngine(){

//         console.log(`${this.brand} ${this.model} is starting!`)
//     }

//     stopEngine(){
//         console.log(`${this.brand} ${this.model} is stopping!`)
//     }
// }

// const myCar = new Car("Toyota", "Corolla", 2022 );
// myCar.startEngine(); // Toyota Corolla is starting!
// myCar.stopEngine(); // Toyota Corolla is stopping!;

// Key Points from the Example:
// 1. Class Declaration: class Car {} defines the class.
// 2. Constructor Method: The constructor is a special method used to initialize object properties.
// 3. Instance Methods: start() and stop() are functions that operate on class instances.
// 4. Creating an Object: new Car("Toyota", "Corolla", 2022) creates an instance of the Car class.

// JavaScript Classes: Deep Explanation with Examples
// In JavaScript, classes were introduced in ES6 (ECMAScript 2015) to provide a cleaner, more structured way to work with objects and inheritance. Although JavaScript remains a prototype-based language under the hood, class syntax makes object-oriented programming (OOP) more intuitive and easier to manage.

1. What is a JavaScript Class?
A class in JavaScript is essentially a blueprint for creating objects. It provides a structured way to define properties and methods.

🔹 Before ES6, JavaScript used constructor functions and prototypes for object creation and inheritance.
🔹 With ES6 classes, we now have a more object-oriented approach.

Basic Syntax of a Class:
A class is defined using the class keyword followed by the class name.
class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  start() {
    console.log(`${this.brand} ${this.model} is starting...`);
  }

  stop() {
    console.log(`${this.brand} ${this.model} is stopping.`);
  }
}

// Creating an object (instance of the class)
const myCar = new Car("Toyota", "Corolla", 2022);
myCar.start();  // Output: Toyota Corolla is starting...
myCar.stop();   // Output: Toyota Corolla is stopping.
Key Points from the Example:
1. Class Declaration: class Car {} defines the class.
2. Constructor Method: The constructor is a special method used to initialize object properties.
3. Instance Methods: start() and stop() are functions that operate on class instances.
4. Creating an Object: new Car("Toyota", "Corolla", 2022) creates an instance of the Car class.

2. Class Methods and Properties

Instance Methods
Methods defined inside a class that can be accessed by instances.

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    introduce(){
        console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old`);
    }
}

const person1 = new Person("Jonh Doe", 40);

person1.introduce(); // Output: Hi, my name is Jonh Doe and I'm 40 years old

Class (Static) Methods
A static method belongs to the class itself and is not available to individual instances.

class MathHelper {
    static add(a = 4, b = 3){
        return a + b

    }
}

const add1 = MathHelper.add(44,66);
console.log(add1); // output: 110 if not pass argument default value will be 7;

🔹 static methods are called on the class directly (MathHelper.add()) instead of instances.

3. Getters and setters

JavaScript allows defining getter and setter methods to control access to object properties;

class User {
  constructor(username) {
    this._username = username;
  }

  // Getter method;
  get username() {
    console.log(constructor(){})
    return this._username.toUpperCase();

  }

  // Setter method;
  set username(newName) {
    if (newName.length < 3) {
      console.log("Username must be at least 3 characters long");
      return;
    }
    this._username = newName;
  }
}

const user1 = new User("JohnDoe");
console.log(user1); //output: User { _username: 'JohnDoe' }
console.log(user1.username); // output: Username must be at least 3 character long;

user1.username = "Jo";
user1.username = "janeDoe";

console.log(user1.username); // Output: JANEDOE

4. class Inheritance (Extending a Class);

one of the most powerful features of classes is inheritance, allowing a class to inherit properties and methods from another class;

class Animal {
    constructor(name){
        this.name = name;
    }

    makeSound(){
        console.log(`${this.name} makes a sound.`)
    }
}

// Inheriting from Animal class
class Cat extends Animal {
    constructor(name, color){
        super(name); // calls the parent constructor
        this.color = color;
    }
    meow(){
        console.log(`${this.name} meows.`);
    }

}

const animal1 = new Animal("Dog");
const cat2 = new Cat("Whiskers", "White");

cat2.makeSound();
cat2.meow();

Key Points:
1. extends allows the Dog class to inherit from Animal.
2. super(name) calls the constructor of the parent class.
3. Inherited Methods: Dog can use makeSound() from Animal.

5.Private Fields

JavaScript(ES2020) introduced private fields, ensuring that a property cannot be accessed outside the class.

class BandAccount {
  #balance = 0; //The #balance property is private and cannot be accessed outside the class.

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }
  deposit(amount) {
    this.#balance += amount;
    console.log(`Deposite: $${amount}, New Balance: $${this.#balance}`);
  }

  getBalance() {
    return this.#balance;
  }
}

const myAccount = new BandAccount(3000);
myAccount.deposit(400);

myAccount.getBalance(); // Output: 3400;


6. Abstruct Classes (Simulating);

JavaScript does not have built-in abstruct classes, but we can create a class that cannot be instantiated;

class Shape {
    constructor(){
        if(this.constructor === Shape){
            throw new Error("Cannot instantiated an abstract class")
        }
    }

    area(){
        throw new Error("Method 'area' must be implemented. ")
    }
}

class Circle extends Shape {
    constructor(radius){
        super();
        this.radius = radius;
    }

    area(){
        return Math.PI * this.radius ** 2;
    }
}

// const circle = new Shape(); // ❌ Error: Cannot instantiate an abstract class.

const circle2 = new Circle(65);

7. Class vs Function Constructor

Before ES6, object were created using function constructor and prototype-based inheritance;

🔹 Function Constructor Approach

function Car(brand, model){
    this.brand = brand;
    this.model = model;
}

Car.prototype.start = function(){
    console.log(`${this.brand} ${this.model} is starting...`);
}

const car1 = new Car("Honda", "Civic");

car1.start(); // output: Honda Civic is starting...

class Car {
    constructor(brand, model){
        this.brand = brand;
        this.model = model;
    }
    start(){
        console.log(`${this.brand} ${this.model} is starting...`)
    }
}

const car1 = new Car("Honda", "Civic");

car1.start(); // output: Honda Civic is starting...


Conclusion:

JavaScript classes provide a structured way to implement object-oriented programming. They support: ✅ Object creation using constructor
✅ Encapsulation with getters, setters, and private fields
✅ Inheritance with extends
✅ Static methods for utility functions

Classes make JavaScript development more organized, readable, and maintainable, especially for large applications.