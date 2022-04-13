let band = "supergrass"

// || is OR

if (band == "Supergrass" || "supergrass") {
    console.log("Nice choice!");
}
else { 
    console.log("It's fine I guess...")
}


if (1 != "1") {
    console.log(true);
}
else {
    console.log(false);
}


let place = "Manc";
let weather = "Cloudy";

// && is AND

if (place == "Manc" && weather == "Sunny") {
    console.log("Check again");
}
else if (place == "Manc" && weather == "Rain") {
    console.log("Obvs");
}
else {
    console.log("What, it isn't raining?!");
}

// Switch statements

const grade = 69;

switch (true) {
    case grade >= 70:
        console.log("Distinction");
        break;
    case grade >=60:
        console.log("Merit");
        break;
    case grade >= 50:
        console.log("Pass");
        break;
    default:
        console.log("Failed");
}
