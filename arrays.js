// const fruitArray = [
//   "blueberries",
//   "grapes",
//   "pineapple",
//   "mango",
//   "dragonfruit",
//   "apples",
// ];

// console.log(fruitArray);
// console.log(fruitArray[0]);

// push adds something to the end, pop removes and returns the last element, shift removes and returns first element, unshift adds to the beginning of an array

const arr = ["red", "yellow", "blue"];

// add to end of array
arr.push("green");
console.log(arr);

// add to beginning of array
arr.unshift("purple");
console.log(arr);

// remove from end of array and assigned to variable
const colorRemovedFromEnd = arr.pop();
console.log(arr);
console.log(colorRemovedFromEnd);

// remove from beginning of array and assigned to variable
const colorRemovedFromBeginning = arr.shift();
console.log(arr);
console.log(colorRemovedFromBeginning);

const slice = arr.slice(1);
console.log(slice);
console.log(arr);

// with two values, slice will copy from the first index to the second index, but it's NOT inclusive of the second index

const twoSlice = arr.slice(1, 2);
console.log(twoSlice);
console.log(arr);
