function numbersToTime(number)
{
    var str1="";
    var str2="";

    var hours = Math.floor(number/ 60);
    var min = number% 60;
    if (hours >1)
    {
        str1="Hours";
    } else{
        str1="Hour";
    }
   
if (min> 1)
{
    str2="Minutes";
}else {
str2="Minute";
}
    return hours +" "+str1+ "," + min + " "+ str2;
}
console.log(numbersToTime(71))
console.log(numbersToTime(133))
