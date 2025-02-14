// Array of love messages (20 messages)
const loveMessages = [
    "I love you more than yesterday but less than tomorrow.", "I fall for you every single day.", "My world is brighter because of you.",
    "I adore you more than words can say.", "I am happiest when I’m with you.", "Loving you is the best decision I’ve ever made.",
    "My love for you is deeper than the ocean.", "I love you more than the stars love the night sky.", "Every second with you is precious to me.",
    "I adore everything about you.", "You’re my daylight, my golden glow.", "Forever and always, I’ll love you."
];

// Function to randomly select a love message
function revealLetter() {
    const message = document.getElementById('message');
    const loveMessageElement = document.getElementById('loveMessage');

    // Randomly pick a message
    const randomMessage = loveMessages[Math.floor(Math.random() * loveMessages.length)];

    // Display the message
    loveMessageElement.textContent = randomMessage;
    message.classList.remove('hidden');
}
