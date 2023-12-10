/*const arr = [1,2,3,4]

//of
for (const num of arr) {
    console.log(num);
}
const greeting = "Hello World!"
for (const ch of greeting) {
    console.log(`Each char is ${ch}`);
}


//Maps
const map = new Map()
map.set('IN',"India")
map.set('Fr',"France")
console.log(map);

for (const [key,value] of map) {
    console.log(key,':-',value);
}
*/
 /*const myObjects = {
    js:'javascript',
    cpp:'C++',
    rb:"ruby",
    swift:"swift by apple"

 }

for (const key in myObjects) {
   console.log(`${key} shortcut is for ${myObjects[key]}`);
}
*/



//for each
const coding = ["js","c++","ruby","java","python"]

// coding.forEach( (val) => {
//     console.log(val);
// }
// );

 coding.forEach( (val,index,arr) => {
        console.log(val,index,arr);
});
    
