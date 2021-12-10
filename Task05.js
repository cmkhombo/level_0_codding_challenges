function calculateArea(firstNumber,secondNumber,thirdNumber)
{
    var totalSides=(firstNumber+secondNumber+thirdNumber)/2
    var area = Math.sqrt(totalSides*((totalSides-firstNumber)*(totalSides-secondNumber)*(totalSides-thirdNumber)))
    return "Area of a Triangle : "+area;
}
console.log(calculateArea(3,4,5))