function createSetInterval () {
    var intervalId = 1; // function will return an id , so this is a varibale for that 
    var intervalMap = {}; // to clear id , we maintain this in map

    function setIntervalPolyfill(callback,delay) {
        var id = intervalId++; // as this function has been called new id has been generated
        function reiterate() {
            intervalMap[id] = setTimeout(() => { // here we will store the id returned by setTimeout in map 
                callback();                // so as id becomes 2 so for example setTimeout returns with an id like 1234
                if(intervalMap[id]){       // it will store like in IntervalMap = {2:1234}
                    reiterate()
                }
            },delay)
        }
        reiterate();
        return id;
        
    }

    function clearIntervalPolyfill (id) {
        // clearTimeout(intervalMap[id])
        delete intervalMap[id];
    }

    return {clearIntervalPolyfill,setIntervalPolyfill};
}

var {clearIntervalPolyfill,setIntervalPolyfill} = createSetInterval();

var counter = 0
var id = setIntervalPolyfill(() => {
    console.log("Hello Mukund")
    counter++;
    if(counter>=2) {
        clearIntervalPolyfill(id)
    }
},1000);




