
/* ---------- Config ---------- */
const QUESTIONS_PER_QUIZ = 20; // how many questions to pick from the pool each round

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
//   const qOrder = shuffle(questions);
//   return qOrder.map(q => ({
//     question: q.question,
//     answers: shuffle(q.answers)
//   }));
const pool = shuffle(questions);                      // shuffle the entire 100
  const picked = pool.slice(0, QUESTIONS_PER_QUIZ);      // take the first 20 of the shuffle
  return picked.map(q => ({
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
