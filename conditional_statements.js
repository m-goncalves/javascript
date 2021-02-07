var time = window.prompt("Enter the current time:");
var user_name = window.prompt("Enter your name:")
if (time >= 6 & time < 12) {
    document.getElementById("compliments").innerHTML = "Good morning, " + user_name + "!";
}else if (time >= 12 & time < 18) {
    document.getElementById("compliments").innerHTML = "Good afternoon, " + user_name + "!";
}else if (time >= 18 & time < 23){
    document.getElementById("compliments").innerHTML = "Good evening, " + user_name + "!";
} else if (time >=0 & time < 6) {
    document.getElementById("compliments").innerHTML = "Good night, " + user_name + "!";
}else {
    "Enter a valid time!"
}