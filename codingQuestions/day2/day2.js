// 1. Implement a debounce function in JavaScript that limits the frequency of a function’s execution
// when it’s called repeatedly within a specified time frame.

const btn = document.querySelector(".increment_btn");
const click_count = document.querySelector(".click_count");
const event_count = document.querySelector(".event_count");

function debounce(cb, delay) {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}
let eventcount = 0;
let clickcount = 0;
const debouncePolyfill = debounce(() => {
  event_count.innerHTML = ++eventcount;
}, 1000);

btn.addEventListener("click", () => {
  click_count.innerHTML = clickcount++;
  debouncePolyfill();
});

// 2. Write a function that takes an array of objects and a key, and
// returns a new array sorted based on the values of that key in ascending order.

function sortById(arr, key) {
  return arr.slice().sort((a, b) => a[key] - b[key]);
}

const people = [
  { name: "John", age: 25 },
  { name: "Jane", age: 22 },
  { name: "Jack", age: 28 },
  { name: "Jill", age: 24 },
];

function sortByKey(arr, key) {
  return arr.sort((a, b) => {
    if (a[key] < b[key]) {
      return -1;
    }
    if (a[key] > b[key]) {
      return 1;
    }
    return 0;
  });
}

console.log(sortById(people, "age"));
console.log(sortByKey(people, "name"));

// 3. Implement a deep clone function in JavaScript that creates a copy of a nested object or array without any reference to the original.
let obj = {
  name: "mukund",
  age: 23,
};

function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}
console.log(deepClone(obj));

// 4. Write a recursive function to calculate the factorial of a given number.

function recursiveFactorial(num) {
  if (num <= 1) {
    return 1;
  } else {
    return num * recursiveFactorial(num - 1);
  }
}

console.log(recursiveFactorial(5));

// 5 Implement a function that takes two sorted arrays and merges them into a single sorted array
// without using any built-in sorting functions

function mergeSortedArrays(arr1, arr2) {
  let i = 0;
  let j = 0;
  let mergedArray = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }

  return mergedArray;
}

const array1 = [1, 3, 5, 7];
const array2 = [2, 4, 6, 8];
console.log(mergeSortedArrays(array1, array2));

// with built in functions

function mergeSortedArrays2(array1, array2) {
  return [...array1, ...array2].sort((a, b) => a - b);
}

console.log(mergeSortedArrays2([1, 3, 5, 7], [2, 4, 6, 8]));

// 6. Write a function that determines if two strings are anagrams of each other

function checkAnagrams(str1, str2) {
  function check(str1) {
    str1
      .replace("/[^a-zA-Z0-9]/g", "") // removes any non-alphanumberic character
      .toLowerCase() // converts into lowerCase
      .split() // converts string to char array
      .sort() // sort the array alphabetically
      .join(""); // join into a string
  }

  let clean1 = check(str1);
  let clean2 = check(str2);

  return str2 === str2;
}

console.log(checkAnagrams("Listen", "Silent"));

// 7. Create a JavaScript function that returns the Fibonacci sequence up to a given number,
// utilizing memoization for optimized performance.

function FibSequence(num) {
  if (num <= 0) {
    return [];
  }
  if (num === 1) {
    return [0];
  }

  let seq = [0, 1];
  while (seq.length < num) {
    let newNumber = seq[seq.length - 1] + seq[seq.length - 2];
    seq.push(newNumber);
  }
  return seq;
}

console.log(FibSequence(5));

// 8. Implement a function to reverse a string without using the built-in reverse() method.

function reverseString(str) {
  let reversedString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str.charAt(i);
  }
  return reversedString;
}

console.log(reverseString("Mukund"));

// 9. Given an array of numbers, write a function to find the largest and smallest numbers in the array.

function findSmallAndLarge(array1) {
  let min = Math.min(...array1);
  let max = Math.max(...array1);

  return [min, max];
}

console.log(findSmallAndLarge([2, 45, 1, 34, 100]));

//10. Write a function that takes an array of integers as input and returns a new array with only the unique elements.

function uniqueElements(arr) {
  const uniqueSet = new Set(arr);
  return [...uniqueSet];
}

console.log(uniqueElements([1, 2, 3, 2, 1, 4, 5]));
