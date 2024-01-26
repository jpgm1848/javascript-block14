console.log("Hello World!");

const number = 42;
const string = "Hello World!";
const boolean = true;

function greet(name) {
  console.log(`Hello, ${name}`);
}

const arrowGreet = (personName) => {
  console.log(`Hello (from an arrow function), ${personName}.`);
};

greet("Toby");
arrowGreet("Kara");

if (number > 0) {
  console.log("the number is", number);
} else if (number < 0) {
  console.log("the number is a negative number");
} else {
  console.log("the number is zero");
}
