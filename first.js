class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log("Viewing website data...");
    }
}

let user1 = new User("Het", "het@gmail.com");
let user2 = new User("Rahul", "rahul@gmail.com");

console.log(user1.name);
console.log(user1.email);


console.log(user2.name);
console.log(user2.email);

user1.viewData();
user2.viewData();