const init = () => {
  document.addEventListener('scroll', logScroll);
};

let logScroll = () => console.log('scrolling!');

const throttle = (fn, delay = 1000) => {
  let lastTime = 0;
  let id = 0;
  return (...args) => {
    console.log(Math.random() * 10);
    let now = new Date().getTime();
    if (now - lastTime < delay) return;
    lastTime = now;
    fn(...args);
  };
};

logScroll = throttle(logScroll);

document.addEventListener('DOMContentLoaded', init);
