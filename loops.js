// a for loop is good for when the condition isn't known, and a while loop for when the condition is specific

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// while loop

// let num = 5;
// while (num < 10) {
//   console.log("our current number is " + num);
//   num++;
// }
// console.log("end of loop");

const fruitArray = [
  "blueberries",
  "grapes",
  "pineapple",
  "mango",
  "dragonfruit",
  "apples",
];

// this for loop will print array items by their index
// for (let i = 0; i < fruitArray.length; i++) {
//   console.log(fruitArray[i]);
// }

// this while loop will remove items from the array until it's empty

while (fruitArray.length > 0) {
  const removedFruit = fruitArray.pop();
  console.log(removedFruit);
}
console.log("loop is over, the array is now ", fruitArray);
