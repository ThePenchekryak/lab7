function isEvenOrOdd(number) {
  if (typeof number == 'number') {
    return number % 2 ? 'Number is odd' : 'Number is even';
  } else return '';
}
alert(isEvenOrOdd(12));
console.log(isEvenOrOdd(12));

function sumFiveSimpleNumbers() {
  let arr = [];
  let sum = 0;
  newRound: for (let i = 1; i < Infinity; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue newRound;
    }
    arr.push(i);

    if (arr.length == 5) {
      for (let s = 0; s < arr.length; s++) {
        sum += arr[s];
      }
      return sum;
    }
  }
}
alert(sumFiveSimpleNumbers());
console.log(sumFiveSimpleNumbers());

function sum(n) {
  let result = 0;
  let number = 0;
  for (let i = 1; i <= n; i++) {
    number += 10 ** (i - 1);
    result += number;
  }
  return result;
}
alert(sum(6));
console.log(sum(6));
