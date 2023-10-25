// var c = 300
let a = 100
if(true){
    let a = 10
    const b = 20
    // var c = 30
    console.log("INNER: ",a);
}
 

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "mayank"

    function two(){
        const website = "youtube"

        console.log(username);
    }
    // console.log(website); out of scope

    two()
}

one()


// ++++++++++++++++++ Intresting ++++++++++++++++

console.log(addone(5))


function addone(value){
    return value + 1
}

addTwo(10)//Not allowed,cannot access before initialisation

const addTwo = function(num){
    return num + 2
}
