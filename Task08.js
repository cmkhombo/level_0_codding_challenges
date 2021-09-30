function convertNumToTime(num)
{
    var str1="";
    var str2="";

    var hours = Math.floor(num / 60);
    var min = num % 60;
    if (hours >1)
    {
        str1="hours";
    } else{
        str1="hour";
    }
   
if (min> 1)
{
    str2="minutes";
}else {
str2="minute";
}
    return hours +" "+str1+ "," + min + " "+ str2;
}
console.log(convertNumToTime(71))
console.log(convertNumToTime(133))
