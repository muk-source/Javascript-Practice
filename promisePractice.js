/*
Promise takes a function as an argument which itself takes two arguments resolve and reject.
It will return an object with two properties then and catch which also accepts a callback . We need to store the 
callback as we have to run them in future.
if function gets resolved , we run the then callback and for reject we run the catch callback
*/

// let promise = new Promise((resolve, reject) => resolve(5000));
// promise.then((value) => console.log(value));

function demoPromise(executor) {
    let onResolve, onReject, value;
    let isFulfilled = false,
      isRejected = false;
    isCalled = false;
  
    function resolve(val) {
      isFulfilled = true;
      value = val;
      if (typeof onResolve === "function") {
        onResolve(val);
        isCalled = true;
      }
    }
    function reject(reason) {
      isRejected = true;
      value = reason;
      if (typeof onReject === "function") {
        onReject(reason);
        isCalled = true;
      }
    }
    this.then = function (callback) {
      onResolve = callback;
      if (isFulfilled && !isCalled) {
        isCalled = true;
        onResolve(value);
      }
      return this;
    };
    this.catch = function (callback) {
      onReject = callback;
      if (isRejected && !isCalled) {
        isCalled = true;
        onReject(value);
      }
      return this;
    };
    executor(resolve, reject);
  }
  
  // let check = new demoPromise((resolve, reject) => reject(7000))
  //   .then((value) => console.log(value))
  //   .catch((value) => console.log(value));
  
  // resolve
  // demoPromise.resolve = (val) =>
  //   new demoPromise((resolve, reject) => resolve(val)).then((val) =>
  //     console.log(val)
  //   );
  
  // demoPromise.resolve(8000);
  
  // reject
  // demoPromise.reject = (val) => {
  //   new demoPromise((resolve, reject) => reject(val)).catch((val) =>
  //     console.log(val)
  //   );
  // };
  
  // demoPromise.reject(10);
  
  demoPromise.all = (promises) => {
    let fulfilledPromises = [],
      results = [];
    function executor(resolve, reject) {
      promises.forEach((promise, index) => {
        promise
          .then((val) => {
            fulfilledPromises.push(true);
            results[index] = val;
            if (fulfilledPromises.length === promises.length) {
              return resolve(results);
            }
          })
          .catch((err) => reject(err));
      });
    }
    return new demoPromise(executor);
  };
  
  Promise.myAll = function (promises) {
    let results = [];
    let fulfilled = [];
    return new Promise((resolve, reject) => {
      promises.forEach((promise, index) => {
        Promise.resolve(promise)
          .then((val) => {
            fulfilled.push(true);
            results[index] = val;
            if (fulfilled.length === promises.length) {
              resolve(results);
            }
          })
          .catch((err) => reject(err));
      });
    });
  };
  function promiseRace(promises) {
    return new Promise((resolve, reject) => {
      promises.forEach((promise) => {
        promise.then(resolve).catch(reject);
      });
    });
  }
  
  const prom1 = new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve("gfg1");
    }, 5000);
  });
  
  const prom2 = new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve("error");
    }, 2000);
  });
  
  const prom3 = new Promise(function (resolve, reject) {
    setTimeout(() => {
      reject("gfg2");
    }, 3000);
  });
  
  const prom4 = new Promise((resolve, reject) =>
    setTimeout(() => resolve("prom4"), 2000)
  );
  
  // demoPromise
  //   .all([prom1, prom2, prom3])
  //   .then((res) => {
  //     console.log(res);
  //   })
  //   .catch((er) => {
  //     console.log(er);
  //   });
  
  // demoPromise
  //   .race([prom1, prom2, prom3])
  //   .then((res) => {
  //     console.log(res);
  //   })
  //   .catch((er) => {
  //     console.log(er);
  //   });
  
  // Promise.myAll([prom1, prom2, prom3])
  //   .then((res) => {
  //     console.log(res);
  //   })
  //   .catch((er) => {
  //     console.log(er);
  //   });
  
  promiseRace([prom1, prom2, prom3])
    .then((res) => {
      console.log(res);
    })
    .catch((er) => {
      console.log(er);
    });