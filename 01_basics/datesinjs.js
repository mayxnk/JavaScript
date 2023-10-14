//Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toLocaleString())
// console.log(typeof myDate);

let mycreatedDate = new Date(2023,0,23)
// console.log(mycreatedDate.toDateString())

let date = new Date("2023-01-14");
console.log(date.toLocaleString());

let timeStamp = Date.now()

console.log(date.getTime());

console.log(Math.floor(date.getTime()/1000)); //in seconds

let newDate = new Date()
console.log(newDate.getMonth());

newDate.toLocaleString('default',{
    weekday:"long"
})

console.log(newDate);