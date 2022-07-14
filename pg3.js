//this keyword

function logthis(input1, input2) {
  console.log(this, input1, input2);
}

const obj = {
  name: 'sonny',
};

// logthis.call(obj, 1);

// logthis.apply(obj, [1, 2]);

const newLogthis = logthis.bind(obj);

// newLogthis(10, 20);

const arr = [1, 2, 3];

arr.forEach(function (val) {
  console.log(val, this);
}, arr);
