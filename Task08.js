function numbersToTime(number) {
  let str1 = '';
  let str2 = '';

  let hours = Math.floor(number / 60);
  let min = 0;

  if (number > 0 && number != 60) {
    min = number % 60;
  } else {
    min = 60;
  }

  if (hours > 1 || hours === 0) {
    str1 = 'Hours';
  } else if ((hours = 1 && min === 60)) {
    hours = 0;
    str1 = 'Hours';
  } else if ((hours = 1)) {
    str1 = 'Hour';
  }

  if (min > 1 || min === 0) {
    str2 = 'Minutes';
  } else {
    str2 = 'Minute';
  }
  return hours + ' ' + str1 + ',' + min + ' ' + str2;
}
console.log(numbersToTime(120));
console.log(numbersToTime(500));
console.log(numbersToTime(65));
console.log(numbersToTime(61));
