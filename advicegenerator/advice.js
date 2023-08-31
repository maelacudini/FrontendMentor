// script.js
function getAdvice() {
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json()) // Parse response as JSON
        .then(data => {
            const adviceText = data.slip.advice;
            const adviceElement = document.getElementById('adviceText');
            adviceElement.textContent = adviceText;
        })
        .catch(error => {
            console.error('Error fetching advice:', error);
        });
}

const fetchButton = document.getElementById('fetchButton');
fetchButton.addEventListener('click', getAdvice);
