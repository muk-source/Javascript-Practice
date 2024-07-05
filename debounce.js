console.log("mukund");
const btn = document.querySelector(".increment_button");
const click = document.querySelector(".click_count");
const event = document.querySelector(".event_count");
var clickCount = 0;
var eventCount = 0;
btn.addEventListener("click", () => {
  console.log("hello");
  click.innerHTML = ++clickCount;
  debounceCount();
  //   throttleCount()
  //   debouncepolyfill();
  //  throttlePolyfill()
});

//Debouncing is a technique that delays the execution of a function until the user stops performing a
// certain action for a specified amount of time. For example, if you have a search bar that fetches
//suggestions from the backend as the user types, you can debounce the function that makes the API call,
//so that it only runs after the user stops typing for a few seconds. This way, you can avoid making too
// many API calls that might overload your server or return irrelevant results.

const debounceCount = _.debounce(() => {
  // that uses the debounce of lodash
  event.innerHTML = ++eventCount;
}, 800);

// polyfill for debounce function
const myDebounce = (cb, delay) => {
  let timer;
  return function (...args) {
    // we have to clear the timeout to ensure the debounce function does not execute if we click the button
    // in less time than delay(800ms) here , otherwise it will run everytime after delay which is not we wanted
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      cb(...args);
    }, delay);
  };
};

const debouncepolyfill = myDebounce(() => {
  event.innerHTML = ++eventCount;
}, 1000);

//Throttling is a technique that limits the execution of a function to once in every specified time interval.
//For example, if you have a resize event handler that adjusts the layout of your page, you can throttle
// the function that updates the layout, so that it only runs once every 100ms.
//This way, you can avoid running your code too frequently, which might cause janky user interface or
//high CPU usage.

const throttleCount = _.throttle(() => {
  event.innerHTML = ++eventCount;
}, 800);

// polyfill for throttle
// in throttle , we calculate the time between the event fired again, so if the event fired again in less time
// then the delay (now - last < delay) , we just return and not do anything but if the event fired after the delay
// we then update the last so that we now the time of current event time and we implement our callback .
const myThrottle = (cb, delay) => {
  let last = 0;
  return function (...args) {
    let now = new Date().getTime();
    if (now - last < delay) return;
    last = now;
    return cb(...args);
  };
};

const throttlePolyfill = myThrottle(() => {
  event.innerHTML = ++eventCount;
}, 800);
