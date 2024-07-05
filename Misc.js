// ways to create an object in javascript

// 1 . using object literal syntax

var myObject = {
  name: "mukund",
  age: 24,
};
console.log(myObject);

// 2. using constructor function

function Person(name, age) {
  this.age = age;
  this.name = name;
}

var person = new Person("Mukund", 24);
console.log("person", person);

// slice method
let arrayIntegers = [1, 2, 3, 4, 5];
let arrayIntegers1 = arrayIntegers.slice(0, 2); // returns [1,2]
let arrayIntegers2 = arrayIntegers.slice(2, 3); // returns [3]
let arrayIntegers3 = arrayIntegers.slice(4); //returns [5]

// splice method
// 1 The splice() method can be used to add new items to an array:
const fruits = ["orange", "apple", "banana", "mango"];
fruits.splice(2, 0, "kiwi", "peach");
console.log("fruits", fruits);

//The first parameter (2) defines the position where new elements should be added (spliced in).

// The second parameter (0) defines how many elements should be removed.

// The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added

// splice() method can be used to delete elements also
const newFruits = ["banana", "orange", "apple", "mango"];

newFruits.splice(0, 1);
console.log("newFruits", newFruits);

// splice method modifies the original array

// encode and decode the Url
const uri = "https://mozilla.org/?x=шеллы";
const encoded = encodeURI(uri);
console.log(encoded);

// es6 clasess--> these are just syntactic sugar of constructor function

// example of constructor function
function Bike(model, color) {
  this.model = model;
  this.color = color;
}

Bike.prototype.getDetails = function () {
  return this.model + " bike has " + this.color + " color";
};

const newBike = new Bike("Classic", "Black");
console.log(newBike.getDetails());

class Car {
  constructor(model, color) {
    this.model = model;
    this.color = color;
  }
  getDetails() {
    return this.model + " car has " + this.color + " color";
  }
}

const newCar = new Car("ferrari", "red");
console.log(newCar.getDetails());

// some important definitions
/*
1. Web Socket -->	Establishes an open and persistent two-way connection between the browser and server
 to send and receive messages over a single connection triggered by events.
 
 The big difference between Web Sockets and Web Workers (and, by extension as we’ll see, Service Workers)
  is that they have direct access to the DOM. Whereas Web Workers (and Service Workers) run on separate 
  threads, Web Sockets are part of the main thread which gives them the ability to manipulate the DOM.

2. Web Worker-->
Web Workers in JavaScript enable concurrent execution by running scripts in background threads 
separate from the main execution thread. Although JavaScript itself is single-threaded, Web Workers 
allow developers to offload intensive tasks to separate threads, thereby preventing blocking of the
 main thread and improving the responsiveness of web applications.

3. Service Worker --> A type of Web Worker that creates a background service that acts middleware for
 handling network requests between the browser and server, even in offline situations.

explanation

JavaScript, indeed, is single-threaded, meaning it has only one call stack and one memory heap.
 However, Web Workers introduce parallelism to JavaScript by running code in separate threads,
  which are not bound by the single-threaded nature of JavaScript.

When you create a Web Worker in JavaScript, you're not actually creating a new JavaScript 
runtime environment. Instead, you're leveraging browser functionality that allows you to run
 JavaScript code in a separate thread managed by the browser's runtime environment.


Server-sent events (SSE) is a server push technology enabling a browser to receive automatic
 updates from a server via HTTP connection without resorting to polling.

 Void(0) is used to prevent the page from refreshing. This will be helpful to eliminate the
  unwanted side-effect, because it will return the undefined primitive value. It is commonly 
  used for HTML documents that use href="JavaScript:Void(0);" within an <a> element.
   i.e, when you click a link, the browser loads a new page or refreshes the same page.
    But this behavior will be prevented using this expression. For example, the below link 
    notify the message without reloading the page


The DOMContentLoaded event is fired when the initial HTML document has been completely
 loaded and parsed, without waiting for assets(stylesheets, images, and subframes) to finish loading. 
 Whereas The load event is fired when the whole page has loaded, including all dependent
  resources(stylesheets, images).

⬆ Back to Top


*/
