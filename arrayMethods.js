// map 
// creates a new array from calling a function for every array element.
const nums = [1,2,3,4]

const multiplyBy3 = nums.map((num) => num*3)
console.log(multiplyBy3)

// we can also pass index as optional parameter
const addIndex = nums.map((num,i) => num*3 + i)
console.log(addIndex)

// filter
const moreThan2 = nums.filter((num) => {
    return num > 2;
})
console.log(moreThan2)

// reduce
const sum = nums.reduce((acc,curr) => {
    console.log("acc:" ,acc , "curr:" , curr)
    acc = acc + curr
    return acc
}, 0)
console.log(sum)

//  polyfill for map
Array.prototype.myMap = function (cb) {
    let temp = []
    for (let i=0;i<this.length;i++){
        temp.push(cb(this[i],i,this))
    }
    return temp
}
const polyfillMap = nums.myMap((num,i,nums) => {
    return num*4
})
console.log(polyfillMap)

// polyfill for filter
Array.prototype.myFilter = function (cb) {
    let temp = [] 
    for(let i=0;i<this.length;i++){
        if(cb(this[i],i,this)){ // checking the condition for filter
            temp.push(this[i])
        }
    }
    return temp
}
const polyfillFilter = nums.myFilter((num,i,nums) => {
    return num > 2;
})
console.log(polyfillFilter)

// polyfill for reduce
Array.prototype.myReduce = function (cb,initialValue) {
    var accumulator = initialValue 
    for(let i=0;i<this.length;i++){
        accumulator = accumulator ? cb(accumulator, this[i], i , this) : this[i]  // checking if accumulator is given as inital value
    }
    return accumulator
}

const polyfillReduce = nums.myReduce((acc,curr,i,nums)=>{
    return acc + curr;
},0)
console.log("polyfill Reduce", polyfillReduce)

// Difference between Map and ForEach
/* 
Map method returns a new array and does not modify the original array while ForEach method modify the original array 
and does not return anything.
Also since map method returns a new array , we can also chain various other methods like filter etc , while this
cannot be done with ForEach
*/

let students = [
    {name:'Iron Man' , rollNo: 1 , score: 80},
    {name:'Captain America', rollNo: 2 , score: 69},
    {name:'Thor', rollNo: 3, score: 35},
    {name:'Vision', rollNo: 4, score: 35}
]
const studentsName = students.map((s) => s.name.toUpperCase())
console.log(studentsName)

const moreThan100 = students.filter((s) => s.score > 100).map((n)=> n.name)
console.log(moreThan100)

const sumOfScore = students.reduce((acc, curr) => acc + curr.score , 0)
console.log(sumOfScore) 
 
const mixedResult = students.filter((stu) => stu.score < 60).map((st) => st.score+20).filter((s)=> s.score > 60).reduce((acc,curr) => acc + curr.score , 0)
console.log(mixedResult)