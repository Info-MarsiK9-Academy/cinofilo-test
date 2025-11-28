// ===== CONFIGURAZIONE FORMSPREE =====
// ⚠️ SOSTITUISCI "fXXXXXXXX" CON IL TUO FORM ID DA FORMSPREE
// Esempio: const FORMSPREE_ID = "f5h8k2m9p";
const FORMSPREE_ID = "f/xblvzegq"; // 👈 MODIFICA QUESTO CON IL TUO ID! 

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
    
    // Mostra la prima schermata
    showScreen('start-screen');
});

// AVVIA TEST
function startTest() {
    const name = document.getElementById('candidate-name').value.trim();
    const email = document.getElementById('candidate-email').value.trim();
    const phone = document.getElementById('candidate-phone').value.trim();
    
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
    showScreen('quiz-screen');
    quizStarted = true;
    
    // Mostra la prima domanda
    showQuestion();
}

// MOSTRA SCHERMATA
function showScreen(screenId) {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => screen.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

// MOSTRA DOMANDA
function showQuestion() {
    const question = quizQuestions[currentQuestion];
    
    // Aggiorna progress bar
    updateProgress();
    
    // Mostra modulo
    document.getElementById('module-badge').textContent = question.module;
    
    // Mostra testo domanda
    document.getElementById('question-text').textContent = question.question;
    
    // Mostra risposte in base al tipo
    const answersContainer = document.getElementById('answers-container');
    answersContainer.innerHTML = '';
    
    if (question.type === 'multiple') {
        // Domanda a scelta multipla
        question.answers.forEach((answer, index) => {
            const answerDiv = document.createElement('div');
            answerDiv.className = 'answer-option';
            
            const isChecked = userAnswers[currentQuestion] === index ? 'checked' : '';
            if (isChecked) answerDiv.classList.add('selected');
            
            answerDiv.innerHTML = `
                <input type="radio" name="answer" id="answer${index}" value="${index}" ${isChecked}>
                <span>${answer.text}</span>
            `;
            
            answerDiv.addEventListener('click', function() {
                selectAnswer(index);
            });
            
            answersContainer.appendChild(answerDiv);
        });
    } else if (question.type === 'open') {
        // Domanda aperta
        const savedAnswer = userAnswers[currentQuestion] || '';
        answersContainer.innerHTML = `
            <textarea class="open-answer-input" id="open-answer" placeholder="Scrivi la tua risposta qui...">${savedAnswer}</textarea>
        `;
        
        document.getElementById('open-answer').addEventListener('input', function() {
            userAnswers[currentQuestion] = this.value.trim();
            updateAnswersStatus();
        });
    }
    
    // Aggiorna stato bottoni
    updateNavigationButtons();
    updateAnswersStatus();
}

// SELEZIONA RISPOSTA
function selectAnswer(index) {
    userAnswers[currentQuestion] = index;
    
    // Aggiorna UI
    const options = document.querySelectorAll('.answer-option');
    options.forEach((opt, i) => {
        opt.classList.toggle('selected', i === index);
        opt.querySelector('input').checked = (i === index);
    });
    
    updateAnswersStatus();
}

// AGGIORNA PROGRESS BAR
function updateProgress() {
    const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;
    document.getElementById('progress-fill').style.width = progress + '%';
    document.getElementById('current-question').textContent = currentQuestion + 1;
    document.getElementById('total-questions').textContent = quizQuestions.length;
}

// AGGIORNA STATO RISPOSTE
function updateAnswersStatus() {
    const answered = userAnswers.filter(a => a !== null && a !== '').length;
    document.getElementById('answers-status').textContent = `Domande risposte: ${answered} su ${quizQuestions.length}`;
    
    // Abilita finish button se tutte le domande sono risposte
    const finishBtn = document.getElementById('finish-btn');
    if (finishBtn) {
        finishBtn.disabled = answered < quizQuestions.length;
    }
}

// AGGIORNA BOTTONI NAVIGAZIONE
function updateNavigationButtons() {
    document.getElementById('prev-btn').disabled = currentQuestion === 0;
    document.getElementById('next-btn').disabled = currentQuestion === quizQuestions.length - 1;
}

// DOMANDA PRECEDENTE
function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQu
    
    // Nascondi start screen, mostra quiz
    document.getElementById('start-screen').classList.remove('active');
    document.getElementById('quiz-screen').classList.add('active');
}
