const increment_btn = document.querySelector(".increment_button");
const click_count = document.querySelector(".click_count");
const event_count = document.querySelector(".event_count");

let clickCount = 0;
let eventCount = 0;

increment_btn.addEventListener("click", () => {
  console.log("Mukund Moona");
  click_count.innerHTML = ++clickCount;
  //   debounceCount();
  //   throttleCount();
  //   debouncePolyfill();
  throttlePolyFill();
});

const debounceCount = _.debounce(() => {
  event_count.innerHTML = ++eventCount;
}, 800);

const throttleCount = _.throttle(() => {
  event_count.innerHTML = ++eventCount;
}, 1000);

// polyfill for debounce and throttle

const myDebounce = (cb, delay) => {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      cb(...args);
    }, delay);
  };
};

const debouncePolyfill = myDebounce(() => {
  event_count.innerHTML = ++eventCount;
}, 1000);

const myThrottle = (cb, delay) => {
  let last = 0;
  return function (...args) {
    let now = new Date().getTime();
    if (now - last < delay) return;
    last = now;
    return cb(...args);
  };
};

const throttlePolyFill = myThrottle(() => {
  event_count.innerHTML = ++eventCount;
}, 1000);
