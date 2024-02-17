const redElement = document.querySelector("#red");
const yellowElement = document.querySelector("#yellow");
const blueElement = document.querySelector("#blue");

function setBackgroundColor(color) {
    document.querySelector("body").style.backgroundColor = color;
}

function updateColor() {
    /*
    yellow -> on
    blue -> on
    */
    if (
        redElement.value === "on" &&
        yellowElement.value === "on" &&
        blueElement.value === "on"
    ) {
        setBackgroundColor("black");
    } else if (redElement.value === "on" && yellowElement.value === "on") {
        setBackgroundColor("#edaf4c");
    } else if (yellowElement.value === "on" && blueElement.value === "on") {
        setBackgroundColor("#40ad49");
    } else if (blueElement.value === "on" && redElement.value === "on") {
        setBackgroundColor("#a15beb");
    } else if (redElement.value === "on") {
        setBackgroundColor("#f25f55");
    } else if (yellowElement.value === "on") {
        setBackgroundColor("#f1fa7a");
    } else if (blueElement.value === "on") {
        setBackgroundColor("#5c92ed");
    } else {
        setBackgroundColor("white");
    }
}
