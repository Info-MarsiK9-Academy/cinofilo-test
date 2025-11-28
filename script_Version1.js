// VARIABILI GLOBALI
let currentQuestion = 0;
let userAnswers = [];
let quizStarted = false;
let candidateName = '';
let candidateEmail = '';
let candidatePhone = '';

// INIZIALIZZAZIONE
document.addEventListener('DOMContentLoaded', function() {
    // Shuffle domande
    shuffleQuestions();
    
    // Inizializza array risposte
    userAnswers = new Array(quizQuestions.length).fill(null);
});

// AVVIA TEST
function startTest() {
    const name = document.getElementById('candidate-name').value. trim();
    const email = document.getElementById('candidate-email').value.trim();
    const phone = document.getElementById('candidate-phone'). value.trim();

    if (!name || !email) {
        alert('Per favore, inserisci nome e email.');
        return;
    }

    // Validazione email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Per favore, inserisci un\'email valida.');
        return;
    }

    candidateName = name;
    candidateEmail = email;
    candidatePhone = phone;

    // Nascondi start screen, mostra quiz
    document.getElementById('start-screen').classList.remove('active');
    document.getElementById('quiz-screen').classList.add('active');
    document.getElementById('results-screen').classList.remove('active');

    quizStarted = true;
    loadQuestion(0);
}

// CARICA DOMANDA
function loadQuestion(index) {
    currentQuestion = index;
    const question = quizQuestions[index];

    // Aggiorna progress
    document.getElementById('current-question').textContent = index + 1;
    document. getElementById('total-questions').textContent = quizQuestions.length;
    const percentage = Math.round(((index + 1) / quizQuestions.length) * 100);
    document.getElementById('progress-percentage').textContent = percentage + '%';
    document.getElementById('progress-fill').style.width = percentage + '%';

    // Carica domanda e modulo
    document.getElementById('question-text').textContent = question.question;
    document.getElementById('question-module').textContent = question.module;

    // Carica risposte
    const answersContainer = document.getElementById('answers-container');
    answersContainer.innerHTML = '';

    if (question.type === 'multiple') {
        question.answers.forEach((answer, i) => {
            const label = document.createElement('label');
            label.className = 'answer-option';
            label.innerHTML = `
                <input type="radio" name="answer" value="${i}" 
                    ${userAnswers[index] === i ? 'checked' : ''}>
                <span>${answer.text}</span>
            `;
            label.addEventListener('click', () => selectAnswer(i));
            answersContainer.appendChild(label);
        });
    } else {
        const textarea = document.createElement('textarea');
        textarea.className = 'open-answer-input';
        textarea.placeholder = 'Scrivi la tua risposta qui...';
        textarea.value = userAnswers[index] || '';
        textarea.addEventListener('change', () => {
            userAnswers[index] = textarea. value;
        });
        answersContainer.appendChild(textarea);
    }

    // Aggiorna bottoni
    document.getElementById('prev-btn').disabled = index === 0;
    document.getElementById('next-btn').style.display = index === quizQuestions.length - 1 ? 'none' : 'block';
    document.getElementById('finish-btn').style.display = index === quizQuestions.length - 1 ?  'block' : 'none';

    // Aggiorna stato risposte
    updateAnswersStatus();
}

// SELEZIONA RISPOSTA
function selectAnswer(index) {
    userAnswers[currentQuestion] = index;
    loadQuestion(currentQuestion);
}

// DOMANDA PRECEDENTE
function previousQuestion() {
    if (currentQuestion > 0) {
        loadQuestion(currentQuestion - 1);
    }
}

// DOMANDA SUCCESSIVA
function nextQuestion() {
    if (currentQuestion < quizQuestions.length - 1) {
        loadQuestion(currentQuestion + 1);
    }
}

// AGGIORNA STATO RISPOSTE
function updateAnswersStatus() {
    const answered = userAnswers.filter(a => a !== null).length;
    const total = quizQuestions.length;
    document.getElementById('answers-status-text').textContent = 
        