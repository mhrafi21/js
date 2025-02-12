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

// 5. Conditional Types With Generics
// // We can use conditional types to add login in generic

// type IsArray<T> = T extends any[] ? "Array" : "Not an Array";

// type Test1 = IsArray<string[]>
// type Test2 = IsArray<number>

// console.log<Test1>(); // Output: "Array"
// console.log<Test2>(); // Output: "Not Array"

// 6. Generic Utility Types (Built in Generic).

// Partial<T> = Makes all properties optional
// Required<T> = Makes all property required;
// ReadOnly<T> = Makes all Property readonly.

// Pick<T,K> = Selects specific property from a type.
// Omit<T,K> = Removes specific properties from a type.
// Record<K,T> = Creates an object specific keys and values.

// example: Partial<T>

// interface User {
//     name: string;
//     age: number;
//     email: string
// }

// const updateUser = (user: Partial<User>) => {
//     console.log(user);
// }

// updateUser({name: "Mahdi Hasan Rafi"}) // only updating name is allowed;

// 7. Generic Functions With Promises(Asynchronous Code);

// We can use generics with promises for better type inference in async functions.

// async function fetchData<T>(url: string): Promise<T>{
//     const response = await fetch(url);
//     return response.json();
// }

// interface IPost {
//     id: number;
//     title: string;
// }

// async function getPost(){
//     const post = await fetchData<IPost>("https://jsonplaceholder.typicode.com/posts/1")
//     console.log(post.title);
// }

// getPost();


// const fetchData =  async <T>(url: string) : Promise<T> => {
//     const response = await fetch(url);
//     return response.json();
// }


// interface IPost  {
//     id: number;
//     title: string
// }

// const getPost = async() => {
//     const post = await fetchData<IPost>("https://jsonplaceholder.typicode.com/posts/1");
//     console.log(post.title);

// }


//8. Combining Generics With Interfaces and Inheritance

// We can extend interface with generics for complex structures.

// interface Person {
//     firstName: string;
//     lastName?: string;
//     age: number;
// }

// interface Employee<T> extends Person {
//     role: T
// }

// const dev: Employee<string> = {firstName: "John", age: 34, role: "Software Engineer"}

// console.log(dev); //{firstName: "John", age: 34, role: "Software Engineer"}



// 9. Generic Factory Functions

// We can create factory functions that return instances of generic types.

// function createInstance<T>(Ctor: {new (): T}): T {
//     return new Ctor();

// }

// class Car {
//     drive(){
//         console.log("driving...")
//     }
// }

// const myCar = createInstance(Car);
// myCar.drive(); // output: Driving...

// // Here, {new (): T} ensures Ctor is a class constructor;

// 10. Generic Functions With Multiple Constraints

// // We can combine constraints using the & operator.

// function merge<T extends object, U extends object>(obj1: T, obj2: U ): T & U{
//     return {...obj1, ...obj2};
// }

// const person = {name: "Rafi"};
// const job = {title: "Development"};

// const employee = merge(person, job);
// console.log(employee);




function merge<T extends object, U extends object>(obj1: T, obj2: U): T & U {
    <T, U >: This means that the function is generic, meaning it can work with any object type.
    T extends object: This ensures that T must be an object(not a string, number, etc.).
    U extends object: This ensures that U must also be an object.
    T & U(Return Type): The function returns a new object that combines both T and U.
