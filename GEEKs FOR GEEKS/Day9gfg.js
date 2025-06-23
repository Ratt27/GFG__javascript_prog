function wrapper()
{
    return "welcome to gfg";
}
function greetmessage(inner,name)
{
    let message=inner();
    console.log(name,message);
}
greetmessage(wrapper,"Prakash");
//HIGHER ORDER FUNCTION
function calculatePower(power) {
    return function(number) {
        return Math.pow(number, power);
    };
}

const square = calculatePower(2);
const cube = calculatePower(3);

console.log(square(4)); // Output: 16
console.log(cube(3)); // Output: 27
//RECURSION
function factorialRecursive(number)
{
    if(number===1)
    {
        return number;
    }
    return number*factorialRecursive(number-1);
}
const result=5*4*factorialRecursive(4);
console.log(result);