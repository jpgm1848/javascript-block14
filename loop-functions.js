// write a function that generates an array of all the even numbers between 1 and n (exclusive of n)

const evenNumsTo = (n) => {
  // generate an array of all even nums between 1 and n

  const evenNums = [];

  for (i = 1; i < n; i++) {
    if (i % 2 === 0) {
      evenNums.push(i);
    }
  }
  return evenNums;
};

console.log(evenNumsTo(100));

// write a functio that generates an array of n random even numbers between 1 and 100 (a while loop will be better)

const nRandomNums = (n) => {
  const evenNums = [];
  while (evenNums.length < n) {
    const randomNum = Math.floor(Math.random() * 100);
    if (randomNum % 2 === 0) {
      evenNums.push(randomNum);
    }
  }
  return evenNums;
};
console.log(nRandomNums(10));
