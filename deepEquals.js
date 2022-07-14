function deepEquals(valueOne, valueTwo) {
  if (typeof valueOne !== typeof valueTwo) {
    console.log('type mismatch');
    return false;
  }

  //numbers
  if (typeof valueOne === 'number' && typeof valueTwo === 'number') {
    if (valueOne === valueTwo) {
      console.log('number match');
      return true;
    } else if (isNaN(valueOne) && isNaN(valueTwo)) {
      console.log('isNaN match');
      return true;
    } else {
      console.log('number mismatch');
      return false;
    }
  }

  //strings
  if (typeof valueOne === 'string' && typeof valueTwo === 'string') {
    if (valueOne === valueTwo) {
      console.log('string match');
      return true;
    } else {
      console.log('string mismatch');
      return false;
    }
  }

  //boolean
  if (typeof valueOne === 'boolean' && typeof valueTwo === 'boolean') {
    if (valueOne === valueTwo) {
      console.log('boolean match');
      return true;
    } else {
      console.log('boolean mismatch');
      return false;
    }
  }

  //symbols
  if (typeof valueOne === 'symbol' && typeof valueTwo === 'symbol') {
    if (valueOne.toString() === valueTwo.toString()) {
      console.log('symbol to string match');
      return true;
    } else {
      console.log('symbol to string mismatch');
      return false;
    }
  }

  //bigints
  if (typeof valueOne === 'bigint' && typeof valueTwo === 'bigint') {
    if (valueOne === valueTwo) {
      console.log('bigint value match');
      return true;
    } else {
      console.log('bigint value mismatch');
      return false;
    }
  }

  if (valueOne === undefined && valueTwo === undefined) {
    console.log('undefined match');
    return true;
  }

  if (valueOne === null && valueTwo === null) {
    console.log('null match');
    return true;
  }

  //arrays
  if (Array.isArray(valueOne) && Array.isArray(valueTwo)) {
    if (valueOne.length !== valueTwo.length) {
      console.log('array length mismatch');
      return false;
    }

    for (let i = 0; i < valueOne.length; i++) {
      if (!deepEquals(valueOne[i], valueTwo[i])) {
        console.log('array recursive check fail ');
        return false;
      }
    }

    console.log('array recursive check pass');
    return true;
  }

  //objects
  if (Object.getPrototypeOf(valueOne) === Object.getPrototypeOf(valueTwo)) {
    if (Object.keys(valueOne).length !== Object.keys(valueTwo).length) {
      console.log('objects keys length mismatch');
      return false;
    }
    if (!deepEquals(Object.keys(valueOne), Object.keys(valueTwo))) {
      console.log('objects recursive keys check fail');
      return false;
    }
    if (!deepEquals(Object.values(valueOne), Object.values(valueTwo))) {
      console.log('objects recursive values check fail');
      return false;
    }

    console.log('objects recursive check pass');
    return true;
  } else {
    console.log('object prototype mismatch');
    return false;
  }
}

// console.log(deepEquals(1, 2));
// console.log(deepEquals([[{}]], [[{}]]));
// console.log(deepEquals([() => {}], [() => {}]));
console.log(deepEquals({ a: { b: {} } }, { a: { x: {} } }));
