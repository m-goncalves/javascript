function changeContent(element, content) {
    document.getElementById(element).innerHTML = content;
}

changeContent("subtitle", "revisiting the fundamentals");
changeContent("title", "Javascript Training");

function add(num1, num2){
    let total = num1 + num2;
    return total;
}

result = add(5, 5);
console.log(result);