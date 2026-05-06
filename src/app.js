window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('fade-out');
    setTimeout(() => document.getElementById('loader').remove(), 600);
  }, 2200);
});

(function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  const ctx = canvas.getContext('2d');
  let particles = [];

  function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
  resize();
  window.addEventListener('resize', resize);

  function createParticle() {
    return {
      x: Math.random() * canvas.width, y: Math.random() * canvas.height,
      vx: (Math.random()-0.5)*0.4, vy: (Math.random()-0.5)*0.4,
      r: Math.random()*1.5+0.3, alpha: Math.random()*0.4+0.1,
      color: Math.random()>0.5 ? '0,212,255' : '0,255,204'
    };
  }

  for (let i = 0; i < 80; i++) particles.push(createParticle());

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
      ctx.fillStyle = `rgba(${p.color},${p.alpha})`; ctx.fill();
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
    });

    for (let i = 0; i < particles.length; i++) {
      for (let j = i+1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(0,212,255,${0.06*(1-dist/120)})`;
          ctx.lineWidth = 0.5; ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
})();

function showSection(name) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  document.getElementById(name).classList.add('active');
  document.querySelectorAll('.nav-link').forEach(l => {
    if (l.getAttribute('onclick') && l.getAttribute('onclick').includes(name))
      l.classList.add('active');
  });
  if (name === 'topics') buildTopicList();
  if (name === 'certificate') checkCertLock();
}

function buildTopicList() {
  const list = document.getElementById('topic-list');
  if (list.children.length > 0) return;
  TOPICS.forEach((t, i) => {
    const li = document.createElement('li');
    li.innerHTML = `<span>${t.icon}</span><span>${t.title}</span>`;
    li.dataset.index = i;
    li.onclick = () => openTopic(i);
    list.appendChild(li);
  });
}

function openTopic(idx) {
  showSection('topics');
  buildTopicList();
  document.querySelectorAll('#topic-list li').forEach(li => li.classList.remove('active'));
  const li = document.querySelector(`#topic-list li[data-index="${idx}"]`);
  if (li) { li.classList.add('active'); li.scrollIntoView({ block: 'nearest' }); }

  const t = TOPICS[idx];
  const content = document.getElementById('topic-content');
  const prevIdx = idx > 0 ? idx-1 : null;
  const nextIdx = idx < TOPICS.length-1 ? idx+1 : null;

  content.innerHTML = `
    <div class="topic-detail">
      ${t.content}
      <div class="topic-nav">
        ${prevIdx !== null ? `<button class="btn-secondary" onclick="openTopic(${prevIdx})">← ${TOPICS[prevIdx].title}</button>` : '<span></span>'}
        ${nextIdx !== null ? `<button class="btn-primary" onclick="openTopic(${nextIdx})">Next: ${TOPICS[nextIdx].title} →</button>` : ''}
      </div>
    </div>
  `;
  content.scrollTop = 0;
}

function filterTopics(val) {
  const v = val.toLowerCase();
  document.querySelectorAll('#topic-list li').forEach(li => {
    li.style.display = li.textContent.toLowerCase().includes(v) ? '' : 'none';
  });
}

function checkCertLock() {
  if (quizState && quizState.passed) {
    document.getElementById('cert-locked').style.display = 'none';
    document.getElementById('cert-unlocked').style.display = 'block';
  } else {
    document.getElementById('cert-locked').style.display = 'block';
    document.getElementById('cert-unlocked').style.display = 'none';
  }
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }, i * 80);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.topic-card-home').forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(20px)';
  card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(card);
});
function toggleMenu() {
  document.getElementById('mobile-menu').classList.toggle('open');
}
function closeMenu() {
  document.getElementById('mobile-menu').classList.remove('open');
}