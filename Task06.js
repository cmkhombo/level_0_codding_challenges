function maximum(firstNumber,secondNumber,thirdNumber,fourthNumber)
{
    var max = 0;
    if (firstNumber>= secondNumber && firstNumber >=thirdNumber && firstNumber >= fourthNumber){
        max = firstNumber;
    } else if (secondNumber >= firstNumber && secondNumber >= thirdNumber && secondNumber >= fourthNumber){
    max = secondNumber;
    }
    else if(thirdNumber>=firstNumber && thirdNumber >=secondNumber && thirdNumber >= fourthNumber){
        max=thirdNumber;
    } else {
        max = fourthNumber;
    }
    return "Maximum Number: " + max;
}
console.log(maximum(1,22,3,2))