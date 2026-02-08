const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const questionSection = document.getElementById('question-section');
const successSection = document.getElementById('success-section');

// Messages for the No button
const sadMessages = [
    'No',
    'Are you sure?',
    'Really sure?',
    'Think again!',
    'Last chance!',
    'Surely not?',
    'Come on!',
    'Pretty please?',
    'With a cherry on top?',
    'Pls pls pls?',
    'I\'m gonna cry...',
    'You\'re breaking my heart 💔',
    'Reconsider?',
    'Nah, just click Yes',
    'Pleeease? 🥺'
];

let noClickCount = 0;

yesBtn.addEventListener('click', function() {
    questionSection.style.display = 'none';
    successSection.style.display = 'block';
});

noBtn.addEventListener('click', function() {
    noClickCount++;
    
    // Change the No button text
    if (noClickCount < sadMessages.length) {
        noBtn.textContent = sadMessages[noClickCount];
    }
    
    // Make the Yes button bigger
    const currentSize = yesBtn.offsetWidth;
    yesBtn.style.width = (currentSize + 20) + 'px';
    yesBtn.style.padding = '15px ' + (40 + (noClickCount * 5)) + 'px';
    yesBtn.style.fontSize = (1.1 + (noClickCount * 0.1)) + 'em';
    
    // Make the No button smaller and move it around
    const randomX = (Math.random() - 0.5) * 200;
    const randomY = (Math.random() - 0.5) * 200;
    noBtn.style.transform = `translate(${randomX}px, ${randomY}px) scale(${Math.max(0.5, 1 - (noClickCount * 0.05))})`;
    
    // Optional: Make the No button harder to click
    if (noClickCount > 3) {
        noBtn.style.pointerEvents = 'none';
        noBtn.style.opacity = '0.5';
        setTimeout(() => {
            noBtn.style.pointerEvents = 'auto';
            noBtn.style.opacity = '1';
        }, 500);
    }
});