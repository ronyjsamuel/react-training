console.log('1. First log');
console.log("hello World");
const hello = "hello World";
console.log(hello);
//hello = "Hello Suyati";
console.log(hello);


// The let Keyword - Block Scope
console.log('2. Let');
var b1 = 5;

if (true) {
  var b1 = 10;
  console.log(b1);
}
console.log(b1);

let b2 = 5;
if (true) {
  let b2 = 10;
  console.log(b2);
}
console.log(b2);
// END: The let Keyword - Block Scope


// The let Keyword - Hoisting
console.log('3. Let again');
console.log(c1);
var c1 = 5;

//console.log(c2);
let c2 = 5; // ReferenceError: Cannot access 'c2' before initialization

// END: The let Keyword - Hoisting

// The let Keyword - A step towards closure
var div, container = document.getElementById("container");

for (var i = 0; i < 3; i++) {
  div = document.createElement("div");
  div.onclick = () => {
    alert("This is box #" + i);
  };
  container.appendChild(div);
}

for (let j = 3; j < 6; j++) {
  div = document.createElement("div");
  div.onclick = () => {
    alert("This is box #" + j);
  };
  container.appendChild(div);
}

// END: The let Keyword

// Default Parameters
console.log('4. Default Parameters');
function sayHello(entity = "World") {
  console.log(`Hello ${entity}!`);
}
sayHello("Suyati");
sayHello();

// END: Default Parameters

// Arrow Functions
console.log('5. Arrow Functions');
const greet = entity => `Hello ${entity}!`;
console.log(greet("Rony"));

const customGreet = (greet, entity) => {
  if (!greet) {
    greet = "Hello";
  }

  if (!entity) {
    entity = "World";
  }

  return `${greet}, ${entity}`;
};
console.log(customGreet("Hey", "Jacob"));

// END: Arrow Functions


// Arrow Functions - A closure
console.log('6. Arrow Functions again');
const myName = {
  rivers: ["Rony", "Jacob", "Samuel"],
  display: function (delay = 1000) {
    console.log(this.rivers.join(", "));
  }
};

myName.display(); 

// const myName = {
//   name: ["Rony", "Jacob", "Samuel"],
//   display: function (delay = 1000) {
//     setTimeout(() => {
//       console.log(this.name.join(", "));
//     }, delay);
//   },
// };

// myName.display();

// END: Arrow Functions - A closure


// Destructuring Objects
console.log('7. Destructuring Objects');
const myAddress = {
  houseName: "Sunrise",
  district: "Pathanamthitta",
  state: "KERALA",
  country: "INDIA"
};

const myHouseName = (myAddress) => {
  console.log(`My house name is ${myAddress.houseName}`);
}
myHouseName(myAddress);


// END: Destructuring Objects


// Destructuring Arrays
console.log('8. Destructuring Arrays');
const nicknames = ["Kerala", "Punjab", "Manipur"];
const [southern] = nicknames;
console.log(`Southern state is ${southern}`);

const [, northern,] = nicknames;
console.log(`Nortern states is ${northern}`);

// END: Destructuring Arrays


// Object Literal Enhancement
console.log('9. Object Literal Enhancement');
const houseName = "Sunrise",
  place = "Adoor",
  district = "Pathanamthitta";

const myAddress1 = {
  houseName,
  place,
  district,
  printHouseName() {
    console.log(`My place is ${this.place}`);
  },
};

console.log(myAddress1);
myAddress1.printHouseName();

// END: Object Literal Enhancement


// The Spread Operator
console.log('10. Spread operator');
const epl = [
  "Swansea",
  "Manchester United",
  "Chelsea",  
  "Liverpool",
  "Manchester City",
];
const other = [
  "Real Madrid",
  "Real Betis",
  "Barcelona",
  "Bayern Munich",

];

const southAndNorth = [...epl, ...other];
console.log(`Football clubs : ${southAndNorth.join(", ")}`);

const [,ourState, ...others] = southAndNorth;
console.log(`My favourite : ${ourState}`);
console.log(`Other clubs: ${others.join(", ")}`);

const countryFootball = (...states) => {
  const [nationList, ...rest] = states;
  console.log(`Best country is : ${nationList}.`);
}
countryFootball("Germany", "England", "Portugal");

// END: The Spread Operator

// XMLHttpRequest
console.log('11. XMLHttpRequest available in Network');
function onResponse() {
  var data = JSON.parse(this.responseText);
  console.log(`Response from XHR call: ${data}`);
}

function onError(error) {
  console.log(error);
}

var xhrRequest = new XMLHttpRequest();
xhrRequest.onload = onResponse;
xhrRequest.onerror = onError;
xhrRequest.open('get', 'http://jsonplaceholder.typicode.com/posts', true);
xhrRequest.send();

// END: XMLHttpRequest

// jQuery Ajax
console.log('12. jQuery Ajax');
$.ajax("http://jsonplaceholder.typicode.com/posts")
  .then(function (data) {
    console.log(`Response from AJAX call: ${data}`);
  })
  .catch(function (error) {
    console.log(error);
  });

// END: jQuery Ajax

// Fetch API
console.log('11. Fetch API');
fetch("http://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    if (response.status !== 200) {
      throw new Error(`Request failed with status - ${response.status}`);
    }

    // response is a stream
    response.json().then((data) => {
      console.log(`Response from Fetch call: ${data}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });


console.log('12. Fetch API again');
const getPosts = () => {
  return fetch("http://jsonplaceholder.typicode.com/posts")
  .then(res => res.json())
  .then(posts => console.log(posts))
}

// END: Fetch API

// OOP prior to ES6
console.log('13. OOP prior to ES6');
function PersonClass2(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

PersonClass2.prototype.print = function () {
  console.log(
    `{ firstName: "${this.firstName}", lastName: "${this.lastName}" }`
  );
};

const vaisakh2 = new PersonClass2("Rony", "Samuel");
vaisakh2.print();

// END: OOP prior to ES6


// ES6 Classes
console.log('14. ES6 Classes');
class PersonClass1 {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  print() {
    console.log(
      `{ firstName: "${this.firstName}", lastName: "${this.lastName}" }`
    );
  }
}

const name1 = new PersonClass1("Rony", "Samuel");
name1.print();

PersonClass1.prototype.greet = function () {
  console.log(`Hey "${this.lastName}, ${this.firstName}"`);
};
name1.greet();

// END: Classes
console.log('Q : IS FETCH API AN ECMASCRIPT FEATURE?');
console.log('FETCH API is not an ECMAScript feature. It is a  Browser Object Model which are defined by the standards bodies WHATWG and W3C');
