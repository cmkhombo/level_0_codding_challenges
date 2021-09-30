function calcArea(num1,num2,num3)
{
    var totsides=(num1+num2+num3)/2;
    var area = Math.sqrt(totsides*((totsides-num1)*(totsides-num2)*(totsides-num3)))
    return "Area of a Triangle : "+area;
}
console.log(calcArea(3,4,5))