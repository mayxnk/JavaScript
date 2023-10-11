const name = "Mayank";
const repoCount = 30;
//console.log(name + repoCount + "repos");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('manyx-45');

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-4,5);//in negative values,count will start from last
console.log(anotherString);

const newStringOne = "    Mayank    "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://mayank.com/mayank%20rastogi"
console.log(url.replace('%20','-'));

console.log(url.includes('may'));

console.log(gameName.split('-'));