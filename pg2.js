// function test() {
//   return 'hello';
// }

// const fn1 = test;
// const fn2 = test;

// console.log(fn1 === fn2);
// console.log(fn1 );

function ff() {
  return () => 'sonny';
}

const fn1 = ff();
const fn2 = ff();
// console.log(fn1() === fn2());
// console.log(fn1());

console.log(fn1);
