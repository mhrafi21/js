// Higher order functions

// Functions that take other functions as arguments or return function

// function operate(a,b,callback){
//     return callback(a,b)
// }

// const add = (x,y) => x + y;
// const multiple = (x,y) => x * y;

// console.log(operate(4,5,add));
// console.log(operate(6,8,multiple))

// Closures
// Functions that remember variables from their parent scope;

// function outerFunction(outerValue){
//     return function innerFunction(innerValue){
//         console.log(`Outer: ${outerValue}, Inner: ${innerValue}`)

//     }
// }

// const closureExample = outerFunction("Hello closure");
// closureExample("hello inner")

// Curring
// Transforming a function with multiple arguments into sequence of function

// const multiple = (a) => b => a * b
// const double = multiple(5);
// console.log(double(2))

// Debouncing & Throttling
// Debouncing: Executes a function after a delay;
// Throttling: Ensures a function is executed at most once in a given period;

// Debouncing Function

// function debounce(){
//     let timeout;

//     return function (...args){
//         clearTimeout(timeout)
//         timeout = setTimeout(() => func(...args), delay);
//     }
// }

// const handleResize = debounce(() => console.log("Resized!", 500));

// console.log(handleResize())
// document.addEventListener("resize", handleResize);

// Throttling Function

// function throttle (func, limit) {
//     let inThrottle;
//     return function(...args){
//         func(...args)
//         inThrottle = true;
//         setTimeout(() => (inThrottle == false),limit)
//     }
// }

// const logScroll = throttle(() => console.log("scrolled!", 1000));
// console.log(logScroll());

// Generators
// Functions that can be paused and resumed;

// function* generatorFunction(){
//     yield "hello";
//     yield "World";
//     return yield
// }

// const gen = generatorFunction();

// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());

// Web Storage (LocalStorage & SessionStorage)

// localStorage.setItem("username", "Rafi");
// localStorage.getItem("username");

// sessionStorage.setItem("sessionKey", "123456");
// sessionStorage.getItem("sessionKey");

// Web APIs

// fetch("https://jsonplaceholder.typecode.com/posts/2",{
//     method: "POST",
//     body: JSON.stringify({
//         title: "New Post",
//         body: "This is a new Post.",
//         userID: 1
//     }),
//     headers: {"Content-type": "application/json"}
// })
// .then(response = response.json())
// .then(data => console.log(data))

// Web Workers
// Run scripts in the background.

// const worker = new Worker("worker.js");
// worker.postMessage("Hello Worker!");
// worker.onmessage = (event) => console.log(event.data);

// self.onmessage = () => {
//     self.postMessage(`Worker received: ${event.data}`)
// }

// Event Delegation

// document.querySelector("#parent").addEventListener("click", function(event){
//      if(event.target.matches(".child")){
//         console.log("Child clicked")
//      }
// })

// Proxies(Meta Programming);

// const handler = {
//     get: (target,prop) => (prop in target ? target[prop] : "Property not found!")
// }

// const person = new Proxy({name: "John"}, handler);
// console.log(person.name);
// console.log(person.age);

// WeakMap & WeakSet

// let weakMap = new WeakMap();
// let obj = {};
// weakMap.set(obj,'hello');
// console.log(weakMap.get(obj))

// class MyWeakMap {
//     constructor(){
//         this.map = new Map();
//     }

//     set(obj, value){
//         if(typeof obj === "object" && obj !== null){
//             this.map.set(obj,value);
//         }else{
//             throw new Error("Key must be object")
//         }
//     }

//     get(obj){
//         return this.map.get(obj);
//     }
// }

// let weakMap = new MyWeakMap();
// let obj = {};
// weakMap.set(obj,"Hello this is custom weakMap")
// console.log(weakMap.get(obj))


// JS performance optimization

// avoid memory leaks
// Use null to release references

// let obj = {name: "John"}
// obj = null;

// Minimize repaints and reflows 
// Batch DOM updates using DocumentFragment;

// let fragment = document.createDocumentFragment();
// for(let i = 0; i < 10; i++){
//     let div = document.createElement("div");
//     div.textContent = `item ${i}`
//     fragment.appendChild(div);
// }
// document.body.appendChild(fragment);

// optimize Loops;

// let arr = [1,2,3,4,5]

// for (let i = 0;  i < arr.length; i++){
//     console.log(arr[i])
// }

// for(let i = 0, len = arr.length; i < len; i++){
//     console.log(arr[i])
// }

// / nodejs
// WebSockets (Real-Time Communication) 

// const WebSocket = require("ws")
// const wss = new WebSocket.Server({port: 8080});

// wss.on("connection", (ws) =>{
//     ws.send("Welcome to WebSocket Server!");
//     ws.on("message", (message) => console.log("Received", message ))
// })

// // client

// let socket = new WebSocket("ws://localhost:8080");
// socket.message = (event) => console.log(event.data);


// JS Security best practices
// prevent XSS (cross-site scripting);
// function sanitize(input){
//     return input.replace(/</g,"&lt").replace(/>/g,"&gt;")
// }

//JavaScript Design Patterns

// Singleton

const Singleton = (function(){
    let instance;

    function createInstance(){
        return new Object("Instance created")
    }

    return {
        getInstance: function () {
            if(!instance) instance = createInstance();
            return instance;
        }
    }
})();

console.log(Singleton.getInstance())
console.log(new Object())