function addNumbers() {
    let num1 = document.querySelector("#num1").value; // string
    num1 = Number(num1); // number
    let num2 = document.querySelector("#num2").value; // string
    num2 = Number(num2);
    let result = num1 + num2;

    document.querySelector("#answer").innerHTML = result;
}

function subtractNumbers() {
    let num1 = document.querySelector("#num1").value; // string
    num1 = Number(num1); // number
    let num2 = document.querySelector("#num2").value; // string
    num2 = Number(num2);
    let result = num1 - num2;

    document.querySelector("#answer").innerHTML = result;
}

function multiplyNumbers() {
    let num1 = document.querySelector("#num1").value; // string
    num1 = Number(num1); // number
    let num2 = document.querySelector("#num2").value; // string
    num2 = Number(num2);
    let result = num1 * num2;

    document.querySelector("#answer").innerHTML = result;
}

function divideNumbers() {
    let num1 = document.querySelector("#num1").value; // string
    num1 = Number(num1); // number
    let num2 = document.querySelector("#num2").value; // string
    num2 = Number(num2);
    let result = num1 / num2;

    document.querySelector("#answer").innerHTML = result;
}

function reset() {
    document.querySelector("#num1").value = "";
    document.querySelector("#num2").value = "";
    document.querySelector("#answer").innerHTML = "";
}
