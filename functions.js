//changeContent("subtitle", "revisiting the fundamentals");

result = add(5, 5);
console.log(result);

function changeContent(element, content) {
    document.getElementById(element).innerHTML = content;
}

function add(num1, num2){
    let total = num1 + num2;
    return total;
}