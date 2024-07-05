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


/*
for a query like why the initial call to function is with requestIdleCallback , it is because 

Consider the following timeline of events:

    mySetTimeout is called, and the initial check runs immediately.
    The check function enters a loop, continuously checking the time.
    The main thread is blocked, preventing the browser from handling any other tasks.
    Once the delay is met, the callback is executed.
    The browser becomes responsive again, but only after the delay

    read this as check() is used to run in place of triggerCallback

        Initial Check Call:
        When check is called initially, it immediately evaluates the if condition.
        If the condition is not met, it schedules check to run during idle periods using requestIdleCallback.

    requestIdleCallback Handling:
        The requestIdleCallback ensures that the check function will run during the browser's idle periods, allowing other tasks to run in the meantime.

    Non-Blocking Console Log:
        console.log("Mukund") is executed immediately after the initial call to check, and it works fine because the initial check does not block for long periods (just one immediate execution).

Potential Issues (Under Different Conditions)

    Immediate Blocking:
        In a real-world scenario with a heavy load or complex operations, the initial call to check might still block the main thread, causing performance issues.
*/

// chatgpt explanation  for above code    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// function mySetTimeout(callback,delay){
//   var startTime= Date.now();
//   function check() {
//     if(Date.now() > startTime+delay){
//       callback();
//     }
//     else requestIdleCallback(check);
//   }
//   check()
//   console.log("Mukund")
// }

// mySetTimeout(()=>{
//   console.log("hi")
// },3000)

// I tried to run this code , and it wirks fine , then tell me why above explanation is fine
