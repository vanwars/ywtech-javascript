function setup() {
    // Code to set up the canvas. Do not edit.
    const canvasEl = document.querySelector("#canvas-holder");
    const canvasWidth = canvasEl.offsetWidth;
    const canvasHeight = canvasEl.offsetHeight;
    const myCanvas = createCanvas(canvasWidth, canvasHeight);
    myCanvas.parent("canvas-holder");
    background("#FFF");
}

function mouseDragged() {
    // let the user set the color:
    const color = document.querySelector("#color").value;
    let size = document.querySelector("#size").value;
    size = Number(size);
    // the variable shape will hold "circle", "square", or "triangle"
    const shape = document.querySelector("#shape").value;
    // Your job:
    // When the user drags the mouse on the canvas, you should honor
    // the color, shape, and size of the paintbrush that are selected
    // in the right-hand panel. Replace the code below with something
    // smarter:

    strokeWeight(0); // uncomment to turn off the outline
    // stroke("hotpink");   // uncomment to change the color of the outline

    fill(color);

    if (shape === "circle") {
        circle(mouseX, mouseY, size);
    } else if (shape === "square") {
        square(mouseX, mouseY, size);
    } else {
        triangle(
            mouseX,
            mouseY,
            mouseX - size / 1.5,
            mouseY + size,
            mouseX + size / 1.5,
            mouseY + size
        );
    }
}

/*
// Samples:

// https://p5js.org/reference/#/p5/circle
fill('pink');
circle(400, 400, 100);   // x, y, diameter

// https://p5js.org/reference/#/p5/square
fill('navy');
square(50, 300, 50);   // x (top left), y (top left), width

// https://p5js.org/reference/#/p5/triangle
fill('teal');
triangle(
    50, 50, // first point
    30, 80, // second point
    70, 80  // third point
)
*/
