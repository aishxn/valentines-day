// JavaScript code to handle button clicks and change their properties

// Function to handle 'No' button click
function handleNoClick() {
    const noButton = document.getElementById('noButton');
    const sadMessages = [
        'I really wish I could say yes...',
        'Sorry, no can do.',
        'My heart says no...',
        'That’s a bummer!',
    ];
    const randomIndex = Math.floor(Math.random() * sadMessages.length);
    noButton.textContent = sadMessages[randomIndex];
    moveNoButton(); // Move No button on click
}

// Function to make 'Yes' button bigger
function makeYesBigger() {
    const yesButton = document.getElementById('yesButton');
    yesButton.style.fontSize = '24px';
    yesButton.style.padding = '10px 20px';
}

// Function to move 'No' button
function moveNoButton() {
    const noButton = document.getElementById('noButton');
    const randomX = Math.floor(Math.random() * window.innerWidth);
    const randomY = Math.floor(Math.random() * window.innerHeight);
    noButton.style.position = 'absolute';
    noButton.style.left = randomX + 'px';
    noButton.style.top = randomY + 'px';
}

// Event listeners to handle button clicks
document.getElementById('noButton').addEventListener('click', handleNoClick);
document.getElementById('yesButton').addEventListener('click', makeYesBigger);