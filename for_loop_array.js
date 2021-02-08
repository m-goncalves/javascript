let cars = ["Ferrari", "Fiat", "Volkswagen", "Mercedez"];
let html = "<ul>";
for(let i in cars){
    html += "<li>" + cars[i] + "</li>";
}
html += "</ul>";
document.getElementById("content").innerHTML = html