let flashcards = [];
let currentCard = 0;

async function fetchFlashcards() {
    const response = await fetch('vocabulary02.json');  // For CSV, you'll parse it differently
    flashcards = await response.json();  // Adjust based on your CSV format
    showCard(currentCard);
}

function showCard(index) {
    document.getElementById('question').innerText = flashcards[index].word;
    document.getElementById('answer').style.display = 'none';
}

document.getElementById('toggle').addEventListener('click', () => {
    const answer = document.getElementById('answer');
    if (answer.style.display === 'none') {
        answer.style.display = 'block';
        answer.innerText = flashcards[currentCard].definition;
    } else {
        answer.style.display = 'none';
    }
});

document.getElementById('next').addEventListener('click', () => {
    currentCard = (currentCard + 1) % flashcards.length;
    showCard(currentCard);
});

fetchFlashcards();
