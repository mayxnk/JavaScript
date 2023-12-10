const empObj = {}
if(Object.keys(empObj).length === 0){
    console.log("Object is empty");
}

//Nullish coalescing operator(??) :null,undefinded
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
val1 = undefined ?? 13
console.log(val1);


//Ternary operator
const iceTeaPrice = 100
iceTeaPrice>=80 ? console.log("More than 80") : console.log("Less than 80");