// task is to implement sum(2)(6)(4)

// function sum(a){
//     return function (b) {
//         return function (c) {
//             return a+b+c
//         }
//     }
// }
// console.log(sum(2)(6)(2))

// task is to implement this
// evalute("sum")(4)(2) --> 6
// evalute("multiply")(4)(2) --> 8
// evalute("divide")(4)(2) --> 2
// evalute("subtract")(4)(2) --> 2

// function evalute(action){
//     return function(a) {
//         return function (b) {
//             if(action === 'sum'){
//                 return a+b
//             }else if(action === 'multiply'){
//                 return a*b

//             }else if(action === 'divide') {
//                 return a/b
//             }else if(action === 'subtract') {
//                 return a-b
//             }else{
//                 return "Invalid arguments"
//             }
//         }
//     }
// }

// console.log(evalute("multiply")(3)(2))

// task is to implement infinite currying
// something like this add(2)(4)(6)()

function add(num1) {
  return function (num2) {
    if (num2) {
      return add(num1 + num2);
    }
    return num1;
  };
}

console.log(add(2)(4)(6)(10));

// Main interview Questiion is yet to be done . Watch the video last part of currying.
function curry(fn) { // curry (sum)
  return function curriedFunc(...args) { // totalSum = curry(sum) --> totalSum(1)
    if (args.length >= fn.length) { // args = 1 , fn.length = 4 since sum has 4 args . check below exp
      return fn(...args);
    } else {
      return function (...next) {
        return curriedFunc(...next, ...args);
      };
    }
  };
}
const sum = (a, b, c, d) => {
  return a + b + c + d;
};

const totalSum = curry(sum);
console.log(totalSum(1)(2)(3)(4)); // prints 10
/* 
    
In the context of the provided code:

fn refers to the function passed as an argument to the print function.
fn.length represents the number of parameters that the function fn expects to receive.
In JavaScript, functions have a length property that indicates the number of parameters expected by the function.
 This property allows you to determine how many arguments a function is supposed to receive.

For example, if you have a function sum defined as (a, b, c, d) => a + b + c + d, then sum.length would be 4, because it expects four parameters.
    */
