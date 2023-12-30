// const coding = ["js","ruby","java"]

// const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNums.filter((num) => num > 4)
// console.log(newNums);

//Reduce

myNums = [1,2,3]
// const myTotal = myNums.reduce(function(acc, currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// },0)
const myTotal = myNums.reduce((acc,currval) => (acc + currval),0)

console.log(myTotal);