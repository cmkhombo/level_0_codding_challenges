function celsiusToFahrenheit(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}

function fahrenheitToCelsius(fahrenheit) {
  let celsius = (5 / 9) * (fahrenheit - 32);
  return celsius;
}
console.log(celsiusToFahrenheit(30));
console.log(fahrenheitToCelsius(86));
