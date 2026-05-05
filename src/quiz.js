const QUIZ_QUESTIONS = [
  { category: "Basics", question: "Which header file is needed to use cout in C++?", options: ["stdio.h", "iostream", "string.h", "stdlib.h"], answer: 1 },
  { category: "Basics", question: "What is the correct way to declare an integer variable?", options: ["integer x = 5;", "int x = 5;", "x = 5;", "var x = 5;"], answer: 1 },
  { category: "Operators", question: "What is the output of: int x = 5; cout << x++;", code: "int x = 5;\ncout << x++;", options: ["4", "5", "6", "Error"], answer: 1 },
  { category: "Operators", question: "What does the % operator do?", options: ["Division", "Power", "Modulus (remainder)", "Percentage"], answer: 2 },
  { category: "Control Flow", question: "What keyword is used to exit a switch case?", options: ["exit", "stop", "break", "return"], answer: 2 },
  { category: "Loops", question: "Which loop is guaranteed to execute at least once?", options: ["for", "while", "do-while", "foreach"], answer: 2 },
  { category: "Functions", question: "What is function overloading?", options: ["Calling a function too many times", "Multiple functions with same name but different parameters", "A function that calls itself", "Passing functions as arguments"], answer: 1 },
  { category: "Recursion", question: "What is the base case in recursion?", options: ["The recursive call", "The return type", "The stopping condition that ends recursion", "The first call to the function"], answer: 2 },
  { category: "Arrays", question: "What is the index of the first element of an array in C++?", options: ["1", "0", "-1", "Depends on compiler"], answer: 1 },
  { category: "OOP", question: "Which keyword is used to inherit a class in C++?", options: ["extends", "inherits", ":", "->"], answer: 2 },
  { category: "OOP", question: "What does 'virtual' keyword enable in C++?", options: ["Compile-time polymorphism", "Runtime polymorphism", "Better performance", "Memory allocation"], answer: 1 },
  { category: "Pointers", question: "What does the * operator do when used with a pointer?", options: ["Gets address of variable", "Declares a new variable", "Dereferences (gets value at address)", "Multiplies two values"], answer: 2 },
  { category: "STL", question: "Which STL container keeps elements sorted and unique?", options: ["vector", "list", "set", "deque"], answer: 2 },
  { category: "Templates", question: "What is the purpose of templates in C++?", options: ["Create HTML templates", "Write generic code that works with any data type", "Speed up compilation", "Handle exceptions"], answer: 1 },
  { category: "Exception Handling", question: "Which keyword is used to throw an exception in C++?", options: ["raise", "throw", "except", "error"], answer: 1 }
];

let quizState = { currentQ: 0, score: 0, timer: null, timeLeft: 30, answers: [], passed: false };

function startQuiz() {
  quizState = { currentQ: 0, score: 0, timer: null, timeLeft: 30, answers: [], passed: false };
  document.getElementById('quiz-start').style.display = 'none';
  document.getElementById('quiz-questions').style.display = 'block';
  document.getElementById('q-total').textContent = QUIZ_QUESTIONS.length;
  loadQuestion();
}

function loadQuestion() {
  const q = QUIZ_QUESTIONS[quizState.currentQ];
  document.getElementById('q-num').textContent = quizState.currentQ + 1;
  document.getElementById('q-category').textContent = q.category;
  document.getElementById('q-text').textContent = q.question;
  document.getElementById('live-score').textContent = quizState.score;

  const codeEl = document.getElementById('q-code');
  if (q.code) { codeEl.style.display = 'block'; codeEl.textContent = q.code; }
  else { codeEl.style.display = 'none'; }

  const pct = (quizState.currentQ / QUIZ_QUESTIONS.length) * 100;
  document.getElementById('quiz-progress-fill').style.width = pct + '%';

  const optionsEl = document.getElementById('q-options');
  optionsEl.innerHTML = '';
  const labels = ['A', 'B', 'C', 'D'];
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'q-opt';
    btn.innerHTML = `<span class="q-opt-label">${labels[i]}</span><span>${opt}</span>`;
    btn.onclick = () => selectAnswer(i);
    optionsEl.appendChild(btn);
  });

  clearInterval(quizState.timer);
  quizState.timeLeft = 30;
  updateTimer();
  quizState.timer = setInterval(() => {
    quizState.timeLeft--;
    updateTimer();
    if (quizState.timeLeft <= 0) { clearInterval(quizState.timer); timeUp(); }
  }, 1000);
}

function updateTimer() {
  const el = document.getElementById('quiz-timer');
  el.textContent = quizState.timeLeft;
  el.classList.toggle('danger', quizState.timeLeft <= 10);
}

function timeUp() {
  quizState.answers.push({ q: quizState.currentQ, correct: false });
  showAnswer(-1);
  setTimeout(nextQuestion, 1500);
}

function selectAnswer(idx) {
  clearInterval(quizState.timer);
  const q = QUIZ_QUESTIONS[quizState.currentQ];
  const correct = idx === q.answer;
  if (correct) quizState.score++;
  quizState.answers.push({ q: quizState.currentQ, correct });
  showAnswer(idx);
  setTimeout(nextQuestion, 1500);
}

function showAnswer(selectedIdx) {
  const q = QUIZ_QUESTIONS[quizState.currentQ];
  const opts = document.querySelectorAll('.q-opt');
  opts.forEach((btn, i) => {
    btn.classList.add('disabled');
    if (i === q.answer) btn.classList.add('correct');
    else if (i === selectedIdx) btn.classList.add('wrong');
  });
  document.getElementById('live-score').textContent = quizState.score;
}

function nextQuestion() {
  quizState.currentQ++;
  if (quizState.currentQ >= QUIZ_QUESTIONS.length) showResults();
  else loadQuestion();
}

function showResults() {
  document.getElementById('quiz-questions').style.display = 'none';
  document.getElementById('quiz-results').style.display = 'block';

  const total = QUIZ_QUESTIONS.length;
  const score = quizState.score;
  const pct = Math.round((score / total) * 100);
  const passed = pct >= 60;
  quizState.passed = passed;

  document.getElementById('final-score').textContent = score;
  document.getElementById('final-total').textContent = total;

  const circumference = 314;
  const offset = circumference - (score / total) * circumference;
  setTimeout(() => {
    const circle = document.getElementById('score-circle');
    circle.style.strokeDashoffset = offset;
    circle.style.transition = 'stroke-dashoffset 1s ease';
    circle.style.stroke = passed ? '#50fa7b' : '#ff5555';
  }, 100);

  document.getElementById('result-icon').textContent = passed ? '🏆' : '📚';
  document.getElementById('result-title').textContent = passed ? 'Excellent! You Passed!' : 'Keep Practicing!';
  document.getElementById('result-message').textContent = passed
    ? `You scored ${pct}%! Certificate unlock ho gayi!`
    : `You scored ${pct}%. 60% chahiye pass hone ke liye. Try again!`;

  document.getElementById('result-breakdown').innerHTML = `
    <div class="rb-item correct"><strong>${score}</strong><span>Correct</span></div>
    <div class="rb-item wrong"><strong>${total - score}</strong><span>Wrong</span></div>
    <div class="rb-item pct"><strong>${pct}%</strong><span>Score</span></div>
  `;

  const certBtn = document.getElementById('cert-btn');
  certBtn.style.display = passed ? 'inline-block' : 'none';

  if (passed) {
    document.getElementById('cert-locked').style.display = 'none';
    document.getElementById('cert-unlocked').style.display = 'block';
    document.getElementById('nav-score').style.display = 'flex';
    document.getElementById('nav-score-val').textContent = score + '/' + total;
  }
}

function restartQuiz() {
  document.getElementById('quiz-results').style.display = 'none';
  document.getElementById('quiz-start').style.display = 'block';
}

function generateCertificate() {
  const name = document.getElementById('cert-name').value.trim();
  if (!name) { alert('Please enter your name!'); return; }

  const wrap = document.getElementById('certificate-canvas-wrap');
  wrap.innerHTML = '';
  const canvas = document.createElement('canvas');
  canvas.width = 900; canvas.height = 630;
  wrap.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  const W = canvas.width, H = canvas.height;

  const bgGrad = ctx.createLinearGradient(0, 0, W, H);
  bgGrad.addColorStop(0, '#05070f');
  bgGrad.addColorStop(0.5, '#0a0d1a');
  bgGrad.addColorStop(1, '#0f1426');
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, W, H);

  ctx.strokeStyle = '#00d4ff'; ctx.lineWidth = 4;
  ctx.strokeRect(20, 20, W-40, H-40);
  ctx.strokeStyle = 'rgba(0,212,255,0.3)'; ctx.lineWidth = 1;
  ctx.strokeRect(32, 32, W-64, H-64);

  [[40,40],[W-40,40],[40,H-40],[W-40,H-40]].forEach(([cx,cy]) => {
    ctx.beginPath(); ctx.arc(cx,cy,12,0,Math.PI*2); ctx.fillStyle='#00d4ff'; ctx.fill();
    ctx.beginPath(); ctx.arc(cx,cy,8,0,Math.PI*2); ctx.fillStyle='#0a0d1a'; ctx.fill();
  });

  ctx.fillStyle='rgba(0,212,255,0.1)';
  roundRect(ctx,W/2-120,55,240,40,20); ctx.fill();
  ctx.strokeStyle='rgba(0,212,255,0.4)'; ctx.lineWidth=1;
  roundRect(ctx,W/2-120,55,240,40,20); ctx.stroke();
  ctx.font='bold 14px monospace'; ctx.fillStyle='#00d4ff'; ctx.textAlign='center';
  ctx.fillText('C++ MASTER PLATFORM', W/2, 80);

  ctx.font='64px serif'; ctx.fillText('🏆', W/2, 185);

  ctx.font='bold 44px monospace'; ctx.fillStyle='#ffffff';
  ctx.fillText('CERTIFICATE', W/2, 245);
  ctx.font='18px monospace'; ctx.fillStyle='rgba(255,255,255,0.5)';
  ctx.fillText('OF COMPLETION', W/2, 275);

  const divGrad = ctx.createLinearGradient(100,0,W-100,0);
  divGrad.addColorStop(0,'transparent'); divGrad.addColorStop(0.5,'#00d4ff'); divGrad.addColorStop(1,'transparent');
  ctx.strokeStyle=divGrad; ctx.lineWidth=1;
  ctx.beginPath(); ctx.moveTo(100,295); ctx.lineTo(W-100,295); ctx.stroke();

  ctx.font='16px sans-serif'; ctx.fillStyle='rgba(255,255,255,0.6)';
  ctx.fillText('This certifies that', W/2, 335);

  ctx.font='bold 42px Georgia,serif';
  const nameGrad=ctx.createLinearGradient(0,0,W,0);
  nameGrad.addColorStop(0,'#00d4ff'); nameGrad.addColorStop(1,'#00ffcc');
  ctx.fillStyle=nameGrad; ctx.fillText(name, W/2, 390);

  const nw=ctx.measureText(name).width;
  ctx.strokeStyle='rgba(0,212,255,0.4)'; ctx.lineWidth=1;
  ctx.beginPath(); ctx.moveTo(W/2-nw/2-20,400); ctx.lineTo(W/2+nw/2+20,400); ctx.stroke();

  ctx.font='16px sans-serif'; ctx.fillStyle='rgba(255,255,255,0.7)';
  ctx.fillText('has successfully completed the C++ Programming Course', W/2, 435);
  ctx.fillText('and demonstrated proficiency in all C++ concepts', W/2, 458);

  const total=QUIZ_QUESTIONS.length, score=quizState.score;
  const pct=Math.round((score/total)*100);
  ctx.fillStyle='rgba(0,212,255,0.1)';
  roundRect(ctx,W/2-80,476,160,40,8); ctx.fill();
  ctx.strokeStyle='rgba(0,212,255,0.3)'; ctx.lineWidth=1;
  roundRect(ctx,W/2-80,476,160,40,8); ctx.stroke();
  ctx.font='bold 18px monospace'; ctx.fillStyle='#00ffcc';
  ctx.fillText(`Score: ${score}/${total} (${pct}%)`, W/2, 502);

  const date=new Date().toLocaleDateString('en-IN',{day:'2-digit',month:'long',year:'numeric'});
  ctx.font='13px sans-serif'; ctx.fillStyle='rgba(255,255,255,0.4)';
  ctx.fillText(`Issued on ${date}`, W/2, 540);

  ctx.strokeStyle='rgba(255,255,255,0.2)'; ctx.lineWidth=1;
  ctx.beginPath(); ctx.moveTo(120,590); ctx.lineTo(280,590); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(620,590); ctx.lineTo(780,590); ctx.stroke();
  ctx.font='12px sans-serif'; ctx.fillStyle='rgba(255,255,255,0.4)';
  ctx.fillText('Instructor', 200, 610);
  ctx.fillText('C++ Master Platform', 700, 610);

  document.getElementById('download-btn').style.display='inline-block';
}

function roundRect(ctx,x,y,w,h,r){
  ctx.beginPath();
  ctx.moveTo(x+r,y); ctx.lineTo(x+w-r,y);
  ctx.arcTo(x+w,y,x+w,y+r,r); ctx.lineTo(x+w,y+h-r);
  ctx.arcTo(x+w,y+h,x+w-r,y+h,r); ctx.lineTo(x+r,y+h);
  ctx.arcTo(x,y+h,x,y+h-r,r); ctx.lineTo(x,y+r);
  ctx.arcTo(x,y,x+r,y,r); ctx.closePath();
}

function downloadCertificate() {
  const canvas = document.querySelector('#certificate-canvas-wrap canvas');
  if (!canvas) return;
  const link = document.createElement('a');
  link.download = 'cpp-master-certificate.png';
  link.href = canvas.toDataURL('image/png');
  link.click();
}