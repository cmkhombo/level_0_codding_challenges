function maximum(params) {
  let max = -Infinity;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}
let maxNumber = maximum(45, 6, 3, 9, 90, 80, 43, 100, 200);
console.log(maxNumber);
