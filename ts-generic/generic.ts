// Why use Generics?
// Wihtout generics, we might use any, which removes type safety;

// function identity(value: any): any{
//     return value;
// }

// // here we can pass anything and return anything;

// function identity<T>(value: T): T {
//     return value;
// }

/// Now whatever type we can pass in, we get the same type back;

// How to use generic 

// 1. Generic Functions;

// we define a generic function by adding <T> (or any name, but T is common) before the function parameters;

// function identity<T>(value: T): T {
//     return value;
// }

// console.log(identity<number>(10)) // output: 10
// console.log(identity<string>("Hello my name is Rafi")) // output: Hello my name is Rafi;
// console.log(identity<boolean>(true)) // output: true
// console.log(identity(29)) // Type inferred as number;
// console.log(identity("Hasan"))

// Here <T> is a placeholder for any type. When calling the function, we specify the type explicity (<number>, <string> etc.)
 


// 2. Generic Interfaces

// // we can use generics in interfaces to create flexible data structures.

// interface Box<T>{
//     content: T;
// }

// const numberBox: Box<number> = {content: 100};

// console.log(numberBox.content); // output: 100

// Here, Box<T> can store any type of content, keeping type safety intact

// 3. Generic Classes;

// We can create classes with generics to store and process data of any type.

// class DataStore<T> {
//     private data: T;

//     constructor(value: T){
//         this.data = value;
//     }

//     getData(): T {
//         return this.data;
//     }

// }

// const numberStore = new DataStore<number>(34);
// console.log(numberStore.getData());

// const stringStore = new DataStore<string>("Hello TypeScript");
// console.log(stringStore.getData());

// 4. Generic Constraints

// Sometimes, we want to restrict generics to specify types. We can do this using extends.

// function printLength<T extends {length: number}>(item: T): void {
//     console.log(item.length);
// }

// // Works because both have 'length' property;

// printLength("Hello, Generic Constraints")
// printLength([2,3,4,5]) // output: 4;

// Error: Number does not have a 'Length' Property
// printLength(100); X

// 5. Using Multiple Generic types;

// We can use multiple generic types in functions, interfaces, and classes;

function pair<K, V>(key: K, value: V): [K, V]{

    return [key, value];

}

console.log(pair<number, string>(1, "one")); // Output: [1, "one"]
console.log(pair<string, boolean>("Active", true)); // Output: ["Active", true]
// Here, <K, V> allows us to work with two different types at once.

