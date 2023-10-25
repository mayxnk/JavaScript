const user = {
    username : "hitesh",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);


//++++++++ Arrow Functions ++++++++++++

const chai = () => {
    let username = "mayank"
    console.log(this.username);//this works with objects, not functions
}

// chai()

// const addTwo = (num1,num2) => {
//     return num1 + num2
// }

// const addTwo = (num1,num2) => (num1 + num2)

const addTwo = (num1,num2) => ({username:"mayank"})//To return object we need to use parentheses


console.log(addTwo(8,90));
