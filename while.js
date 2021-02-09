let html = "";
let c = 0;
while(c < 10) {
    html += "Loop nr.: " + c + "<br/>"
    c++
}

document.getElementById("content").innerHTML = html;