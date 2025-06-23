const readlineSync=require("readline-sync");
const number= Number(readlineSync.question("enter a number :"));
const remainder=number%2;
if(remainder===0)
{
console.log(`${number} is an even number`);
}
else{
    console.log("it is not even");
}
// parogram that reads 3 strings and print the smallest
const firstString="apple";
const secondString="banana";
const thirdString="watermelon";

const lengthof1st=firstString.length;
const lengthof2nd=secondString.length;
const lengthof3rd=thirdString.length;

if(lengthof1st<lengthof2nd&& lengthof1st<lengthof3rd)
{
    console.log(`${firstString} is the smallest String`);
}
else if(lengthof2nd<lengthof1st&&lengthof2nd<lengthof3rd)
{
    console.log(`${secondString}is smallest`)

}
else
{
    console.log(`${thirdString} is the smallest`);
}
const totalmark=100;
const result=totalmark<40?"you need to work hard":totalmark<60?"B grade":totalmark<75?"A grade":totalmark<85?"A+ grade":"genius";
console.log(result);
const firstName="";
const nickname="Ghosh";
const  userName=firstName||nickname;
console.log(`Name-${userName}`);
// in such cases we should never use nd operator-->
// it always returns the first falsy value
// if there is no falsy value--> it returns the last true value
const  userName2=firstName&&nickname;
console.log(`Name-${userName2}`);
//NULLISH COALESCING-->
// it only works when the value is undefined and null and not for 0
let myName;
console.log(myName??"HIDDENGEEKS");
const symbol ="*";
for(let i=0;i<=5;i++)
{
    console.log(symbol.repeat(i));

}
const userName3="Rattriz ghosh"
let count=0;
for(let i=0;i<userName3.length;i++)
{
    count++;
}
console.log(`number of characters are ${count}`);
let readlineSync2 = require("readline-sync");
let number3 = 100; // Start with a number >= 50 so the loop runs

while (number3 >= 50) {
    number3 = Number(readlineSync2.question("Enter a number less than 50: "));
}
console.log("Number accepted");
const userName4="Rattriz";
try{
    console.log(myname);
}
catch(error)
{
    console.log("error occured");
}
//final statement
finally{
    console.log(userName4);
}

