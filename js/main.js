 /*----- constants -----*/


  /*----- state variables -----*/


  /*----- cached elements  -----*/


  /*----- event listeners -----*/


  /*----- functions -----*/

let currentSlide = 1;
let score = 0;

function checkAnswer(selectedAnswer) {
    

const correctAnswers = {
        1: 'Paris', 
        2: 'Berlin',
        3: 'Tokyo',
        4: 'Madrid',
        5: 'Canberra',
}


    if (selectedAnswer === correctAnswers[currentSlide]) {
        score++;
    }

    if (currentSlide < 10) {
        currentSlide++;
        displayNextSlide();
        displayScore();
    } else {
        endQuiz();
    }
}

function displayNextSlide() {
    const questionElement = document.getElementById('question');
    questionElement.textContent = `Question ${currentSlide}: ${getQuestion(currentSlide)}`;
}

function getQuestion(slideNumber) {
    
    const questions = {
        1: 'What is the capital of France?',
        2: 'What is the capital of Germany?',
        3: 'What is the capital of Japan?',
        4: 'What is the capital of Spain?',
        5: 'What is the capital of Australia?',
        6: 'What is the capital of United States?',
        
}

    return questions[slideNumber];
}

function displayScore() {
    const scoreElement = document.getElementById('score');
    scoreElement.textContent = `Score: ${score}/10`;
}

function endQuiz() {
    alert(`Quiz ended! Your score is ${score}/10.`);
}

What country has the highest life expectancy? Hong Kong
Where would you be if you were standing on the Spanish Steps? Rome
Which language has the more native speakers: English or Spanish? Spanish
What is the most common surname in the United States? Smith
What disease commonly spread on pirate ships? Scurvy
Who was the Ancient Greek God of the Sun? Apollo