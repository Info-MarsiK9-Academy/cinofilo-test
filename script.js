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
    document.getElementById('start-screen').classList.remove('active');
    document.getElementById('quiz-screen').classList.add('active');
}
