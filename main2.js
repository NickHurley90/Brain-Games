const startButton = document.getElementById("startBtn");
const nextButton = document.getElementById("nextBtn");
const questionContainerElement = document.getElementById("question-container");

const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const scoreElement = document.getElementById("score");

let randQuestions, currentQuestionIndex;
let score = 0;

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    showScore()
    nextQuestion();
});

function startGame() {
    startButton.classList.add("hide");
    randQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    score = 0;
    showScore();
    nextQuestion();
    welcome();
}

function nextQuestion() {
    resetState();
    showQuestion(randQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    answerButtonsElement.innerHTML = "";
    question.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add("hide");
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    if (correct){
        score++;
        }
    if (randQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove("hide");
    } else {
        startButton.innerText = "Restart";
        startButton.classList.remove("hide");
        showScore();
    }
}


function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add("correct");
    } else {
        element.classList.add("wrong");
    }
}

function clearStatusClass(element) {
    element.classList.remove("correct");
    element.classList.remove("wrong");
}

function showScore() {
    scoreElement.innerText = "Score: " + score + "/" + questions.length;
}

function welcome() {
    alert("Welcome to Memory Games, Good Luck");
}

function endQuiz() {
    alert("Quiz ended! Your score is + score }/${questions.length}. Your high score is ${highScore}.");
}



const questions = [
    {
        question: "What is 2 + 2?",
        answers: [
            { text: '4', correct: true },
            { text: '22', correct: false }
        ]
    },
    {
        question: "What is the capital of France?",
        answers: [
            { text: 'Paris', correct: true },
            { text: 'London', correct: false },
            { text: 'Berlin', correct: false },
            { text: 'Rome', correct: false }
        ]
    },
    {
        question: "What country has the highest life expectancy?",
        answers: [
            { text: 'Hong Kong', correct: true },
            { text: 'Switzerland', correct: false },
            { text: 'Norway', correct: false },
            { text: 'Iceland', correct: false }
        ]
    },
    {
        question: "Where would you be if you were standing on the Spanish Steps?",
        answers: [
            { text: 'Italy', correct: false },
            { text: 'Kenya', correct: false },
            { text: 'Spain', correct: false },
            { text: 'Rome', correct: true }
        ]
    },
    {
        question: "What is the most common surname in the United States?",
        answers: [
            { text: 'Foster', correct: false },
            { text: 'Cruise', correct: false },
            { text: 'Smith', correct: true },
            { text: 'Green', correct: false }
        ]
    },
    {
        question: "Who was the Ancient Greek God of the Sun?",
        answers: [
            { text: 'Goku', correct: false },
            { text: 'Apollo', correct: true },
            { text: 'Aries', correct: false },
            { text: 'Nika', correct: false }
        ]
    },
    {
        question: "What country has won the most World Cups?",
        answers: [
            { text: 'Brazil', correct: true },
            { text: 'England', correct: false },
            { text: 'Germany', correct: false },
            { text: 'USA', correct: false }
        ]
    },
    {
        question: "What country drinks the most coffee per capita?",
        answers: [
            { text: 'USA', correct: false },
            { text: 'Finland', correct: true },
            { text: 'Russia', correct: false },
            { text: 'Canada', correct: false }
        ]
    },
    {
        question: "Compared to their body weight, what animal is the strongest?",
        answers: [
            { text: 'Ant', correct: false },
            { text: 'Elephant', correct: false },
            { text: 'Beetle', correct: true },
            { text: 'Cow', correct: false }
        ]
    },
    {
        question: "Which is the only body part that is fully grown from birth?",
        answers: [
            { text: 'Eyes', correct: true },
            { text: 'Feet', correct: false },
            { text: 'Teeth', correct: false },
            { text: 'Brain', correct: false }
        ]
    }
];
