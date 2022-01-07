function commonLetters(str1, str2) {
  let letters = new Set();
  let results = '';
  for (let i in str2) {
    if (str1.includes(str2[i])) letters.add(str2[i]);
  }

  for (let val of letters.values()) results += val + ',';

  console.log('Common Letters: ' + results);
}
commonLetters('Houssse', 'Computersss');
