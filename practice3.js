console.log("Mukund");
const arr = [2, 4, 5, 6, 7, 8];
const mapArray1 = arr.map((num) => num * 2);
console.log("mapArray1", mapArray1);

// polyfill for map
Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

const mapArray2 = arr.myMap((num) => num * 2);
console.log("mapArray2", mapArray2);

const filterArray1 = arr.filter((num) => num % 2 === 0);
console.log("filterArray1", filterArray1);

// polyfill for filter
Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      temp.push(this[i]);
    }
  }
  return temp;
};

const filterArray2 = arr.myFilter((num) => num % 2 === 0);
console.log("filterArray2", filterArray2);

const reduceArray1 = arr.reduce((acc, res) => acc + res, 10);
console.log("reduceArray1", reduceArray1);

// polyfill for reduce

Array.prototype.myReduce = function (cb, initialValue) {
  let acc = initialValue;
  for (let i = 0; i < this.length; i++) {
    acc = acc ? cb(this[i], acc, i, this) : this[i];
  }
  return acc;
};
const reduceArray2 = arr.myReduce((acc, res) => acc + res, 10);
console.log("reduceArray2", reduceArray2);

// Call functions are used to invoke immediately with the specified this value and arguments provided individually

let car = {
  color: "red",
  brand: "audi",
};

function purchaseCar(amount, currency) {
  console.log(
    `Virat has purchased a ${this.color} ${this.brand} of ${currency} ${amount} `
  );
}

purchaseCar.call(car, "USD", "10000");

// polyfill for call
const number1 = 6;

Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    console.error("it can only be called on funtion");
  }
  let randomProp = Math.random();
  while (context[randomProp] !== undefined) {
    randomProp = Math.random();
  }
  context[randomProp] = this;
  return context[randomProp](...args);
};

purchaseCar.myCall(car, "INR", "10000");

// Apply function is used to invoke immediately with a specified this value but argumnets provided in an array

purchaseCar.apply(car, [100000, "GBR"]);

Function.prototype.myApply = function (context = {}, args) {
  if (typeof this !== "function") {
    throw new Error("this is not a function");
  }
  if (!Array.isArray(args)) {
    throw new Error("args provided is not array");
  }
  let randomProp = Math.random();
  while (context[randomProp] !== undefined) {
    randomProp = Math.random();
  }
  context[randomProp] = this;
  return context[randomProp](...args);
};
purchaseCar.myApply(car, [100000, "AUS"]);

// bind function creates a new function with the "this" value in parenthesis. In this way , it returns a new 
// function which can be executed later with the this value.

const bindFunction1 = purchaseCar.bind(car,10000,"PKR")
bindFunction1()

Function.prototype.myBind = function(context,...args) {
    if(typeof this !== 'function') {
        throw new Error ("this is not a function")
    }
    let randomProp = Math.random()
    while(context[randomProp] !== undefined) {
        randomProp = Math.random()
    }
    context[randomProp] = this
    return function (...newArgs) {
        return context[randomProp](...args, ...newArgs)
    }
    
}
const bindFunction2 = purchaseCar.myBind(car,10000)
bindFunction2("YUAN")

