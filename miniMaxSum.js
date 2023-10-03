function sumArray(arr) {
  return arr.reduce((acc, num) => acc + num, 0);
}

function findMin(arr) {
  return Math.min(...arr);
}

function findMax(arr) {
  return Math.max(...arr);
}

function findEvenElements(arr) {
  return arr.filter((num) => num % 2 === 0);
}

function findOddElements(arr) {
  return arr.filter((num) => num % 2 !== 0);
}

function miniMaxSum(arr) {
  const totalSum = sumArray(arr);
  const min = findMin(arr);
  const max = findMax(arr);
  const evenElements = findEvenElements(arr);
  const oddElements = findOddElements(arr);

  const minSum = totalSum - max;
  const maxSum = totalSum - min;

  console.log("Total of array:", totalSum);
  console.log("Minimum value in array:", min);
  console.log("Maximum value in array:", max);
  console.log("Even elements in array:", evenElements);
  console.log("Odd elements in array:", oddElements);
  console.log("Minimum sum:", minSum);
  console.log("Maximum sum:", maxSum);
}

// input from terminal
if (process.argv.length !== 7) {
  console.log("Please provide 5 numbers");
  return;
}
const arr = process.argv.slice(2).map((num) => parseInt(num));
miniMaxSum(arr);
