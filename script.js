const messages = ["It'll all be fine, it's going to work out!", "Have patience, you will be rewarded soon.", "You work so much harder than you know, so keep at it!", `“Shoot for the moon. Even if you miss, you'll land among the stars.”
― Norman Vincent Peale`, "Don't be afraid to success!", "I know you can do it!", "You're stronger than you really know."];

const randomNumber = () => {
    const randomNumber = Math.floor(Math.random() * messages.length);
    return randomNumber;
}

/*  Displays the messages */
const displayMessage = () => {
    const messageToDisplay = messages[randomNumber()];
}

/* Draws the box the messages will display in. */
const drawBox = () => {

}


/* Function to display different message */
const button = () => {
    const ctx = document.getElementById("canvas").getContext("2d");
    const text = ctx.measureText("foo"); // TextMetrics object
    text.width; // 16;
}

const mouseDown = () => {
    const mouseClock = mouseDown;
}