function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  let avg = 0;
  for (let i = 0; i < arr.length; i++)
      if (arr[i] < min) {
          min = arr[i];
      }
  for (let i = 0; i < arr.length; i++)
      if (arr[i] > max) {
          max = arr[i];
      }
  for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
  }
  avg = sum / arr.length;

  return {
      min: min,
      max: max,
      avg: +avg.toFixed(2)
  };
}

function summElementsWorker(...arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {

  let min = arr[0];
  let max = arr[0];
  let difference = 0;
  for (let i = 0; i < arr.length; i++)
      if (arr[i] < min) {
          min = arr[i];
      }
  for (let i = 0; i < arr.length; i++)
      if (arr[i] > max) {
          max = arr[i];
      }
  if (arr[0] > -Infinity)
      difference = max - min;
  return difference;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) {
      if (Math.floor(arr[i] / 2) == arr[i] / 2) {
          sumEvenElement += arr[i];
      } else sumOddElement += arr[i];
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {

  let sumEvenElement = 0;
  let element = 0;
  if (arr[0] > -Infinity) {
      for (let i = 0; i < arr.length; i++) {
          if (Math.floor(arr[i] / 2) == arr[i] / 2) {
              sumEvenElement += arr[i];
              element++;
          }
      }
  }

  return sumEvenElement / element;
}

function makeWork(arrOfArr, func) {
  let max = 0;
  let sum = 0;
  arrOfArr = -Infinity;
  func = arrOfArr[0];
  console.log(f)
  for (let i = 0; i < arrOfArr.length; i++) {
      sum += arrOfArr[i];
  }

  for (let i = 0; i < arrOfArr.length; i++) {
      let sum = func(arrOfArr[i]);
      if (max > sum) {
          max = sum;
      }
  }
  return sum;
}