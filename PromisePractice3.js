// Promise takes a function as an argument which itself takes two arguments "resolve and reject".
// Promise returns an object with two properties then and catch .
// then and catch also takes a callback as an argument , we need to store them as it will be executed in future
// if function gets resolved , then callback runs , if rejets , then catch callback runs.

const Promise1 = new Promise((resolve, reject) => resolve(500));
Promise1.then((value) => console.log("resolved", value)).catch((value) =>
  console.log("reject", value)
);
// Approach is to start it by writing "then" function and then "resolve"
function PromisePolyfill(executor) {
  let onResolve, onReject, value;
  let isFulfilled = false,
    isRejected = false,
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
      onReject(value);
      isCalled = true;
    }
    return this;
  };
  executor(resolve, reject);
}

PromisePolyfill.all = (promises) => {
  let fulfilledPromises = [];
  let results = [];
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
  return new PromisePolyfill(executor);
};
// this can change to Promises.myAll too
const myall = (promises) => {
  let fulfilledPromises = [];
  let results = [];
  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      promise
        .then((value) => {
          fulfilledPromises.push(true);
          results[index] = value;

          if (fulfilledPromises.length === promises.length) {
            resolve(results);
          }
        })
        .catch((err) => reject(err));
    });
  });
};

const promise2 = new PromisePolyfill((resolve, reject) => reject(1000));
promise2
  .then((value) => console.log("resolve", value))
  .catch((value) => console.log("reject", value));

const prom1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    reject("gfg1");
  }, 5000);
});

const prom2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    reject("error");
  }, 2000);
});

const prom3 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    reject("gfg2");
  }, 1000);
});

// PromisePolyfill.all([prom1, prom2, prom3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((er) => {
//     console.log(er);
//   });

// Promise.myall([prom1, prom2, prom3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((er) => {
//     console.log(er);
//   });

const myRace = (promises) => {
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      promise.then(resolve).catch(reject);
    });
  });
};

const allSettled = (promises) => {
  const fulfilled = [];
  const results = [];
  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      promise
        .then((val) => {
          fulfilled.push(true);
          results[index] = { status: "fulfilled", value: val };

          if (fulfilled.length === promises.length) {
            resolve(results);
          }
        })
        .catch((reason) => {
          fulfilled.push(true);
          results[index] = { status: "rejected", reason: reason };

          if (fulfilled.length === promises.length) {
            resolve(results);
          }
        });
    });
  });
};

const myAny = (promises) => {
  let errors = [];
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      promise.then(resolve).catch((err) => {
        errors.push(err);
        if (errors.length === promises.length) {
          reject(new AggregateError("all promises were rejected", errors));
        }
      });
    });
  });
};

// myRace([prom1,prom2,prom3]).then((val) => console.log(val)).catch((err) => console.log(err)) // whatever the first resolve or reject
// myall([prom1,prom2,prom3]).then((val) => console.log(val)).catch((err) => console.log(err)) // reject or an array of all promises
// allSettled([prom1,prom2,prom3]).then((val) => console.log(val)).catch((err) => console.log(err)) // array of all promises either resolve or reject
// myAny([prom1,prom2,prom3]).then((val) => console.log(val)).catch((err) => console.log(err)) // any resolved promise or aggregate error if all rejected

const btn = document.querySelector(".btn");
const increment_count = document.querySelector(".increment_count");
const trigger_event = document.querySelector(".trigger_event");

let simpleCount = 0;
let eventCount = 0;

const myDebounce = (cb, delay) => {
  let timer;
  return function (...args) {
    if (timer) clearInterval(timer);
    timer = setTimeout(() => cb(...args), delay);
  };
};

const myThrottle = (cb, delay) => {
  let last = 0;
  return function (...args) {
    let now = new Date().getTime();
    if (now - last < delay) return;
    last = now;
    return cb(...args);
  };
};



const debouncePolyfill = myDebounce(() => {
  trigger_event.innerHTML = ++eventCount;
}, 800);

const throttlePolyfill = myThrottle(() => {
  trigger_event.innerHTML = ++eventCount;
}, 1000);

btn.addEventListener("click", () => {
  increment_count.innerHTML = ++simpleCount;
//   debouncePolyfill();
throttlePolyfill()
});
