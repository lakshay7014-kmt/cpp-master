# 🚀 C++ Master — Complete C++ Learning Website

A stunning, feature-rich C++ learning platform with animations, quizzes, and certificates.

---

## ✨ Features
- 📚 **18+ Topics** — From Basics to Advanced C++
- 💻 **Syntax-highlighted code examples** for every topic
- 🧪 **Practice Questions** per topic
- ⚡ **15-question Quiz** with 30-second timer per question
- 🏆 **Certificate Generator** (Canvas-based, downloadable PNG)
- 🌌 **Particle animations** background
- 🔍 **Topic search** in sidebar
- 📱 **Responsive** for mobile too

---

## 📁 Project Structure

```
cpp-master/
├── index.html          ← Main HTML file
├── src/
│   ├── style.css       ← All styles (dark neon theme)
│   ├── topics.js       ← All C++ topic content & data
│   ├── quiz.js         ← Quiz logic + Certificate generator
│   └── app.js          ← Navigation + Particles + UI logic
├── README.md
└── .gitignore
```

---

## 🖥️ Setup in VS Code

### Step 1 — Open Project
```bash
# Open the folder in VS Code
code cpp-master
```

### Step 2 — Install Live Server (optional, for live preview)
- Press `Ctrl+Shift+X` in VS Code
- Search **"Live Server"** by Ritwick Dey
- Click Install
- Right-click `index.html` → **"Open with Live Server"**

OR simply open `index.html` directly in your browser.

---

## 🌐 Deploy to GitHub + Vercel

### Step 1 — Initialize Git
```bash
cd cpp-master
git init
git add .
git commit -m "Initial commit: C++ Master website"
```

### Step 2 — Push to GitHub
1. Go to [github.com](https://github.com) → New Repository
2. Name it `cpp-master`
3. Copy the remote URL (e.g., `https://github.com/yourname/cpp-master.git`)

```bash
git remote add origin https://github.com/yourname/cpp-master.git
git branch -M main
git push -u origin main
```

### Step 3 — Deploy on Vercel
1. Go to [vercel.com](https://vercel.com) → Sign in with GitHub
2. Click **"New Project"**
3. Import your `cpp-master` repository
4. Framework Preset: **"Other"** (it's plain HTML)
5. Root Directory: **`.`** (leave as is)
6. Click **"Deploy"** 🚀

Your website will be live at: `https://cpp-master.vercel.app`

---

## 📝 Customize

### Add More Topics
In `src/topics.js`, add a new object to the `TOPICS` array:
```javascript
{
  title: "Your Topic Name",
  icon: "🔥",
  category: "Category",
  content: `<h2>...</h2><p>...</p>`
}
```

### Add More Quiz Questions
In `src/quiz.js`, add to `QUIZ_QUESTIONS` array:
```javascript
{
  category: "Basics",
  question: "Your question here?",
  options: ["Option A", "Option B", "Option C", "Option D"],
  answer: 1  // 0-indexed correct answer
}
```

---

## 🎨 Color Theme
| Color | Hex | Usage |
|-------|-----|-------|
| Neon Blue | `#00d4ff` | Primary accent |
| Neon Cyan | `#00ffcc` | Secondary accent |
| Neon Purple | `#a855f7` | Badges |
| Neon Orange | `#ff6b35` | Warnings |
| Dark BG | `#05070f` | Background |

---

Made with ❤️ — C++ Master Platform
