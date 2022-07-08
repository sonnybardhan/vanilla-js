import fetch from 'node-fetch';

const sum = (...args) => {
  console.log(typeof args);
  return [...args].reduce((acc, num) => (acc += num));
};

// console.log(sum(1, 2, 3));

// decorator
const callCounter = (fn) => {
  let counter = 0;
  return (...args) => {
    console.log(fn(...args));
    counter += 1;
    console.log(
      `function '${fn.name}' called ${
        counter === 1 ? 'once' : `${counter} times`
      } `
    );
  };
};

// const sumCounter = callCounter(sum);
// sumCounter(1, 1, 1);
// sumCounter(2, 2, 2);
// sumCounter(3, 3, 3);

function names(fname, lname) {
  console.log();
}

// console.log(names.length);

// console.log(sum.length);

// function test(x) {}

// console.log(test.length);

let getArea = (l, b) => {
  return l * b;
};

const argsLengthCheck = (fn) => {
  return (...params) => {
    if (params.length !== fn.length) {
      throw new Error(
        `${fn.name} requires ${fn.length} parameters, received ${params.length}.`
      );
    }
    return fn(...params);
  };
};

const typeCheck = (fn) => {
  const fnName = fn.name;
  return (fnName, ...params) => {
    params.forEach((param) => {
      if (!Number.isInteger(param))
        throw new Error(`${fnName} only accepts integers`);
    });
    return fn(...params);
  };
};

getArea = argsLengthCheck(getArea);
getArea = typeCheck(getArea);

// console.log(getArea(10));
// console.log(getArea(10.1, 10));

//=================ASYNC DECORATORS==========
const URL = `https://jsonplaceholder.typicode.com/posts`;

let requestData = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data);
    return data;
  } catch (err) {
    console.log('caught!');
    console.error(err);
  }
};

const dataResponseTime = (fn) => {
  const name = fn.name;
  return async (url) => {
    console.time(name);
    const data = await fn(url);
    console.timeEnd(name);
    return data;
  };
};

const myTest = async () => {
  requestData = dataResponseTime(requestData);
  const data = await requestData(URL);
  console.log(data.length);
};

myTest();
