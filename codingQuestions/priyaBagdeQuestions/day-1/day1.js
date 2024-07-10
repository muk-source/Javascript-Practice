// Code 1: Remove Duplicate characters from String

function removeDuplicateCharacters(str) {
  return str
    .split("")
    .filter((item, index, array) => {
      return array.indexOf(item) === index;
    })
    .join("");
}

console.log(
  "removeDuplicateCharacters-->",
  removeDuplicateCharacters("priya riya supriya")
);

// Code 2: Remove Duplicate characters from array of element and find the count of an elements using set object

function removeDuplicateElements(arr) {
  let uniqueSet = new Set(arr);
  return [...uniqueSet];
}

console.log(
  "removeDuplicateElements ---->",
  removeDuplicateElements([
    55, 44, 55, 67, 67, 67, 67, 8, 8, 8, 8, 8, 65, 1, 2, 3, 3, 34, 5,
  ])
);

// Code 3: Remove Duplicate characters from array of element using filter
var myArray = ["a", 1, "a", 2, "1"];
var newArray = myArray.filter((item, index) => myArray.indexOf(item) === index);
console.log("new Array-->", newArray);

// Code 4 String reverse with Individual words not get reversed

function reverseStringWithoutIndividualWords(str) {
  return str.split(" ").reverse().join(" ");
}

console.log(
  "reverseStringWithoutIndividualWords-->",
  reverseStringWithoutIndividualWords("India is my country")
);

// Code 5 String reverse with Individual words also get reversed

function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log("reverseString-->", reverseString("India is my country"));

// Code 6 Individual Words get reversed not string

function reverseIndividualWordsInString(str) {
  let strArray = str.split(" ");

  let reverseWords = strArray.map((word) => word.split("").reverse().join(""));

  return reverseWords.join(" ");
}

console.log(
  "reverseIndividualWordsInString-->",
  reverseIndividualWordsInString("India is my country")
);

// Code 7 check Anagram

function checkAnagram(str1, str2) {
  function check(str) {
    return str
      .replace(/[^a-zA-Z0-9]/g, "")
      .toLowerCase()
      .split("")
      .sort()
      .join("");
  }
  str1 = check(str1);
  str2 = check(str2);
  return str1 === str2;
}

console.log("check Anagrams", checkAnagram("Army", "Mary"));

// Code 8 Swapping of two numbers with third Variable

let a = 10;
let b = 20;
let c;
c = a;
a = b;
b = c;
console.log("Swapping-->", a, b);

// code 9 Swapping without using third variable

let a1 = 30;
let b1 = 40;

a1 = a1 + b1;
b1 = a1 - b1;
a1 = a1 - b1;

console.log("Swapping without using variable-->", a1, b1);

// code 10 check palindrome String

function checkPalindrome(str) {
  str = String(str);
  let newStr = str.split("").reverse().join("");
  if (str === newStr) {
    console.log("palindrome");
  } else {
    console.log("not palindrome");
  }
}

checkPalindrome("naman");

// code 11 longest word in string

function longestWord(str) {
  let longest = " ";
  let words = str.split(" ");
  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}

console.log("longestWord-->", longestWord("supriya is a masooooom good girl"));

// longest word using function

function longestWordUsingInbuiltFunction(str) {
  let longest = str.split(" ").sort((a, b) => b.length - a.length);
  console.log(longest[0]);
}

longestWordUsingInbuiltFunction("supriya is a masooooom good girl");

// Code 12  To find longest common substring from array of strings

function longestCommonSubstring(arr) {
  let sortArray = arr.sort();
  let sampleString = arr[0];
  let i = 0;
  while (
    arr[0].length > 0 &&
    arr[0].charAt(i) === arr[arr.length - 1].charAt(i)
  ) {
    i++;
  }
  console.log(arr[0].substring(0, i));
}

longestCommonSubstring(["goo", "google", "gosh"]);

// Code 13 To find vowels and its count in a given string

function findVowels(str) {
  str = str.toLowerCase();
  let vowelsArray = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowelsArray.includes(str.charAt(i))) {
      count++;
    }
  }
  return count;
}

console.log("Vowels Count-->", findVowels("mUkund"));

// Code 14 To find character occurance fro the string

function characterOccurence(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (obj[str.charAt(i)]) {
      obj[str.charAt(i)]++;
    } else {
      obj[str.charAt(i)] = 1;
    }
  }
  return obj;
}

console.log("characterOccurencce-->", characterOccurence("hello mukund"));

// Code 15  To find a first pair whose sum is zero

function ZeroSumPair(arr) {
  let map = {};
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let currentNum = arr[i];
    let counterNum = -currentNum;
    if (map[counterNum] !== undefined) {
      result = [currentNum, counterNum];
      break;
    }
    map[currentNum] = i;
  }
  return result;
}

console.log("ZeroSumPair-->", ZeroSumPair([2, -3, 1, 5, -2, -1]));
