// Basic Objects operations
const user = {
    name: "Mukund Moona",
    age: 23,
    profession: "Engineer",
    "like this video": true // --> if we want to add a property which has some spacces in object , we use doublequotes
}

// Modify the object 
user.name="Virat Kohli"
console.log(user)
console.log(user["like this video"]) // --> another way to access the property that has double quotes
delete user["like this video"]

// Delete the property
delete user.profession;
console.log(user)

//
const fun = (function(a){
    delete a; // --> delete keyword is only used to remove a property from an object and not a local variable from a fun
    return a;
})(5)
console.log("fun",fun) // --> hence this will print 5

// how to dynamically add the key/value pair in object 
let user2 = {

}
const property = "firstName"
const name = "Rohit"

user2 = {
    property: name
}
console.log(user2) // output will be {property:'Rohit'}

// to add the key properly
user2 = {
    [property] : name
}
console.log(user2)

// looping over the object 
// it cannot be done simply like array
// we use "for in " loop

for(key in user) {
    console.log("key:", key , "value:", user[key])
}

// Remember Object.keys() and Object.values() convert the object keys or values into array and then we can use array methos to loop them.

// o/p
const obj1 = {
    a:"two",
    b:"three",
    a:"five"
}
console.log("obj1",obj1) // if the property is reassigned then that is taken as value but the position of key preserves.

// Create a multiplyByTwo function which takes obj as parameter and multiply all the numeric values by 2

const obj2 ={
    a: 100,
    b: 200,
    c:"mukund"
}
console.log(multiplyByTwo(obj2))

function multiplyByTwo(obj) {
    for(key in obj) {
        if(typeof obj[key] === "number") {
            obj[key] = obj[key] * 2
        }
    }
    return obj
}

const a ={}
const b={key:"b"}
const c={key:"c"}
a[b]=123 // --> this means a["Object Object"] = 123
a[c]=456 // --> this again means a["Object Object"] = 456
// becasue we can't take b as object as key in a , it converts to [Object Object]

console.log(a[b]) // --> outputs 456

// what is JSON.stringify and JSON.parse
const obj4 = {
    name:"Dhoni",
    number: 7 
}
console.log(obj4)
const strObj= JSON.stringify(obj4) // main usecase when we store data in local Storage
console.log(strObj)
const oldObj = JSON.parse(strObj)
console.log(oldObj)
console.log(obj4)


// spread and rest op
console.log([..."mukund"]) //--> ['m', 'u', 'k', 'u', 'n', 'd']

const userProp = {name:"Mukund" , number: 7 }
const admin = {admin: true, ...userProp}
console.log(admin) // --{admin: true, name: 'Mukund', number: 7}


const settings = {
    userName: "Mukund",
    city: "Kasganj",
    state: "UP"
}
const data = JSON.stringify(settings, ["city","state"]) // when we pass array , then it only stringify the key that are presenet in array
console.log(data) //-> {"city":"Kasganj","state":"UP"} // completely igores the username property

const shape = {
    radius : 10,
    diameter() {
        return 2 * this.radius // here this refers to shape
    },
    perimeter : () => 2 * Math.PI * this.radius // here this refers to Window
}
console.log(shape.diameter()) // 20
console.log(shape.perimeter()) // NaN

// Object Refrencing Questions

//In JavaScript, objects are reference types. When you create an object and assign it to a variable, the variable actually holds a reference to the memory location where the object is stored.
//  This means that when you pass an object to a function or assign it to another variable, you are passing and assigning the reference, not a copy of the entire object.
let obj5 = {greeting: "hey"};
let obj6 = obj5
obj5.greeting="hello"
console.log("obj5",obj5)
console.log("obj6",obj6)

console.log(obj5 == obj6) // true since pointing to same memory

console.log({a:1} == {a:1}) // false since both are diff objects pointing to diff memory location
console.log({a:1} === {a:1})// false since both are diff objects pointing to diff memory location

let person = {name:"mukund"}
const myArray = [person]
console.log(person)
console.log(myArray)
// person = null
console.log(myArray)
person.name = null
console.log(myArray)

//
const value = {number : 10}

const multiply = (x={...value}) => {
    x.number = x.number * 2
    console.log(x.number)
   
}
multiply() // in this case we have clone the object as taken as default param 
multiply() // in this case we have clone the object as taken as default param 
multiply(value) // here we have taken the actual object , so any chnage will chnage the value of object
multiply(value) // therefore here number becomes 20 when passeed



// Assigning an object to a variable and cloning it create two different references,
//  leading to different behaviors when modifying the objects.


//  Direct Assignment:

//  When you assign an object to a variable, you are essentially creating a reference
//   to that object. Any modifications made to the object through that reference will affect the
//    original object as well, since they both point to the same memory location.

const originalObject = { name: "Mukund" };
const referenceToObject = originalObject;
referenceToObject.name = "John";
console.log(originalObject); // Output: { name: "John" }



// Cloning:

// When you clone an object, you create a new object with the same properties and values
//  as the original one, but they are stored in different memory locations. Modifications
//   made to the cloned object will not affect the original object, and vice versa.


  const originalObject2 = { name: "Mukund" };
  const clonedObject = { ...originalObject2 };
  clonedObject.name = "John";
  console.log(originalObject2); // Output: { name: "Mukund" }

//   The key difference lies in whether the modifications to one variable affect the other. 
//   With direct assignment, changes to one variable will reflect in the other because they
//    reference the same object. With cloning, changes made to the cloned object do not affect
//     the original object, as they are separate entities.


// Different ways of cloning an object
// 1 . Using rhe spread operator

const ob1 = {name:"Narendra Modi"}
const c1 = {...ob1}
console.log(c1)  

// 2. Object.assign

const ob2 = {name:"Rahul Gandhi"}
const c2 = Object.assign({} , ob2)
console.log(c2)

// 3 using JSON methods

const ob3 = {name:"Arvind Kejriwal"}
const c3 = JSON.parse(JSON.stringify(ob3))
console.log(c3)



