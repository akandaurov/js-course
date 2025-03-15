(function () {
  const a = 47645763576;
  console.log('Hello from script2');
  console.log({ aFromScript2: a, location: location.href });
})();

const fizzBuzz = (n) => {
  if (n % 15 === 0) {
    console.log('FizzBuzz');
    return;
  }
  if (n % 3 === 0) {
    console.log('Fizz');
    return;
  }
  if (n % 5 === 0) {
    console.log('Buzz');
    return;
  }

  console.log(n);
};

for (let i = 1; i <= 30; i++) {
  // fizzBuzz(i);
}

function checksum(str) {
  let sum = 0;

  for (let i = 0; i < str.length; i++) {
    sum += str.charCodeAt(i);
  }
  return sum;
}
