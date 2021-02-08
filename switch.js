let day = window.prompt("Enter a number from 1 to 7:");
day = parseInt(day);
switch(day) {
    case 6: 
    case 7:
        dayName = "Weekend!";
        break;
    default:
        dayName = "Week day!"
        break;
};

document.getElementById("content").innerHTML =  dayName;