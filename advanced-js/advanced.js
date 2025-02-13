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

function debounce(){
    let timeout;

    return function (...args){
        clearATimeout(timeout)
        timeout = setTimeout(() => func(...args), delay);
    }
}

const handleResize = debounce(() => console.log("Resized!", 500));

document.addEventListener("resize", handleResize);
