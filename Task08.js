function numbersToTime(number)
{
    let str1="";
    let str2="";

    let hours = Math.floor(number/ 60);
    let min = number% 60;
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
