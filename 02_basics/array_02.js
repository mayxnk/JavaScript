const marvelHeroes = ["Ironman","Thor","CaptainAmerica"]
const dcHeroes = ["Flash","Batman"]

// marvelHeroes.push(dcHeroes)
// const allHeroes = marvelHeroes.concat(dcHeroes)
// console.log(allHeroes);

const allHeroes = [...marvelHeroes,...dcHeroes]
console.log(allHeroes);

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realAnotherArray = anotherArray.flat(Infinity)
console.log(realAnotherArray);


console.log(Array.from("Mayank"));
console.log(Array.from({name:"Mayank"}));//intresting -> empty array

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));




