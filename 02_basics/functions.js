function add(num1,num2){
    return num1 + num2
}
const result = add(6,10)
console.log("Result = ",result);

function logInUser(username){
    if(username === undefined){
        console.log("Please enter a username");
    }
    else
    return `${username} just logged in`
}
const str = logInUser()
console.log(str);

function calculateCartPrice(val1,val2,...num1){//num1 as array 
    return num1
}

console.log(calculateCartPrice(200,300,400,1000));


const mynewArray = [500,1000,4000]
function returnSecondValue(newarray){
    return newarray[1]
}
console.log(returnSecondValue(mynewArray));