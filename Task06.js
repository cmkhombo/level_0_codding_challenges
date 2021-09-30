function Maximum(num1,num2,num3,num4)
{
    var max = 0;
    if (num1>= num2 && num1 >=num3 && num1 >= num4){
        max = num1;
    } else if (num2 >= num1 && num2 >= num3 && num2 >= num4){
    max = num2;
    }
    else if(num3>=num1 && num3 >=num2 && num3 >= num4){
        max=num3;
    } else {
        max = num4;
    }
    return "Maximum Number: " + max;
}
console.log(Maximum(1,22,3,2))