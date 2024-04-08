// polyfill for SetTimeout

function createSetTimeOut() {
  var timerId = 0; // setTimeout returns a id through which we clears the timeout
  var timerMap = {}; // its a map which stores the timer id , if the id has been cleared so
  // we will use it to not run the settimeout again.

  function setTimeoutPolyfill(callback, delay) {
    var id = timerId++; // every time the polyfill is called , an unique id is created
    timerMap[id] = true; // stroing the id with true value in map
    var start = Date.now(); // time at which the callback has been called
    function triggerCallback() {
      // if the id has been claered , it will do nothing
      if (!timerMap[id]) return;
      if (Date.now() > start + delay) {
        // if the time has been passed then it will call the callback function
        callback();
      } else {
        requestIdleCallback(triggerCallback);
        // if the time(delay) has not been passed yet  , then it keep calling itself until the time has passed
      }
    }
        requestIdleCallback(triggerCallback);
    // so trigger callback has been called inside setTimeoutPolyfill
    return id; // returns the timerid
  }

  function clearSetTimeOutPolyfill(id) {
    delete timerMap[id];
  }
  return { clearSetTimeOutPolyfill, setTimeoutPolyfill };
}

var { setTimeoutPolyfill, clearSetTimeOutPolyfill } = createSetTimeOut();

console.log("Start");

var myId = setTimeoutPolyfill(() => {
  console.log("this is mukund");
}, 1000);

console.log("End");

/* 
if we dont use requestIdCallback , then our code got blocked after printing Start and gives Maximium call stack
exceeded error
*/

/* 
The window.requestIdleCallback() method queues a function to be called during a browser's idle periods. 
This enables developers to perform background and low priority work on the main event loop, 
without impacting latency-critical events such as animation and input response.
 Functions are generally called in first-in-first-out order; however, callbacks which have a 
 timeout specified 
may be called out-of-order if necessary in order to run them before the timeout elapses.
*/



