function calculateArea(firstNumber, secondNumber, thirdNumber) {
  let totalSides = (firstNumber + secondNumber + thirdNumber) / 2;
  let area = Math.sqrt(
    totalSides *
      ((totalSides - firstNumber) *
        (totalSides - secondNumber) *
        (totalSides - thirdNumber))
  );
  return 'Area of a Triangle : ' + area;
}
console.log(calculateArea(3, 4, 5));
