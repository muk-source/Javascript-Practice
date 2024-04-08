/* 

So in javascript we can flatten the array in two ways
1.Using Flat() method in Javascript
2. Recursively flat an array (Pollyfill)

flat() method
The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
It does not mutate the original array; instead, it returns a new array.
It removes nested arrays and flattens the array structure.
*/

// const ar = [1,2,[3,4,[5,6]]]
// const newarr = ar.flat()
// console.log(newarr)

// The flat() method in JavaScript has an optional parameter depth that specifies the depth level specifying 
// how deep a nested structure should be flattened. If the array has more nested levels than the specified
//  depth, those deeper nested arrays remain untouched.

const arr = [1, 2, [3, [4, [5]]]];

const flattenedDepth1 = arr.flat(1);
console.log(flattenedDepth1); // [1, 2, 3, [4, [5]]]

// Flatten with depth 2
const flattenedDepth2 = arr.flat(2);
console.log(flattenedDepth2); // [1, 2, 3, 4, [5]]

// Flatten with depth 3 (or more)
const flattenedDepth3 = arr.flat(3);
console.log(flattenedDepth3); // [1, 2, 3, 4, 5]


// polyfill for flatten array

function flattenArray(testarr) {
    return testarr.reduce((prevValue,currentValue) => {
        if(Array.isArray(currentValue)) {
            prevValue = prevValue.concat(flattenArray(currentValue))
        }else {
            prevValue.push(currentValue)
        }
        return prevValue;
    },[])
}

const ansArray = flattenArray([1, 2, [3, [4, [5]]]])
console.log("ansArray:" , ansArray)

// explanation
/* 
so we are passing initial value as empty array which will act as prevValue
in ist iteration 
prevVlaue = []
current Value = 1
so 
prevValue = [1]

in 2nd iteration 
prevVlaue = [1]
current Value = 2
so 
prevValue = [1,2]

in 3rd iteration 
prevValue = [1,2]
current value =  [3, [4, [5]]]
since this is array, recursive function will be called
now for recursive function 

ist iteration of recursive function 
prevVlaue = []
current Value = [3]
so 
prevVlaue = [3]

2nd iteration of recursive 
prevVlaue = [3],
currValue = [4, [5]]
this is array , so another recursice function is being called
now 1 iteration of this recur func
prevValue = []
currValue = 4
sp 
prevValue = [4]

now 2 iteration of recur func
prevVlaue = [4],
currValue = [5]

another recursice approach 
prevVlaue = []
currValue = 5
so prevValue = [5]

so when all these prev Vlaues are returned , they are concatenated by using concat()
*/