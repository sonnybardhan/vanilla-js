function curry(callback) {
  let previousArgs = [];
  return function inner(...args) {
    if (!args.length) {
      return callback(...previousArgs);
    } else {
      previousArgs.push(...args);
      return inner;
    }
  };
}

const sum = (...nums) => nums.reduce((acc, curr) => acc + curr, 0);

// console.log(sum(1, 2, 3));
// console.log(first)
const curriedSum = curry(sum);
console.log(curriedSum(1)(2)(3)());
