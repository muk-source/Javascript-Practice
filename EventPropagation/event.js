const btn = document.querySelector("button");
const div = document.querySelector("div");
const form = document.querySelector("form");

// event bubbling--> when i click on button (target element) then the event bubbles out and goes to the parent
// and therefore i also see the alert for div and form --> bottom-up\ this is the default process that happens

// btn.addEventListener("click", () => alert("this is button"))
// div.addEventListener("click", () => alert("this is div"))
// form.addEventListener("click", () => alert("this is form"))

// events do not bubble --> focus , blur etc

// diff between event.target , event.current.target , this.target

// event.target.tagName just gives the target element even if it bubble out while the other two bubbles out
// and gives the respective tag Name

// function func(event) {
//     alert("target" + event.target.tagName + " currentTarget " + event.currentTarget.tagName + " this " + this.tagName)
// }

// btn.addEventListener("click", func);
// div.addEventListener("click", func);
// form.addEventListener("click", func);

// event capturing executes from top to down .

// so if i only apply capture to div , then it will be div --> button --> form because button and form are default doing event bubbling and not capturing.

// div.addEventListener("click", () => alert("this is div"), { capture: true });
// form.addEventListener("click", () => alert("this is form"));
// btn.addEventListener("click", () => alert("this is button"), );

// so i want to stop event bubbling we can make use of event.stopPropagation()

  
// if i want to stop propagation at form so i will write e.stopPropagation() there


// div.addEventListener("click", () => alert("this is div"));
// form.addEventListener("click", () => alert("this is form"));
// btn.addEventListener("click", (e) => {
// e.stopPropagation()
// alert("this is button")
// })



// Event delegation is a technique used in JavaScript to handle events efficiently, especially when dealing with a large number of elements. Instead of attaching event listeners directly to individual elements,
// event delegation involves attaching a single event listener to a parent element that will react to events triggered by its child elements.

// When an event occurs on a child element, it bubbles up to its parent elements in the DOM hierarchy. 

// Event delegation takes advantage of this bubbling mechanism. The event listener attached to the parent element can then determine the target of the event and handle it accordingly.

document.getElementById('parent-list').addEventListener('click', function(event) {
    // Check if the clicked element is an <li> element
    if (event.target.tagName === 'LI') {
      // Handle the click event
      alert('Clicked on ' + event.target.innerText);
    }
  });


// imp things about prototype
// prototype is an internal hidden property that gets attached to every object in js
// and since every it is internal and hidden , it cannot be accessed directly , it is accessed through __proto__ method

/* 
let arr = ["mukund", "moona"]
console.log(arr.__proto__) --> this will give an object 
console.log(Array.prototype) -- > this will also give an object which is same as above.

Now since arr.__proto__ gives an object and we know that every object has its prototypr , so this will also 
have its prototype also 
console.log(arr.__proto__.__proto__) --> this will give the Object Prototype
console.log(Object.prototype) --> same as above
this means that every thing in js inherits the Object prototype and hence we can say that everything in js is object.

after that if we try to access the prototype of ObjectPrototype , then it gives us null and this makes the prototype chain.
and it ends to null

example
let object1 = {
    name: "mukund",
    city: "kasganj",
    getIntro : function () {
        console.log(this.name + "is from" + this.city)
    }
}

let object2 = {
    name: "Virat"
}

object2.__proto__ = object1 // now this makes every property of object1 can be accessed through object2
like I can 
console.log(object2.city) ---> "kasganj"
*/
    
