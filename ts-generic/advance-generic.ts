// 1. Generic Type Aliases;
// In addition to interfaces, we can use type aliases with generics.


// type ResponseData<T> = {
//     data: T;
//     success: boolean
// }

// const userResponse: ResponseData<{ name: string; age: number }> = {
//     data: { name: "John", age: 30 },
//     success: true
// }

// console.log(userResponse) // output: {data: {name: "John", age: 30}, success: true};

// 2. Generic Default types
// we can set default types for generics so they work even when no type is explicity provided.

// interface ApiResponse<T= string> {
//     data: T ;
//     status: number;
// }

// const res1: ApiResponse = {data: 'success', status: 200}

// const res2: ApiResponse<number> = {data: 35, status: 400}

// // Here, T = string sets string as default type;

// 3. keyof with Generics 
// we can use the keyof operator to ensure type safety when accessing object properties.

// function getProperty<T, K extends keyof T>(obj: T, key: K) : T[K] {

//     return obj[key]

// }

// const user = {name: "Alice", age: 30};

// console.log(getProperty(user, "name"));

// // Here, K extends keyof T, ensures that the key exists in the object;

// 4. Generic Mapped Types

// // We can use generic to create mapped types, which transform object types dynamically.

// type ReadOnlyObj<T> = {
//     readonly [K in keyof T] : T[K];
// }

// interface IPerson  {
//     name: string;
//     age: number;
// }

// const person: ReadOnlyObj<IPerson> = {name: "John", age: 40}

// person.age = 34 // Error: Cannot assign to 'age' because it is a read-only property.

5. Conditional 