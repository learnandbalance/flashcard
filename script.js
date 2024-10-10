let flashcards = [];
let currentCard = 0;

// Fetch the JSON data
async function fetchFlashcards() {
    const response = await fetch('vocabulary01.json');  // This is where your JSON file is loaded
    flashcards = await response.json();
    showCard(currentCard);
}

// Display the current flashcard
function showCard(index) {
    if (flashcards.length > 0) {
        document.getElementById('question').innerText = flashcards[index].Word;  // Adjusting to 'Word' key
        document.getElementById('answer').style.display = 'none';  // Hide the answer initially
    } else {
        console.log("No flashcards found.");
    }
}

// Toggle between showing the question and the answer
document.getElementById('toggle').addEventListener('click', () => {
    const answer = document.getElementById('answer');
    if (answer.style.display === 'none') {
        answer.style.display = 'block';
        answer.innerText = flashcards[currentCard].Definition;  // Display the 'Definition' when showing answer
    } else {
        answer.style.display = 'none';
    }
});

// Move to the next card
document.getElementById('next').addEventListener('click', () => {
    currentCard = (currentCard + 1) % flashcards.length;
    showCard(currentCard);
});

// Call the function to load the flashcards when the page is ready
fetchFlashcards();
