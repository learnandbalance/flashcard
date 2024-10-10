let flashcards = [];
let currentCard = 0;

async function fetchFlashcards() {
    const response = await fetch('vocabulary01.json');  // Load your JSON file
    flashcards = await response.json();
    showCard(currentCard);
}

function showCard(index) {
    if (flashcards.length > 0) {
        document.getElementById('question').innerText = flashcards[index].Word;  // Show the word
        document.getElementById('answer').style.display = 'none';  // Initially hide the details
    } else {
        console.log("No flashcards found.");
    }
}

document.getElementById('toggle').addEventListener('click', () => {
    const answer = document.getElementById('answer');
    if (answer.style.display === 'none') {
        // Show full details: Definition, Verb Forms, and Turkish Translation
        const card = flashcards[currentCard];
        answer.innerHTML = `
            <strong>Definition:</strong> ${card.Definition}<br><br>
            <strong>Turkish Translation:</strong> ${card["Turkish Translation"]}<br><br>
            ${card["Verb Form (if applicable)"] ? `<strong>Verb Form:</strong> ${card["Verb Form (if applicable)"]}<br><br>` : ""}
        `;
        answer.style.display = 'block';
    } else {
        answer.style.display = 'none';
    }
});

document.getElementById('next').addEventListener('click', () => {
    currentCard = (currentCard + 1) % flashcards.length;
    showCard(currentCard);
});

fetchFlashcards();
