let coffeeOrder = [
    "Alex - Cortado",
    "Ben - Cortado",
    "Charlie - Whatever's new"
];

console.log(coffeeOrder);

console.log(coffeeOrder[2]);

coffeeOrder[1] = "Peter - Chai Latte";

console.log(coffeeOrder);

console.log(coffeeOrder.length)

coffeeOrder.push("Donna - Espresso")

console.log(coffeeOrder)

coffeeOrder.pop()

console.log(coffeeOrder)



//Activity 1

let favouriteSongs = [
    "Metric- IOU",
    "Jeff Buckley - So Real",
    "Soundgarden - Limo Wreck"
]

console.log(favouriteSongs)

favouriteSongs.push("Supergrass - In it for the Money")
favouriteSongs.push("Megadeth - Lucretia")

console.log(favouriteSongs)

favouriteSongs.pop()

console.log(favouriteSongs)


//Activity 2

//map

let numbers = [3, 5, 9, 23]

let map1 = numbers.map(x => x * 2)

console.log(map1)

//shift

numbers.shift()

console.log(numbers)

//unshift

numbers.unshift(1, 2)

console.log(numbers)

//splice

numbers.splice(1, 1, 4)

console.log(numbers)


let favouriteDrinks = [
    "Coke",
    "Beer",
    "Coffee"
]

console.log(favouriteDrinks)

for(let i = 0; i < favouriteDrinks.length; i++){
    console.log(favouriteDrinks[i]);
}

let multiplesTwo = []

for (let i = 0; i < 20; i++){
    if (i % 2 == 0){
        multiplesTwo.push(i);
    }
}

console.log(`Numbers divisible by 2 between 0 and 20 are: ${multiplesTwo}.`)

let age = 15

while (age < 18){
    console.log("You're a child!");
    age++;
}

console.log("You're an adult!")

let cards = ["Diamond", "Spade", "Heart", "Club"]
let currentCard = "Club"

while(currentCard != "Spade"){
    console.log(currentCard);
    currentCard = cards[Math.floor(Math.random()*4)]
}

console.log(currentCard)