/**
 * ------
 * Part 1
 * ------
 * A. Write a function called turnOnOff() that has no parameters.
 *    - The job of this function is to flip the isOn switch (variable)
 *      every time the function is called:
 *          - If it's true, set it to false
 *          - If it's false, set it to true
 *
 *      After the isOn switch has been set, output its value to the console.
 *
 * B. Attach the turnOnOff() function to the onclick event handler of the image.
 *
 * ------
 * Part 2
 * ------
 * When you're done with Part 1, update your code so that the
 * image on the screen reflects either the off bulb or the on bulb,
 * depending on the value of IsOn.
 */

// memory
let isOn = false;

function turnOnOff() {
    // target the image in the DOM:
    const img = document.querySelector("#my_image");
    if (isOn) {
        // if it's on, turn it off:
        isOn = false;
        img.src = "bulb_off.gif";
    } else {
        // if it's off, turn it on:
        isOn = true;
        img.src = "bulb_on.gif";
    }
    console.log(isOn);
}
