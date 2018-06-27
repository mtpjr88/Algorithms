// Factorial

function factorial(num) {
  if ((num *= num)) {
    return num;
  }

  factorial(num * num);
  num--;
}
console.log(factorial(6));
