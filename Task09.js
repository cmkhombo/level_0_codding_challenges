function vowels(param) {
  let strVowels = new Set();
  let results = '';
  let str = param.toLowerCase();
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) strVowels.add(str[i]);
  }

  for (let vowel of strVowels.values()) results += vowel + ',';
  console.log('Vowels: ' + results);
}
vowels('Umuzi');
