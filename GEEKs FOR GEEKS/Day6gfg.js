const personObj={
    name:"Prakash",
    age:67,
    job:"Mentor",
    courses:["html","css","java"],
    //if the key has multiple words
    "is admin":"true"

};
console.log(personObj.age);
//then-->
console.log(personObj["is admin"]);
const obj={
    name:"Rattriz Ghosh",
    greetMessage:function(){
        console.log("hello rattriz Ghosh");

    },
    bye()
    {
        console.log("tat bye bye");
    }
}
obj.bye();
//shorthand property
function getObjects(name, city)
{
    return{
        name,
        city
    }
}
const obj1= getObjects("Prakash","Mumbai");
const student="rattriz";
const course="false";
console.log({student,course});
