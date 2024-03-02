//Ques1
// console.log("start") 
// const promise = new Promise((resolve,reject) => {
//     console.log(1)
//     resolve(2)
// })
// promise.then((res)=>{
//     console.log(res)
// })
// console.log("end") // -> start 1 end 2      


//Ques2
// console.log("start")

// const fn = () => 
//     new Promise((resolve,reject) => {
//         console.log(1);
//         resolve("success");
//     })

// console.log("middle")

// fn().then((res) => {
//     console.log(res);
// })

// console.log("end")

//Ques3
// function job() {
//     return new Promise((resolve,reject) => {
//         reject()
//     })
// }

// const promise = job()

// promise.then(() => {
//     console.log("Success 1")
// }).then(() => {
//     console.log("success 2")
// }).then(() => {
//     console.log("Success 3")
// }).catch(() => {
//     console.log("Error1")
// }).then(() =>{
//     console.log("success after error")
// })


// Ques 4 

// function job(state) {
//     return new Promise((resolve,reject) => {
//         if(state) {
//             resolve("success")
//         }else {
//             reject("error")
//         }
//     })
// }

// let promise = job(true)

// promise.then((data) => {
//     console.log(data)
//     return job(true)
// }).then((data) => {
//     if(data!=="victory"){
//         throw "Defeat" // it is giving error , rejecting the promise
//     }
//     return job(true)
    
// }).then((data) => {
//     console.log(data)
// }).catch((error)=> {
//     console.log(error)
//     return job(false)
// }).then((data) =>{
//     console.log(data)
//     return job(true)
// }).catch((error) => {
//     console.log(error)
//     return "Error Caught" // it will be act as resolved as it is just a string that is returnning
// }).then((data) => {
//     console.log(data)
//     return new Error("test") // this also act as resolved promisee
// }).then((data) => {
//     console.log("Success :" , data.message) // this will run and print "test"
// }).catch(() => {
//     console.log("Error : " , data.message)
// })

// Ques5 
// task is that we have an array that have many promises , and we have to resolve that recursively
// let funcPromises = ["Promise1", "promise2"]
// const recurPromises = (funcPromises) => {
//     if(funcPromises.length === 0) {
//         return;
//     }
//     const currPromise = funcPromises.shift()
//     currPromise.then((res) => {
//         console.log(res)
//     }).catch((err) => console.error(err))
//     recurPromises(funcPromises);  // calling recursively
// }


// Ques6 - promise polyfill
// so a simple promise will look like this-->
// let promise = new Promise((resolve,reject) => setTimeout(() => resolve(1000),1000))
// // and then implementation will look like this
// promise.then((res) => {
//     console.log(res)
// }).catch((err) => {
//     console.log(err)
// })

// function PromisePolyfill (executor) {
//     let onResolve,onReject,isFulfilled = false,isRejected = false,isCalled = false, value;

//     function resolve(val) {
//         isFulfilled = true
//         value = val;
//         if(typeof onResolve === "function"){
//             onResolve(val)
//             isCalled = true
//         }
        
//     }

//     function reject(val) {
//         isRejected = true
//         value = val
//         if(typeof onReject === "function"){
//             onReject(val)
//             isCalled = true
//         }
        
//     }

//     this.then = function (callback) {
//         onResolve = callback;
//         if(isFulfilled && !isCalled) {
//             isCalled = true
//             onResolve(value)
//         }
//         return this;
//     }
    
//     this.catch = function (callback) {
//         onReject = callback
//         if(isRejected && !isCalled) {
//             isCalled = true
//             onReject(value)
//         }
//         return this
//     }
//     try {
//         executor(resolve,reject)
//     } catch (error) {
//         reject(error)
//     }
    
// }

/// ----------------------------

// PromisePolyFill.resolve = (val) =>
//   new PromisePolyFill(function executor(resolve, _reject) {
//     resolve(val);
//   });

// PromisePolyFill.reject = (reason) =>
//   new PromisePolyFill(function executor(resolve, reject) {
//     reject(reason);
//   });

// const examplePromise = new PromisePolyfill((resolve,reject) => setTimeout(() => reject(1000),1000))
// examplePromise.then((res) => {
//     console.log(res)
// }).catch(err => console.error(err))

// so the above is the polyfill for whole promise implementation 

// Ques -- just make a polyfill for promise for promise.all()

Promise.allPolyfill = (promises) => { // here promises is an array as there will be many promises when we use Promise.all 
    return new Promise ((resolve,reject) => { // we have to return Promise because only then we can use the "then" and "catch" function 
        let result = [] // output array as Promise.all gives output as array
        if(!promises.length) {
            resolve(result)
        }
        let pending = promises.length
        promises.forEach((promise,index) => {
            Promise.resolve(promise).then((res) => {
                result[index] = res
                pending--
                if(pending === 0 ) {
                    resolve(result)
                }
            },reject)
        });
    })
}

const prom1 = new Promise(function (resolve, reject) { 
    setTimeout(() => { 
        resolve("gfg1") 
    }, 1000) 
}) 
  
const prom2 = new Promise(function (resolve, reject) { 
    setTimeout(() => { 
        reject("error") 
    }, 2000) 
}) 
  
const prom3 = new Promise(function (resolve, reject) { 
    setTimeout(() => { 
        resolve("gfg2") 
    }, 3000) 
}) 

Promise.allPolyfill([ 
    prom1, 
    prom2, 
    prom3 
]) 
    .then((res) => { 
        console.log(res); 
    }) 
    .catch((er) => { 
        console.log(er) 
    })



