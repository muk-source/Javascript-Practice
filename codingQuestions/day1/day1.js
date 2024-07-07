// 1.Write a JavaScript function to calculate the sum of two numbers.

const sum = (a, b) => a + b;

console.log(sum(2, 3));

// 2.Write a JavaScript program to find the maximum number in an array.

const maxInArray = (array) => {
  let max = -Infinity;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
};
let maxArray = [2, 3, 4, 5, 6, 7];
console.log("maxNum=", maxInArray(maxArray));

// using Math.max

let maxArray2 = [23, 45, 1, 4, 56, 100];

console.log(Math.max(...maxArray2));

//3. Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards).

function checkPalindrome(str) {
  let start = 0;
  let end = str.length - 1;
  while (start < end) {
    if (str.charAt(start) != str.charAt(end)) {
      return false;
    }
    start++;
    end--;
  }
  return true;
}
console.log(checkPalindrome("naman"));

// 4. Write a JavaScript program to reverse a given string.
let palString = "Hello";
let palAns = palString.split("").reverse().join("");
console.log(palAns);

// 5. Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.
let array1 = [2, 4, 5, 6, 7, 8];

const evenNumbers = array1.filter((num) => num % 2 == 0);
console.log("evenNumbers", evenNumbers);

// 6.Write a JavaScript program to calculate the factorial of a given number.
function factorial(num) {
  if (num == 0 || num == 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

let factorialResult = factorial(5);
console.log("factorialResult", factorialResult);

// 7.Write a JavaScript function to check if a given number is prime.
function checkPrime(num) {
  if (num <= 1) {
    return false;
  } else {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i == 0) {
        return false;
      }
    }
  }
  return true;
}

console.log("checkPrime", checkPrime(29));

// 8. Write a JavaScript program to find the largest element in a nested array.

function findLargestElement(nestedArray) {
  let largest = -Infinity;

  function recursiveFind(arr) {
    for (let value of arr) {
      if (Array.isArray(value)) {
        recursiveFind(value);
      } else {
        if (value > largest) {
          largest = value;
        }
      }
    }
  }

  recursiveFind(nestedArray);
  return largest;
}

let nestedArray = [1, [2, 3], [4, [5, 6]], 7, [8, [9, [10]]]];
console.log(findLargestElement(nestedArray));

// 9. Write a JavaScript function that returns the Fibonacci sequence up to a given number of terms.

function fibonacciSequence(num) {
  if (num <= 0) return [];
  if (num == 1) return [0];

  let sequence = [0, 1];
  while (sequence.length < num) {
    let nextNumber =
      sequence[sequence.length - 1] + sequence[sequence.length - 2];
    sequence.push(nextNumber);
  }
  return sequence;
}
console.log(fibonacciSequence(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// 10 Write a JavaScript program to convert a string to title case (capitalize the first letter of each word).

function toTitleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}
console.log(toTitleCase("hello world"));
