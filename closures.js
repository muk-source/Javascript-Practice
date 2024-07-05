// let count = 0;

// (function printCount() {
//     if(count === 0){
//         let count = 1 // shadowing
//         console.log(count)
//     }
//     console.log(count)
// })();
// output for above will be 1 and 0

// let count = 0;

// (function printCount() {
//     if(count === 0){
//         count = 1 // 
//         console.log(count)
//     }
//     console.log(count)
// })();

// output for above will be 1 1

// write a function which alllow you do this

// var addSix = createBase(6)
// addSix(10) //returns 16
// addSix(21)

// function createBase (num1) {
//     return function (num2) {
//         console.log(num1+num2) 
//     }
// }


// Time optimization example

// function find(){
//     let a =[]
//     for(let i=0;i<1000000;i++){
//         a[i] = i*i
//     }
//     return function (index) {
//         console.log(a[index])
//     }
// }
// const closure = find()
// console.time("6")
// closure(6)
// console.timeEnd("6")

// using closures
// task is to get the output 0 1 2 without using "let"
// function print () {
    
//     for(var i=0;i<3;i++){
//         function inner(i) { // making this function will create the whole new functional scope for that variable using closures
//             setTimeout(function log(){
//                 console.log(i)
//             },i*1000)
//         }
//     inner(i)
//     }
// }
// print()


// how would you use closure to create private counter

// function counter () {
//     var _counter = 0 // starting with '_' to show that this is a private variable . the convention is like this.

//     function add(increment) {
//         _counter+=increment
//     }
//     function retrieve() {
//         return "counter is" + _counter
//     }
//     return {add,retrieve}
// }
// const c = counter()
// c.add(5)
// c.add(10)
// console.log(c.retrieve())
// so we are not directly manipulating counter variable but we are using different functions.


// Modular Pattern 
// The module pattern is a design pattern used in JavaScript to encapsulate and organize code into modular and reusable components.
//  It helps in creating private and public members,
//  allowing you to control the visibility and accessibility of certain functionalities within a module

// var MyModule = (function() {
//     // Private variables and functions
//     var privateVariable = "I am private";

//     function privateFunction() {
//         console.log("This is a private function");
//     }

//     // Public interface
//     return {
//         publicVariable: "I am public",

//         publicFunction: function() {
//             console.log("This is a public function");
//         },

//         getPrivateVariable: function() {
//             return privateVariable;
//         }
//     };
// })();

// // Usage of the module
// console.log(MyModule.publicVariable);  // Output: "I am public"
// MyModule.publicFunction();  // Output: "This is a public function"
// console.log(MyModule.privateVariable);  // Output: undefined (private)
// MyModule.privateFunction();  // Output: Error (private)
// console.log(MyModule.getPrivateVariable());  // Output: "I am private"


// task is to make a polyfill for a function which run only once

//we do have lodash library for this 
function once(fn) {
    let called = false;

    return function (...args) {
        if (!called) {
            called = true;
            return fn(...args);
        } else {
            console.warn("Function can only be called once.");
        }
    };
}

// Example usage with arguments:
const addOnce = once(function (a, b) {
    return a + b;
});

console.log(addOnce(2, 3));  // Output: 5
console.log(addOnce(4, 5)); 


// task is to make a polyfill for a memoized function 

const clumsyProduct = (num1,num2) => {
    for(let i=0;i<1000000;i++) { }
    return num1*num2
}

function memoize(fn,context){ // context is optional
    const res = {}
    return function (...args){
        console.log("normal",args)
        let argscache = JSON.stringify(args)
        console.log("args",argscache)
        if(!res[argscache]) {
            res[argscache] = fn.call(context || this,...args) // if there is any context provided otherwise use the current "this" 
        }
        return res[argscache]
    }
}
const memoizedclumsyProduct = memoize(clumsyProduct)

console.log("firstcall")
console.log(memoizedclumsyProduct(9467,7649))
console.log("second call")
console.log(memoizedclumsyProduct(9467,7649))
