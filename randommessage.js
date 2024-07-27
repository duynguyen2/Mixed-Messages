const messages = ["It'll all be fine, it's going to work out!", "Have patience, you will be rewarded soon.", "You work so much harder than you know, so keep at it!", `“Shoot for the moon. Even if you miss, you'll land among the stars.”
    ― Norman Vincent Peale`, "Don't be afraid to success!", "I know you can do it!", "You're stronger than you really know."];

const randomNumber = () => {
    return Math.floor(Math.random() * messages.length);
};

console.log(messages[randomNumber()]);