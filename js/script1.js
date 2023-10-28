let n = 10;
let m = 50;
// lets create a function
function multiply(multi1,multi2){
    //return is a result
    return multi1 * multi2 ;
}
console.log(multiply(10,5));
//Always remember you can receive String with Prompt
let number1 = window.prompt("enter the first value");
// lets convert string to Integer with the help of type conversion/type casting
// To change one data types converts into another Data types is called Type casting/conversion
number1 = parseFloat(number1);
let number2 = window.prompt("enter the second value")
number2 = parseFloat(number2);
// lets create a function
alert(number1 * number2);
