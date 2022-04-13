let i = 10
i += 2  //adds 2 to let i
console.log(i)




//Activity 01


let favouriteColour = "teal"
let age = 32
let myName = "Petteri"

console.log(`My name is ${myName} and I am ${age} years old. My favourite colour is ${favouriteColour}.`)

console.log(`My name is ${myName} and my favourite colour is ${favouriteColour}. I am ${age} years old`)


//Activity 02

let breakfast = "toast"
let lunch = "chicken wrap"
let dinner = "pizza"

console.log(`Today I will start the day with a simple ${breakfast} breakfast. For lunch I will have a ${lunch}. And ${dinner} will be for dinner.`)


//Activity 03

let today = new Date();

let birthday = new Date("12/17/1992");

let differenceTime = today.getTime() - birthday.getTime();

let differenceDays = differenceTime / (1000 * 3600 * 24);

console.log(differenceDays)

//Activity 04

space1 = " "
space2 = "x"
space3 = "o"
space4 = " "
space5 = " "
space6 = "x"
space7 = " "
space8 = "o"
space9 = " "

console.log(`${space1} | ${space1} |`)
console.log(`${space2} | ${space3} |`)
console.log(`${space4} | ${space4} |`)
console.log("---------")
console.log(`${space5} | ${space5} |`)
console.log(`${space6} | ${space6} |`)
console.log(`${space7} | ${space7} |`)
console.log("---------")
console.log(`${space7} | ${space7} |`)
console.log(`${space8} | ${space9} |`)
console.log(`${space9} | ${space9} |`)

