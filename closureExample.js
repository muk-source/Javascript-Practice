/*
In this code, innerFunction is a closure that encompasses its own scope (where innerVariable exists), 
the scope of outerFunction (where outerVariable exists), and the global scope. Even when we execute 
newFunction after outerFunction has finished execution, it still retains access to outerVariable. 
This demonstrates how closures work with variable scope in JavaScript. 
*/
function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log("Outer Variable : ", outerVariable)
        console.log("Inner Variable : ", innerVariable)
    }
}

const newFunction = outerFunction("outside")
newFunction("inside")


// what is the practical use of closure and how can closures are used to control access of variables?
/*
A practical use of a closure is in data privacy and encapsulation. In JavaScript, variables defined within
 a function are not accessible outside that function. This can be used to create private variables.
 
  The returned inner function can then be used to manipulate the variable from the outer function’s scope,
   effectively controlling its access.
*/

function makeCounter() {
    let count = 0;
    return function () {
        return count++;
    }
}

let counter = makeCounter() 
console.log("counter :" , counter()); // prints 0
console.log("counter :" , counter()); // prints 1

// closure use of function factory

function makeAdder(x) {
    return function (y) {
        return x+y;
    }
}

const add5 = makeAdder(5)
const add10 = makeAdder(10)

console.log("add5:",add5(2)) // prints 7
console.log("add10:", add10(2)) // prints 12
