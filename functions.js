// functions in js

// first class functions-> first class functions means functions are treated as variables and can also be passed to 
// other functions or return them

// const displaySquare = function (n) {
//     return n*n
// }

// const printFunction = function (fn) {
//     console.log(fn(5))
// }

// printFunction(displaySquare)

// // o/p based question
// for(var i=0;i<5;i++){
//     console.log("var",i)
//     setTimeout(function(){
//         console.log(i)
//     },i*1000);
// }
// // output will be 5 5 5 5 5 , var has functional scope
// for(let i=0;i<5;i++){
//     console.log("let",i)
//     setTimeout(function(){
//         console.log(i)
//     },i*1000);
// }

// let will print 0 1 2 3 4 because let is block scoped 


// Hoisting in functions

// var x = 21
// var fun1 = function () {
//     console.log(x)
//     var x = 30 
// }
// fun1()  // this will print undefined because x will be undefined in local scope

// var y = 100
// var fun2 = function () {
//     console.log(y) // this will print 100
//     y = 30 
// }
// fun2() 


// params vs arguments 
// function square(num) { // --> we call this as params
//     console.log(num*num)
// }

// square(5) // --> we call this as arguments


function multiply(num1,num2) { 
    console.log("num1:",num1, "num2:",num2)
    console.log(num1*num2)
}
let arr = [5,6]
multiply(...arr) // --> spread operator


function multiply2(...arr) {  // --> here it is called rest operator
    console.log(arr[0],arr[1])
    console.log(arr[0]*arr[1])
}
let arr2 = [5,6]
multiply2(...arr2) // --> spread operator

// to keep thing in mind that rest operator must be the last param
const fn = (a,x,y,...numbers) =>{
    console.log(x,y,numbers)
}

fn(1,2,3,4,5,6,7) // this will print 2 3 [4,5,6,7]
// numbers will be the array of rest elements


// callback function example

// function greet(name){
//     console.log("hey this is "+ name)

// }
// const procssesUserInput = (callback) => {
//     const input = prompt("what is your name")
//     callback(input)
// }
// procssesUserInput(greet)


// this in regular vs arrow function

// const obj = {
//     name: 'deeecode',
//     age: 200,
//     print: function() {
//       console.log(this)
//     }
//   }
  
//   obj.print() // --> this will print the "obj" becasue here "this" represents the object "obj" that calls the "print" method

//   const obj2 = {
//     name: 'deeecode',
//     age: 200,
//     print: function() {
//       function print2() {
//         console.log(this)
//       }
      
//       print2()
//     }
//   }
   
//   obj2.print() // this will output "Window" object .The reason is that print is called by the object "obj2" but no one is 
               // calling the print2 method .Hence "this" inside print 2 is window


// Arrow function works differently
// Arrow functions do not create their own this binding

const obj3 = {
    name: 'deeecode',
    age: 200,
    print: () => {
      console.log(this)
    }
  }
  
  obj3.print() // output will be window object
  //By using an arrow function for print, this function does not automatically create a this variable.
//    As a result, any reference to this would point to what this was before the function was created.

const obj4 = {
    name: 'deeecode',
    age: 200,
    print: function() {
      const print2 = () => {
        console.log(this)
      }
      
      print2()
    }
  }
  
  obj4.print() // output will be obj4


  /* 
  Since print2 is an arrow function, it doesn't create its own this variable. 
  Therefore, any reference to this would point to what the value of this was before the function was created.
   In this case where obj calls print, this was pointing to obj before print2 was created. As you can see in the results,
    by logging this from print2, obj is the result.
  
  */


// Watch this line  https://www.freecodecamp.org/news/the-difference-between-arrow-functions-and-normal-functions/