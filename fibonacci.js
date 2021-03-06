//fibonacci sequence
// using for loop

function fibonacci(num) {
  var fibo = [0, 1];

  if (num <= 2) return 1;

  for (var i = 2; i <= num; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }
  console.log(fibo);

  return fibo[num];
}

console.log(fibonacci(6));
// Probably a better solution

function fibo(num) {
  if (num < 2) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibo(6));
