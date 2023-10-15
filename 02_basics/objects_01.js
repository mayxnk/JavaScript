//Singleton 

//Object literal

const mySym = Symbol("key1")

const JsUser = {
    "name":"Mayank",
    age:22,
    loaction:"Pune",
    email:"mayank@google.com",
    [mySym]:"mykey1",
    isLoggedIn:true,
    lastLoginDays:["Monday","Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser[mySym]);
// console.log(JsUser["mySym"]);


//Object.freeze(JsUser)
JsUser.email = "mayank@gmail.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS User,${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());



