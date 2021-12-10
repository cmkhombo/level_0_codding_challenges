function commonLetters(str1, str2)
{
    var letters ="";
    for(let i in str2)
    {
       if (str1.includes(str2[i]))
        letters +=str2[i]+",";
    }
    console.log("'Common Letters :" + letters+"'")
}
commonLetters("House","Computers")