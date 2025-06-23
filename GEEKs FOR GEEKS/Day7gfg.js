let obj = {
    name: "Rattriz",
    address: {
        state: "hh",
        city: "Mumbai",
        locality: "sanctuary"
    },
    courses: ['html', 'css', 'js'],
};

let { address } = obj;
console.log(address);

let { name: userName } = obj;
console.log(userName);

const obj3 = {
    name: "Rattriz",
    age: 99,
    city: "mumbai",
};

const entries = Object.entries(obj3);
console.log(entries);

const keys = Object.keys(obj3);
console.log(keys);

const values = Object.values(obj3);
console.log(values);

const obj4 = {
    name: "Ratrriz",
    displayMessage: function () {
        console.log("hello " + this.name);
    },
};
obj4.displayMessage();

function User2(name, age) {
    this.name = name;
    this.age = age;
}

const user1 = new User2("Rattriz", 101);
const user2 = new User2("Akash", 223);
console.log(user1);
console.log(user2);
