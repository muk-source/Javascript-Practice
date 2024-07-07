// 1. Given a string, write a function to count the occurrences of each character in the string.

function charCount(str) {
  let charCount = {};
  let st = str.replace(/[^a-zA-Z0-9]/g, "");

  for (let char of st) {
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }
  return charCount;
}

console.log(charCount("This is mukund"));

// 2.Write a function that reverses the order of words in a sentence without using the built-in reverse() method.

function reverseWordsInSentence(sentence) {
  sentence = sentence.trim();

  let words = sentence.split(/\s+/);

  words.reverse();

  return words.join(" ");
}
console.log(
  reverseWordsInSentence("   Hello  world!   This   is   a   test.   ")
);

// 3.Write a function that takes an array of integers and
//returns the largest difference between any two numbers in the array.

function largestDifference(array) {
  let minEle = array[0];
  let maxEle = array[0];

  for (let i = 1; i < array.length; i++) {
    minEle = Math.min(minEle, array[i]);
    maxEle = Math.max(maxEle, array[i]);
  }

  return maxEle - minEle;
}

console.log(largestDifference([7, 1, 5, 3, 6, 4]));

// 4.Implement a function that finds the second smallest element in an array of integers.

function secondSmallest(array) {
  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (let ele of array) {
    if (ele < smallest) {
      secondSmallest = smallest;
      smallest = ele;
    } else if (ele < secondSmallest && ele !== smallest) {
      secondSmallest = ele;
    }
  }
  return secondSmallest;
}

console.log(secondSmallest([7, 1, 5, 3, 6, 4]));

// 5.Write a function that removes all falsy values (false, null, 0, “”, undefined, and NaN) from an array.

function removeFalsyValues(arr) {
  let result = [];
  arr.forEach((value) => {
    if (value) {
      result.push(value);
    }
  });
  return result;
}

console.log(
  removeFalsyValues([0, 1, false, 2, "", 3, null, "a", undefined, NaN, "b"])
);

// another approch
function removeFalsy(arr) {
  return arr.filter(Boolean); // Boolean act as a callback function which check a value is truthy or falsy and returns the trythy values
}

console.log(
  removeFalsy([0, 1, false, 2, "", 3, null, "a", undefined, NaN, "b"])
);
