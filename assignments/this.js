/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.

// GREAT REFERENCES -https://alligator.io/js/this-keyword/
-https://gist.github.com/zcaceres/2a4ac91f9f42ec0ef9cd0d18e4e71262
-https://tylermcginnis.com/this-keyword-call-apply-bind-javascript/

* 1. global binding: sets the value of the 'this' keyword to the window/console object. (not recommended to use. also: const and let arent stored at global level but var is).
* 2. implicit binding: very commonly used binding. 'this' keyword points to the object on which the function is called. Applies when calling a method to an object. (what is left of the '.' ex: this.value)
* 3. new bindings: creates a new object and 'this' points to the new object. ex: let myFunction = new Function('this is the new function').
* 4. explicit binding: binding of 'this' occurs when .call(), .apply(), or .bind() are used on a function. ex: .apply(yourObject, thingsYouEnjoy) <--- prior objects.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
// name = "PJ WISE"

/* function sayName(name) {
    console.log(this);
    // console.log(name);
  }
  sayName(); */

// Principle 2

// code example for Implicit Binding

const user = {
    "intro": "Here's my info:",
    shareInfo: function(name, age){
      console.log(`${this.intro} ${name} age:${age}`);
    }
  }
  
  user.shareInfo("PJ", 22);


// Principle 3

// code example for New Binding

function evenMoreInfo(data) {
    this.name = data.name;
    this.dob = data.dob;
    this.location = data.location;
    this.printInfo = function(){
        console.log(`Hi! My name is ${this.name}, my birthday is ${this.dob} and I was born in ${this.location}!`);
    };
  }

  const PJ = new evenMoreInfo({
    "name": "PJ",
    "dob": "01/17/1997",
    "location": "Illinois"
 });

 PJ.printInfo();

// Principle 4
// code example for Explicit Binding

const sammi = new evenMoreInfo({
    "name": "Sammi",
    "dob": "10/25/1990",
    "location": "Maryland"
 });

PJ.printInfo.call(sammi); 
 

