//防抖
function debounce(fn, delay) {
  let timer = null;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, arguments);
    }, delay);
  };
}

//节流
function throttle(fn, delay) {
  let valid = true;
  return function () {
    if (valid) {
      setTimeout(() => {
        fn.apply(this, arguments);
        valid = true;
      }, delay);
      valid = false;
    } else {
      return false;
    }
  };
}
