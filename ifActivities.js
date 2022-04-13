//Acticity 1

let age = 29;
let country = "UK"

if (age > 17 && country == "UK") {
    console.log("Yes, I can serve you")
}
else {
    console.log("You aren't old enough")
}


//Activity 2

let topping = "Anchovies"

switch(topping){
    case "pepperoni":
    case "Pepperoni":
        console.log("These are important ingredients for my pizza.");
        break;
    case "red onion":
        console.log(`I dont't mind having ${topping} on my pizza.`);
        break;
    default:
        console.log(`${topping} should not be on a pizza.`)
}



//Activity 3

let password = "hi123";

switch(true){
    case password.length < 8:
        console.log("Password is too short")
        break;
    default:
        console.log(password)
}



//Activity 4

let num = 9

switch(true){
    case num % 3 === 0 || num % 5 === 0:
        console.log("The number is divisible by 3 or 5")
    break;
    default:
        console.log("The number is not divisible by 3 or 5") 
}



//Activity 5

let num1 = 15

if (num1 % 3 === 0 && num1 % 5 === 0){
    console.log("fizz buzz")
}
else if (num1 % 5 === 0) {
    console.log("buzz")
}
else if
    (num1 % 3 === 0) {
    console.log("fizz")
}
else{
    console.log(num1)
}


//Activity 6

let num2 = 2003

let arr = num2.toString().split("");
let reversed = arr.reverse().join("");

if (num2 < 10){
    console.log("Type at least a double digit number")
}

else if (num2 == reversed){
    console.log("Number is a palindrome")
}

else{
    console.log("Number is not a palindrome")
}


//Activity 7

let time = 9
let placeOfWork = "Code Nation"
let townOfHome = "Manchester"

if (time == 8){
    console.log(`I am in ${townOfHome}`)
}
else if (time >= 9 && time < 17){
    console.log(`I am at ${placeOfWork}.`)
}
else{
    console.log("I am at home")
}


//Activity 8

let string = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"
let lastA = string.lastIndexOf('a')
let lastE = string.lastIndexOf('e')
let lastI = string.lastIndexOf('i')
let lastO = string.lastIndexOf('o')
let lastU = string.lastIndexOf('u')
let lastVow = null
let lastVowIndex = null
if (lastA > lastE && lastA > lastI && lastA > lastO && lastA > lastU){
    lastVow = "a"
    lastVowIndex = lastA
}
else if (lastE > lastI && lastE > last_o && lastE > lastU){
    lastVow = "e"
    lastVowIndex = lastE
}
else if (lastI > lastO && lastI > lastU){
    lastVow = "i"
    lastVowIndex = lastI
}
else if( lastO > lastU){
    lastVow = "o"
    lastVowIndex = lastO
}
else{
    lastVow = "u"
    lastVowIndex = lastU
}
console.log(`The last vowel ${lastVow} appears in index ${lastVowIndex}`)



//Activity 9

let word = "taint"

if (word[0] == word[word.length-1]){
    console.log(true)
}
else{
    console.log(false)
}



//Activity 10

let num01 = 10
let num02 = 10
let num03 = num01 + num02

if (num03 % 2 == 0){
    console.log(num03)
}
else{
    console.log(num01 * num02)
}

