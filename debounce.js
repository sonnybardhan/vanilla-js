const init = () => {
  const input = document.getElementById('search-input');
  const results = document.getElementById('search-results');

  input.addEventListener(
    'input',
    debounce((e) => {
      // console.log(e.target.value);
      results.textContent = e.target.value;
    }, 250)
  );
};

const debounce = (fn, delay = 1000) => {
  let id;
  return (...args) => {
    if (id) clearTimeout(id);

    id = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

document.addEventListener('DOMContentLoaded', init);
