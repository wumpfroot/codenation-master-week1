//Activity 1

let person = {
    name: "Markus",
    age: 29,
    sayHi(){
        return `Hello my name is ${person.name}`
    }
}

person.favSongs = [
    "Ghost - Hunter's Moon", 
    "Metric - Monster Hospital", 
    "Tremonti - Cauterize"]

console.log(person.sayHi());


//Activity 2

let pet = {
    name: "Rufus",
    typeofPet: "Dog",
    age: 7,
    colour: "Dark Brown",
    eat() {
        return `${pet.name} is eating`
    },
    drink() {
        return `${pet.name} is drinking`
    },
    
}


console.log(pet.drink())
console.log(pet.eat())


//Activity 3
let price = 0
let coffeeShop = {
    branch: "Manchester",
    drinksWithPrices: "Cappuccino",
    drinkPrice: 2,
    foodWithPrices: "Carrot cake",
    foodPrice: 4,
    drinksOrdered() {
        price += this.drinkPrice
        return `${this.drinksWithPrices} is £${this.drinkPrice}. Total price is totaled £${price} `
    },
    foodOrdered() {
        price += this.foodPrice
        return `${this.foodWithPrices} is £${this.foodPrice} Total price is totaled £${price} `
    },
}

console.log(coffeeShop.drinksOrdered())
console.log(coffeeShop.foodOrdered())
