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
  if (arr.length === 0) return 0;
  let min = arr[0];
  let max = arr[0];
  for (let i = 0; i < arr.length; i++){
      if (arr[i] > max) {
        max = arr[i];
      }
      if (arr[i] < min) {
        min = arr[i];
      }
    }
      
  return max - min;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) return 0;
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) {
      if (Math.floor(arr[i] / 2) == arr[i] / 2) {
          sumEvenElement += arr[i];
      } else {sumOddElement += arr[i];
  }
}
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) return 0;

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

  let maxForResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++){

    let result = func(...arrOfArr[i]);
    if (result >  maxForResult){
      maxForResult = result;
    }
  }

  return maxForResult;
}