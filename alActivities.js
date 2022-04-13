//Activity 1

let favFilms = [
    "Dumb & Dumber",
    "Happy Gilmore",
    "Inglorious Bastards",
    "Shawshank Redemption",
    "Nightmare on Elm Street"
]

favFilms.push("Indiana Jones-trilogy", "Star Wars-trilogy")

console.log(favFilms)

for (let i = 0; i < favFilms.length; i++){
    console.log(favFilms[i])
}


//Activity 2

for (let i = 0; i < 6; i++){
    let random = Math.floor(Math.random() * 50) + 1;

    console.log(random)
}


//Activity 3

for (let i = 9; i >= 0; i--){
    console.log(i)
}


//Activity 4

let someFilms = [
    "Titanic",
    "Halloween",
    "Ghostbusters",
    "Mad Max"
]

for (let i = 0; i < someFilms.length; i++){
    console.log(someFilms[i])
}

if (someFilms[2] == "Ghostbusters"){
    console.log("Yay, it's Ghostbusters!")
}
else{
    console.log("Boo! We want Ghostbusters!")
}


//Activity 5

for (let i = 0; i < 6; i++){
    let random = Math.floor(Math.random() * 30) + 1;
    if (random % 7 == 0){
        console.log(`The number ${random} is divisible by 7`)
        
    }
    else{
        console.log(`The number ${random} is not divisible by 7`)
    }

}


//Activity 6

let bobsFollowers = [
    "Larry",
    "Steve",
    "Kira",
    "Laura"
]

let hannahsFollowers = [
    "Kieran",
    "Cait",
    "Kira",
    "Edward"
]

let matchingFollower = []

for (let i = 0; i < bobsFollowers.length; i++){
    for (let y = 0; y < hannahsFollowers.length; y++){
        if (bobsFollowers[i] === hannahsFollowers[y]){
            console.log(`The mutual follower is ${hannahsFollowers[y]}`)
            // matchingFollower.push(bobsFollowers[i]) Show answer as an array
        }
        }

    }

// console.log(matchingFollower)


//Activity 7


//while do loop 
let answer = '';
let i = 0; 
do {
    i = i + 1;result = result + i;
} 
while (i < 5);
console.log(answer);

//for loop
let answer1 ="";
for (let y = 0; y < 5; y++) {
    answer1 += y;
}
console.log(answer1);

//while loop
let answer2 = "";
let z = 0;

while (z < 5) {
  answer2 += z; z++;
}
console.log(answer2);

