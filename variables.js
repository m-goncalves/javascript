// const - can not be redeclared but ca have different values assigned to it.
// var - accessible from everywhere in the programm.
// let - only accessible within the block where it was declared.

const country = "brazil";
var user_name = window.prompt("Enter your name:");

if (user_name == "marcelo") {
    let gender = "male";
    document.getElementById("compliments").innerHTML = "name: " + user_name + ";" + " gender: " + gender;
} else if (user_name == "dominika") {
    let gender = "female";
    document.getElementById("compliments").innerHTML = "name: " + user_name + ";" + " gender: " + gender; 
} else {
    document.getElementById("compliments").innerHTML = "Not smart enought to know!"
}