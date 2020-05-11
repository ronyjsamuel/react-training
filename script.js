console.log("hello World");
const hello = "hello World";
console.log(hello);
//hello = "Hello Suyati";
console.log(hello);



// The let Keyword - Block Scope

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

function sayHello(entity = "World") {
  console.log(`Hello ${entity}!`);
}
sayHello("Suyati");
sayHello();

// END: Default Parameters

// Arrow Functions

const greet = entity => `Hello ${entity}!`;
console.log(greet("Suyati"));

const customGreet = (greet, entity) => {
  if (!greet) {
    greet = "Hello";
  }

  if (!entity) {
    entity = "World";
  }

  return `${greet}, ${entity}`;
};
console.log(customGreet("Hey", "Rony"));

// END: Arrow Functions


// Arrow Functions - A closure

const triveni1 = {
  rivers: ["Ganga", "Yamuna", "Saraswati"],
  display: function (delay = 1000) {
    //setTimeout(function () {
      console.log(this.rivers.join(", "));
    //}, delay);
  }
};

triveni1.display(); // Uncaught TypeError: Cannot read property 'join' of undefined

// const triveni2 = {
//   rivers: ["Ganga", "Yamuna", "Saraswati"],
//   display: function (delay = 1000) {
//     setTimeout(() => {
//       console.log(this.rivers.join(", "));
//     }, delay);
//   },
// };

// triveni2.display();

// END: Arrow Functions - A closure