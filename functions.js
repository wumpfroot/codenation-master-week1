let accnumber = 8329902;

const cashWithdrawal = (amount, accnum) => {
    console.log(`Withdrawing ${amount} from account ${accnum}`);
}

cashWithdrawal(300, accnumber);

const addUp = (num1, num2) => {
    return num1 + num2;
}

addUp(7, 3);
console.log(addUp(2, 5));
let result = addUp(10, 5);

console.log(result)

const capitalise = (name) => {
    let letters = name.split("")
    letters[0] = letters[0].toUpperCase()
    name = letters.join("")
    return name
}

const formatName = (fname, sname) => {
    return `${capitalise(fname)} ${capitalise(sname)}`
}

console.log(formatName("markus", "kojo"))

//Declaration method

function square(number) {
    return number * number
}

console.log(square(5))


//Activity 1

const factorial = (n) => {
    if ((n === 0) || (n === 1)) {
        return 1;
    } else {
        return (n * factorial(n-1));
    }
}

console.log(factorial(33));

//Activity 2

let orderCount = 0;

const takeOrder = (topping, size) => {
    console.log(`Pizza with ${topping}, size ${size}`)
    orderCount++;
    console.log(`${orderCount} total orders`)
}

takeOrder("pepperoni", "large")
takeOrder("cheese", "medium")
takeOrder("cheese", "medium")




//Activity 3

let moneyBalance = 2000
let pinNumber = 1792
const bankMachine = (pin, amount) => {
// globalThis.moneyBalance
if (pin != pinNumber) {
    console.log("PIN Incorrect")
}
else if (pin == pinNumber && amount <= moneyBalance){
    console.log("Your money is printing...")
    moneyBalance -= amount
    console.log(`Your new balance is ${moneyBalance}`)
}
}

console.log(bankMachine(1792, 1500))
console.log(bankMachine(1792, 500))