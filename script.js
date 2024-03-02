// Scope

// {
//  var a = 5 
// }
// console.log(a) // it outputs correctly as it is var has functional scope.

// {
//     let b = 8
// }
// console.log(b) // Uncaught ReferenceError: b is not defined.Becasue let and const is block scoped

// Shadowing

// function test(){
//     var name1= "hello"
//     let name2 = "hi"
    
//     if(true){
//         let name1 = "hello mukund"
//         var name2 = "hi mukund"
//         console.log(name1)
//         console.log(name2)
//     }

// }

// conclusion from above
// "var" variables can be shadowed by let and vice verse is not true.
// var var1;
// var var1;
 
// // this is error because "let cannot be redeclared"
// let var3
// let var3

// // Declaration without initialization

// var var4
// let var5

// // this gives error because const need to be initialized
// const var6

// hoisting 
function abc (){
    console.log(a) // prints "undefined"
    console.log(a,b,c) // gives error that b cannot be accessed before initialization
    var a = 10
    let b = 20
    let c = 30
}
abc()

// conclusion from above
/*
"var" variables are hoisted and therefore they can be accessed but its print "undefined" as  "var" varibles initialised 
with undefined during "creation phase" in JS execution context . this is called hoisting.

"let" and "const" variables gives error but that doesn't mean they are not hoisted . They are hoisted in "temporal dead zone
The Temporal Dead Zone (TDZ) is a concept in JavaScript associated with let and const declarations. It refers to the time span
 between the entering of the scope and the actual declaration of the variable.
 During this temporal dead zone, any attempt to access the variable results in a ReferenceError."
*/