let fruits=["apple","mango"];
fruits.push("orange");
console.log(fruits);
let userName="rattriz";
let firstUpperCase=userName[0].toUpperCase();
console.log(firstUpperCase);
//now concatenate
let result=firstUpperCase+userName.slice(1);
console.log(result);
let courses=["Rattriz", " is ", "Great","girl","for real"];
//let result2=courses.splice(2,1);
//console.log(result2);
courses.splice(2,1);
//if we want to add something using splice
courses.splice(1,0,"love");
console.log(courses);
const numbers=[1,2,5,6,888,56,3];
//numbers.sort();
function sortInc(a,b)

{
    return a-b;
}
numbers.sort(sortInc);
console.log(numbers);
//SPREAD ARRAY
const arr1=[1,2,3,4];
const arr2=[6,7,8,9];
const arr3=[...arr1,...arr2];
console.log(arr3);
