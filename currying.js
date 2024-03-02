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

function add(num1){
    return function (num2) {
        if(num2) {
            return add(num1+num2)
        }
        return num1;
    }
}

console.log(add(2)(4)(6)(10))


// Main interview Questiion is yet to be done . Watch the video last part of currying.