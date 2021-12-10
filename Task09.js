
function vowels(str)
{
    var strVowels ="";
    var vowels = ['a','e','i','o','u'];
    for(let i=0; i<str.length;i++)
        {
            if (vowels.includes(str[i]))
            strVowels +=str[i]+",";
        }
        console.log("Vowels: "+ strVowels)
}
vowels("Umuzi")
    