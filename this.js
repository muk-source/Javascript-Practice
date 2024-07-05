// this keyword
// const obj1 = {
//     name: "mukund",
//     logMessage() {
//         console.log(this.name)
//     }
// }
// obj1.logMessage()
// setTimeout(obj1.logMessage, 1000)
// // fix
// setTimeout(()=>{
//     obj1.logMessage()
// },3000)

// const obj2 = {
//     name:"Mukund",
//     greet() {
//         console.log(`hey ${this.name}`)
//     },
//     farewell : () => {
//         console.log(`hello ${this.name}`)
//     }
// }

// obj2.greet()
// obj2.farewell()

// // Tricky Question
var length = 4
function callback () {
    console.log(this.length)
}
const object = {
    length:5,
    method (fn) {    
        fn() // this will print 4 becasue fn() is called inside object which is method (fn) , here it will not find length , hence it will se in global object.
    }
}

const object2 = {
    length:5,
    method () { // arguments = [callback , 2, 3] --> array is the object itself and array.lenght = 3
        arguments[0]() // this will print 3
    }
}

object.method(callback)
object2.method(callback,2,3)

// Explicit Binding of this keyword (call , bind , apply)
/* 
In JavaScript, the call, apply, and bind methods are used to manipulate the context (the value of this) of a function when it is invoked.
 They are often used to borrow methods from one object to use with another, or to explicitly set the context for a function.
*/

// call -The call method is used to invoke a function immediately with a specified this value and arguments provided individually.

var obj = {name:"Mukund"}
function sayHello(age,profession) {
    console.log(`Hello this is ${this.name} and I am ${age} and I am ${profession}`)
}

sayHello.call(obj,23,"cricketer")

// apply--> The apply method is similar to call, but it takes an array or an array-like object as its second argument, which is used as the arguments when calling the function.
sayHello.apply(obj,[23,"Software Engineer"])

// bind --> The bind method is used to create a new function with a specified this value and initial arguments.
// It doesn't invoke the function immediately but returns a new function that can be called later.

const bind = sayHello.bind(obj)
bind(50,"Business Man")

// o/t
const age = 10
var person = {
    age: 20,
    getAge: function () {
        return this.age
    }


}
var person2 = {age:24}
console.log(person.getAge.call(person2)) // -> 24
console.log(person.getAge.apply(person2)) // --> 24
console.log(person.getAge.bind(person2)()) // --> 24

// task is to print all animals
const animals = [
    {species: "lion" , name: "king"},
    {species: "whale" , name: "queen"}
]
function printAnimals(i) {
    this.print = function() {
        console.log(`#${i} ${this.species}:${this.name}`)
    }
    this.print()
}
// task is to call printAnimal so that it print all animals

// console.log(printAnimals.call(animals)  -> thiss gives error because animal is a list and not object 
// so what we have to do is to provide the every object inside the list , and we can do this by loop

for(let i=0;i<animals.length;i++){
    printAnimals.call(animals[i],i)
    
}

// task is to append the array 
const array1 = ['a' , 'b']
const array2 = [1,2,3]
// array1.push(array2)
// console.log(array1) // -> ['a', 'b', Array(3)] 

array1.push.apply(array1,array2)
console.log(array1) // ['a', 'b', 1, 2, 3]

// task is to get max and min of array 
console.log(Math.max(array2)) // -> Nan as can't take array as args only numbers
console.log(Math.max.apply(null,array2)) // 3

//
function f() {
    console.log(this)
}
const user = {
    g:f.bind(null) // bind will return a function with null context or no this so , now this will point to window
}
user.g() // --> window


/// bind chaining
function f() {
    console.log(this.name)
}

f = f.bind({name:"mukund"}).bind({name:"dhoni"})
f() // -> prints "mukund" because bind chaining doesn't exist as once bind is attached to one object , it will stick to that only.


// no effect of call , bind and apply in arrow function 

// polyfill for call
Function.prototype.mycall = function (context={}, ...args) {
    if(typeof this !== "function"){ // checking if it is function or not
        throw new Error(this +"is not callable")
    }
    context.fn = this // considered context is the target object and we are adding our own "fn" function in it by assigning "this"
    context.fn(...args) // "this" is the function on which we are calling call
}
let car1 = {
    color:"red",
    company : "BMW"
}
function purchaseCar (currency, amount) {
    console.log(`${this.color} - ${this.company} is of ${currency} ${amount}`)
}
purchaseCar.call(car1,"rupees",300000)
purchaseCar.mycall(car1,"rupees",500000)

// polyfill for apply . It will be same as call ,just a diff of args as here we will be passing the args as array
Function.prototype.myapply = function (context={}, args=[]){
    if(typeof this!== "function"){
        throw new Error(this+ "is not callable")
    }
    if(!Array.isArray(args)) {
        throw new Error("passed arguments is not array")
    }
    context.fn=this
    context.fn(...args)
}
purchaseCar.apply(car1,["rupees",500000])
purchaseCar.myapply(car1,["rupees",500000])

// polyfill for Bind.
Function.prototype.mybind = function(context={}, ...args) {
    if(typeof this !== "function") {
        throw new Error("it cannot be bound and hence not callable")
    }
    context.fn=this
    return function(...newArgs) {
        return context.fn(...args,...newArgs)
    }
}

const newFun=purchaseCar.bind(car1)
newFun("rupees", 200)
const myFun = purchaseCar.mybind(car1)
myFun("rupees",10)
// console.log("newFun",newFun())