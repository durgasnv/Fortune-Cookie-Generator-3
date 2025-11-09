// ===== FORTUNE DATA =====
const fortunes = [
    "Your creativity will lead to success.",
    "A thrilling adventure awaits you.",
    "Good things come to those who wait.",
    "Your hard work will soon pay off.",
    "An unexpected opportunity is coming your way.",
    "Trust your intuition, it will guide you well.",
    "A pleasant surprise is waiting for you.",
    "Your kindness will be rewarded.",
    "The best is yet to come.",
    "You will make a new friend soon.",
    "Your talents will be recognized.",
    "A dream you have will come true.",
    "Fortune favors the bold.",
    "Your persistence will lead to success.",
    "Happiness is just around the corner."
];

// ===== GET HTML ELEMENTS =====
const cookie = document.getElementById('cookie');
const cookieState = document.getElementById('cookieState');
const fortuneState = document.getElementById('fortuneState');
const fortuneText = document.getElementById('fortuneText');
const luckyNumbers = document.getElementById('luckyNumbers');
const tryAgainBtn = document.getElementById('tryAgainBtn');

// ===== FUNCTIONS =====

// Generate random lucky numbers (3 numbers between 1-99)
function generateLuckyNumbers() {
    const numbers = [];
    for (let i = 0; i < 3; i++) {
        const num = Math.floor(Math.random() * 99) + 1;
        numbers.push(num);
    }
    return numbers.join(', ');
}

// Get random fortune from array
function getRandomFortune() {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    return fortunes[randomIndex];
}

// Show fortune (hide cookie, show card)
function revealFortune() {
    // First, trigger the cracking animation
    cookie.classList.add('cracking');
    
    // Wait for the crack animation to complete, then show fortune
    setTimeout(function() {
        // Hide cookie state
        cookieState.classList.add('hidden');
        
        // Show fortune state
        fortuneState.classList.add('show');
        
        // Set fortune text and lucky numbers
        fortuneText.textContent = getRandomFortune();
        luckyNumbers.textContent = generateLuckyNumbers();
    }, 600); // Match the CSS transition duration
}

// Reset to cookie state
function resetCookie() {
    // Hide fortune state
    fortuneState.classList.remove('show');
    
    // Show cookie state
    cookieState.classList.remove('hidden');
    
    // Reset cookie to whole (remove cracking class)
    cookie.classList.remove('cracking');
}

// ===== EVENT LISTENERS =====

// When cookie is clicked
cookie.addEventListener('click', function() {
    revealFortune();
});

// When "Try Another Cookie" button is clicked
tryAgainBtn.addEventListener('click', function() {
    resetCookie();
});