console.log("Hello World");
console.log("hello".toUpperCase());
console.log(Math.random()*10);
console.log(Math.floor(Math.random()*100)); // returns an integer less than or equal to a specified number
console.log(Math.round(Math.random()*100)); //rounds up to the closest whole number

//Activity
console.log("   |   |   ")
console.log("   |   |   ")
console.log("   |   |   ")
console.log("-----------")
console.log("   |   |   ")
console.log("   |   |   ")
console.log("   |   |   ")
console.log("-----------")
console.log("   |   |   ")
console.log("   |   |   ")
console.log("   |   |   ")

//Same grid using arrays

const grids = ["   |   |   ", "-----------"];

console.log(grids[0]);
console.log(grids[0]);
console.log(grids[0]);
console.log(grids[1]);
console.log(grids[0]);
console.log(grids[0]);
console.log(grids[0]);
console.log(grids[1]);
console.log(grids[0]);
console.log(grids[0]);
console.log(grids[0]);


//Same grid using for-loops

for (let grid = 0; grid < 2; grid++) {
    console.log("   |   |   ")
    console.log("   |   |   ")
    console.log("   |   |   ")
    console.log("-----------")
}

for (let grid = 0; grid < 3; grid++) {
    console.log("   |   |   ")
}

