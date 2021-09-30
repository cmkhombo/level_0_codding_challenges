
function findVowel(sentence)
{
    var vowels ="";
    var vowel = ['a','e','i','o','u'];
    for(i=0; i<sentence.length;i++)
        {
            if (vowel.includes(sentence[i]))
            vowels +=sentence[i]+",";
        }
        console.log("Vowels: "+ vowels)
    }
    findVowel("Umuzi")
    