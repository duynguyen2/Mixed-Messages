const messagesToDisplay = {
    messages: ["It'll all be fine, it's going to work out!", "Have patience, you will be rewarded soon.", "You work so much harder than you know, so keep at it!", `“Shoot for the moon. Even if you miss, you'll land among the stars.”
        ― Norman Vincent Peale`, "You're doing great!", "I know you can do it!", "You're stronger than you really know."],
    advice: ["Just keep pushing, don't be afraid of success!", "It may take time, but don't rush it. What is the point of the goal if you do not reach the destination properly?", "If so many others can do it, what really stops you from being able to? Nothing but yourself, so keep believing.", "No matter what it looks like, you will be rewarded for your hard work, just don't stop."]
}

const randomNumber = (num) => {
    return Math.floor(Math.random() * num);
};

let returnedMessages = [];

for (let messageType in messagesToDisplay) {
    if(messageType === 'messages')
        returnedMessages.push(messagesToDisplay[messageType][randomNumber(messagesToDisplay[messageType].length)]);
    if(messageType === 'advice')
        returnedMessages.push(messagesToDisplay[messageType][randomNumber(messagesToDisplay[messageType].length)]);
}

const formatMessages = (arr) => {
    for(let message in arr)
        console.log(arr[message]);
}

console.log("There is a message for you. Please take a look!\n");
formatMessages(returnedMessages);
console.log("\n");
console.log("Thanks for reading it! Hope it helped!");