function cleanUp() {
    document.getElementById("main_block").classList.remove("grey");
    document.getElementById("main_block").classList.remove("brown");
    document.getElementById("main_block").classList.remove("blue");
}

function applyBlue(){
    cleanUp();
    document.getElementById("main_block").classList.add("blue");
}

function applyBrown(){
    cleanUp();
    document.getElementById("main_block").classList.add("brown");
}

function applyGrey(){
    cleanUp();
    document.getElementById("main_block").classList.add("grey");
}