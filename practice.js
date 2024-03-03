// polyfill for map function

// const mapArray1 = [2, 4, 5, 6, 7];
// const mapArray2 = mapArray1.map((num) => num * 2);
// console.log("mapArray2", mapArray2);

// Array.prototype.myMap = function (cb) {
//   let temp = [];
//   for (let i = 0; i < this.length; i++) {
//        temp.push(cb(this[i], i, this));
//   }
//   return temp;
// };

// const mapArray3 = mapArray1.myMap((num) => num * 2);
// console.log(mapArray3);

// polyfill for filter

// const filterArray1 = [2, 4, 6, 7, 8, 9];
// const filterArray2 = filterArray1.filter((num) => num % 2 === 0);
// console.log(filterArray2);

// Array.prototype.myFilter = function (cb) {
//   let temp = [];
//   for (let i = 0; i < this.length; i++) {
//     if (cb(this[i], i, this)) {
//       temp.push(this[i]);
//     }
//   }
//   return temp;
// };

// const filterArray3 = filterArray1.myFilter((num) => num % 2 === 0);
// console.log("filterArray3", filterArray3);

// polyfill for reduce

// const reduceArray1 = [1, 2, 3, 4, 5];
// const reduceArray2 = reduceArray1.reduce((acc, res) => acc + res);
// console.log(reduceArray2);

// Array.prototype.myReduce = function (cb, initialValue) {
//   let acc = initialValue;
//   for (let i = 0; i < this.length; i++) {
//     acc = acc ? cb(this[i], acc, i, this) : this[i];
//   }
//   console.log("result", acc);
// };
// reduceArray1.myReduce((acc, res) => acc + res);

// polyfill for call
// call function is used to invoke immeadiately with a specified this value and arguments provided indivisually

let car = {
  color: "black",
  brand: "BMW",
};
function purchaseCar(amount, currency) {
  console.log(`
      Virat has purchased a ${this.color} ${this.brand} of ${currency} ${amount}`);
}

// purchaseCar.call(car, "50000", "USD");

Function.prototype.myCall = function (context, ...args) {
  if (typeof this !== "function") {
    throw Error("Given value is not a function");
  }
  context.fn = this;
  context.fn(...args);
};
purchaseCar.myCall(car, "50000", "USD");

// polyfill for apply
// apply function is same as call , it also invoke immediately with a specified this value but arguments provided in array.

// purchaseCar.apply(car, ["500000", "USD"]);

Function.prototype.myApply = function (context = {}, args) {
  if (typeof this !== "function") {
    throw Error("Given value is not a function");
  }
  if (!Array.isArray(args)) {
    throw new Error("passed arguments is not array");
  }
  context.fn = this;
  context.fn(...args);
};

purchaseCar.myApply(car, ["500000", "USD"]);

// polyfill for bind
// The bind() method creates a new function where this keyword refers to the parameter in the parenthesis. This way the bind() method enables
//  calling a function with a specified this value.

// const newFun = purchaseCar.bind(car);
// newFun("Pkrupees", 200);

Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw Error("this is not a function ");
  }
  context.fn = this;
  // bind function returns a function
  return function (...newArgs) {
    return context.fn(...args, ...newArgs); // this we are executing the  returned function
  };
};

const bindmethod = purchaseCar.bind(car, "50000", "USD");
bindmethod();
