function miniMaxSum(arr) {
  let min = Number.MAX_SAFE_INTEGER;
  let max = Number.MIN_SAFE_INTEGER;
  let totalSum = 0;
  const evenElements = [];
  const oddElements = [];

  for (let i = 0; i < arr.length; i++) {
    totalSum += arr[i];

    if (arr[i] < min) {
      min = arr[i];
    }

    if (arr[i] > max) {
      max = arr[i];
    }

    if (arr[i] % 2 === 0) {
      evenElements.push(arr[i]);
    } else {
      oddElements.push(arr[i]);
    }
  }

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
