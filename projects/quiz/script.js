const questions = [
    {
        question: "1. What is the full form of internet?",
        answers: [
            {text:"InterContinental Network", correct: false},
            {text:"Internal Network", correct: false},
            {text:"Interconnected Network", correct: true},
            {text:"International Network", correct: false}
        ]
    },
    {
        question: "2. The transmission of a file to our computer from the internet is called?",
        answers: [
            {text:"uploading", correct: false},
            {text:"downloading", correct: true},
            {text:"receiving file", correct: false},
            {text:"saving", correct: false}
        ]
    },
    {
        question: "3. Each computer on a network is recognized by a unique",
        answers: [
            {text:"Ip address", correct: true},
            {text:"HTTP", correct: false},
            {text:"HTTPS", correct: false},
            {text:"WWW", correct: false}
        ]
    },
    {
        question: "4. A computer communicates with other computers on the internet through",
        answers: [
            {text:"IP", correct: false},
            {text:"TCP/IP", correct: true},
            {text:"HTTPS", correct: false},
            {text:"Web Browser", correct: false}
        ]
    },
    {
        question: "5. What is the full form of HTML?",
        answers: [
            {text:"High Transfer Machine Language", correct: false},
            {text:"High Transmission Markup Language", correct: false},
            {text:"Hyper Text Markup Language", correct: true},
            {text:"Hypermedia Markup Language", correct: false}
        ]
    },
    {
        question: "6. A set of rules followed by each computer present on a network is called",
        answers: [
            {text:"Web", correct: false},
            {text:"HTTP", correct: false},
            {text:"Domain", correct: false},
            {text:"Protocol", correct: true}
        ]
    },
    {
        question: "7. Inventor of www (World wide web) is . . . . . .",
        answers: [
            {text:"Bill Gates", correct: false},
            {text:"Lee. N. Feyong", correct: false},
            {text:"Tim Berners Lee", correct: true},
            {text:"Tom Berners Lee", correct: false}
        ]
    },
    {
        question: "8. Internet is governed by several voluntary organizations such as",
        answers: [
            {text:"IAB (Internet Architecture Board)", correct: false},
            {text:"IETF (Internet Engineering Task Force)", correct: false},
            {text:"InterNIC", correct: false},
            {text:"All of the above", correct: true}
        ]
    },
    {
        question: "9. What is the full form of W3C?",
        answers: [
            {text:"World Web Wide Consortium", correct: false},
            {text:"World Wide Web Communication", correct: false},
            {text:"World Wide Web Consortium", correct: true},
            {text:"World Wide Web Cyber", correct: false}
        ]
    },
    {
        question: "10. To access a webpage, an URL is required. What is the full form of URL?",
        answers: [
            {text:"Uniform Resource Locator", correct: true},
            {text:"Universal Resource Locator", correct: false},
            {text:"Universal Resource Line", correct: false},
            {text:"Uniform Resource Line", correct: false}
        ]
    },
    {
        question: "11. A world wide web contains billions of webpages",
        answers: [
            {text:"residing in several computers", correct: false},
            {text:"created using HTML", correct: false},
            {text:"residing in many computer systems linked together using HTML", correct: false},
            {text:"Both b and c", correct: true}
        ]
    },
    {
        question: "12. A software program that is used to view web pages is called",
        answers: [
            {text:"Site", correct: false},
            {text:"Host", correct: false},
            {text:"Link", correct: false},
            {text:"Browser", correct: true}
        ]
    },
    {
        question: "13. Every computer machine host on the internet network has",
        answers: [
            {text:"similar IP address", correct: false},
            {text:"unique 15-digit number", correct: false},
            {text:"unique IP address", correct: true},
            {text:"the same IP address", correct: false}
        ]
    },
    {
        question: "14. An identifier that sends and receives information across the Internet is called",
        answers: [
            {text:"Ip Address", correct: true},
            {text:"WWW", correct: false},
            {text:"Network", correct: false},
            {text:"URL", correct: false}
        ]
    },
    {
        question: "15. Which IP addresses are mostly used by web, email, and gaming servers?",
        answers: [
            {text:"Dynamic", correct: false},
            {text:"Static", correct: true},
            {text:"MAC", correct: false},
            {text:"Both a and b", correct: false}
        ]
    },
    {
        question: "16. Which IP addresses are mostly used by companies, and business firms?",
        answers: [
            {text:"Static", correct: false},
            {text:"MAC", correct: false},
            {text:"Dynamic", correct: true},
            {text:"Normal", correct: false}
        ]
    },
    {
        question: "17. What is the full form of ISP?",
        answers: [
            {text:"International Service Provider", correct: false},
            {text:"Internet Service Provider", correct: true},
            {text:"Ithernet Service Provider", correct: false},
            {text:"Intra Service Provider", correct: false}
        ]
    },
    {
        question: "18. Internet address is a",
        answers: [
            {text:"8-bit number", correct: false},
            {text:"16-bit number", correct: false},
            {text:"32-bit number", correct: true},
            {text:"64-bit number", correct: false}
        ]
    },
    {
        question: "19. In HTTPS, S means",
        answers: [
            {text:"Secret", correct: false},
            {text:"Secure", correct: true},
            {text:"Socket", correct: false},
            {text:"Software", correct: false}
        ]
    },
    {
        question: "20. A unique name used in the URLs that identify website is called?",
        answers: [
            {text:"Domain Name", correct: true},
            {text:"IP", correct: false},
            {text:"TCP", correct: false},
            {text:"Host", correct: false}
        ]
    }
];

/* ---------- DOM references ---------- */
const startScreen   = document.getElementById('start-screen');
const quizScreen    = document.getElementById('quiz-screen');
const resultScreen  = document.getElementById('result-screen');

const startBtn      = document.getElementById('start-btn');
const nextBtn       = document.getElementById('next-btn');
const retryBtn      = document.getElementById('retry-btn');

const qCountEl      = document.getElementById('q-count');
const qScoreLiveEl  = document.getElementById('q-score-live');
const progressFill  = document.getElementById('progress-fill');
const questionText  = document.getElementById('question-text');
const answersGrid   = document.getElementById('answers-grid');
const answerButtons = Array.from(document.querySelectorAll('.answer-btn'));

const resultTitle   = document.getElementById('result-title');
const resultMessage = document.getElementById('result-message');
const scoreNumber   = document.getElementById('score-number');
const scoreTotal    = document.getElementById('score-total');
const scoreCircle   = document.querySelector('.score-circle');

/* ---------- State ---------- */
let shuffledQuestions = [];
let currentIndex = 0;
let score = 0;
let answered = false;

/* ---------- Helpers ---------- */
function shuffle(array) {
  const copy = array.slice();
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// Shuffle both question order AND each question's answer order,
// keeping track of which answer object is correct.
function buildShuffledQuestions() {
  const qOrder = shuffle(questions);
  return qOrder.map(q => ({
    question: q.question,
    answers: shuffle(q.answers)
  }));
}

function showScreen(screen) {
  [startScreen, quizScreen, resultScreen].forEach(s => s.classList.add('hidden'));
  screen.classList.remove('hidden');
}

/* ---------- Quiz flow ---------- */
function startQuiz() {
  shuffledQuestions = buildShuffledQuestions();
  currentIndex = 0;
  score = 0;
  showScreen(quizScreen);
  loadQuestion();
}

function loadQuestion() {
  answered = false;
  nextBtn.disabled = true;
  nextBtn.textContent = currentIndex === shuffledQuestions.length - 1 ? 'See Results' : 'Next';

  const current = shuffledQuestions[currentIndex];
  questionText.textContent = current.question.replace(/^\d+\.\s*/, '');

  qCountEl.textContent = `Question ${currentIndex + 1} / ${shuffledQuestions.length}`;
  qScoreLiveEl.textContent = `Score: ${score}`;
  progressFill.style.width = `${((currentIndex) / shuffledQuestions.length) * 100}%`;

  answerButtons.forEach((btn, i) => {
    const answer = current.answers[i];
    btn.textContent = answer.text;
    btn.dataset.correct = answer.correct;
    btn.disabled = false;
    btn.classList.remove('selected', 'correct', 'wrong');
  });
}

function selectAnswer(e) {
  const btn = e.currentTarget;
  if (answered) return;
  answered = true;

  const isCorrect = btn.dataset.correct === 'true';
  if (isCorrect) score++;

  answerButtons.forEach(b => {
    b.disabled = true;
    if (b.dataset.correct === 'true') {
      b.classList.add('correct');
    } else if (b === btn) {
      b.classList.add('wrong');
    }
  });

  qScoreLiveEl.textContent = `Score: ${score}`;
  progressFill.style.width = `${((currentIndex + 1) / shuffledQuestions.length) * 100}%`;
  nextBtn.disabled = false;
}

function nextQuestion() {
  currentIndex++;
  if (currentIndex < shuffledQuestions.length) {
    loadQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  const total = shuffledQuestions.length;
  const pct = Math.round((score / total) * 100);

  showScreen(resultScreen);
  scoreNumber.textContent = score;
  scoreTotal.textContent = `/ ${total}`;
  scoreCircle.style.setProperty('--pct', pct);

  let title, message;
  if (pct === 100) {
    title = 'Perfect score!';
    message = 'You nailed every single question. Internet expert confirmed.';
  } else if (pct >= 70) {
    title = 'Nice work!';
    message = 'Solid grasp of the basics — just a couple to brush up on.';
  } else if (pct >= 40) {
    title = 'Good effort!';
    message = 'You know some of it — a quick review will fill the gaps.';
  } else {
    title = 'Keep practicing!';
    message = 'Give it another go — the questions shuffle every time.';
  }
  resultTitle.textContent = title;
  resultMessage.textContent = message;
}

/* ---------- Events ---------- */
startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', nextQuestion);
retryBtn.addEventListener('click', startQuiz);
answerButtons.forEach(btn => btn.addEventListener('click', selectAnswer));
