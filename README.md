# Suresh Reddy T — Portfolio Website

[![Deploy to GitHub Pages](https://github.com/Suresh-5610/suresh-reddy-portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/Suresh-5610/suresh-reddy-portfolio/actions/workflows/deploy.yml)

> **Live Portfolio:** [https://suresh-5610.github.io/suresh-reddy-portfolio/](https://suresh-5610.github.io/suresh-reddy-portfolio/)

A modern, responsive, recruiter-friendly portfolio website built with **React.js + Vite** for **Suresh Reddy T**, Python Full Stack Developer & Python AI Developer.

---

## ✨ Features

- 🌙 **Dark/Light Mode** toggle with persistent preference
- 📱 **Fully Responsive** — works on mobile, tablet, and desktop
- ⚡ **Fast Performance** — Vite build, lazy loading
- 🎯 **Interactive sections** — skill filters, project category filter
- 📬 **Contact form** with validation and copy-to-clipboard email
- 📥 **Resume download** button (PDF)
- 🚀 **GitHub Pages** deployment via GitHub Actions CI/CD
- 🔍 **SEO optimized** — meta tags, Open Graph, semantic HTML

---

## 📂 Project Structure

```
suresh-reddy-portfolio/
├── public/
│   └── assets/
│       └── Suresh_Reddy_T_Resume.pdf    # ← Your resume
├── src/
│   ├── components/
│   │   ├── Navbar.jsx / .css
│   │   ├── Hero.jsx / .css
│   │   ├── About.jsx / .css
│   │   ├── Skills.jsx / .css
│   │   ├── Projects.jsx / .css
│   │   ├── Experience.jsx / .css
│   │   ├── Education.jsx / .css
│   │   ├── ResumeSection.jsx / .css
│   │   ├── Contact.jsx / .css
│   │   └── Footer.jsx / .css
│   ├── data/
│   │   └── portfolioData.js             # ← Edit this to update content
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css                        # ← Design system
├── .github/
│   └── workflows/
│       └── deploy.yml                   # ← GitHub Pages CI/CD
├── index.html
├── vite.config.js
└── package.json
```

---

## 🚀 Getting Started Locally

### 1. Prerequisites

Make sure you have **Node.js v18+** installed:
```bash
node -v    # Should be v18.0.0 or higher
npm -v     # Should be v8.0.0 or higher
```

### 2. Install Dependencies

```bash
cd "C:\Users\suresh\OneDrive\Desktop\My repo"
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

Open **http://localhost:5173** in your browser.

### 4. Build for Production

```bash
npm run build
npm run preview    # Preview the production build locally
```

---

## ✏️ How to Update Your Portfolio

All content lives in **one file**: `src/data/portfolioData.js`

| Section       | What to Edit                                       |
|---------------|----------------------------------------------------|
| Personal Info | `personal` object — name, email, phone, GitHub URL |
| About Me      | `about.summary` and `about.pillars`                |
| Skills        | `skillGroups` array                                |
| Projects      | `projects` array                                   |
| Experience    | `experience` array — add exact dates, roles        |
| Education     | `education` array — add graduation year, CGPA      |
| Certifications| `certifications` array — add real cert details     |

### Updating Your Resume

Replace the file at:
```
public/assets/Suresh_Reddy_T_Resume.pdf
```

No code changes needed — the download button automatically picks up the new file.

---

## 📤 Push to GitHub

### Step 1: Create a GitHub Repository

1. Go to [https://github.com/new](https://github.com/new)
2. Repository name: `suresh-reddy-portfolio`
3. Set visibility: **Public** (required for free GitHub Pages)
4. Click **Create repository** (do NOT initialize with README or .gitignore)

### Step 2: Initialize and Push

Run these commands in your project folder:

```bash
cd "C:\Users\suresh\OneDrive\Desktop\My repo"
git init
git add .
git commit -m "Initial commit: Add portfolio website"
git branch -M main
git remote add origin https://github.com/Suresh-5610/suresh-reddy-portfolio.git
git push -u origin main
```

---

## 🌐 Deploy to GitHub Pages

### Automatic Deployment (Recommended)

The `.github/workflows/deploy.yml` file handles this automatically:

1. Every time you push to `main`, GitHub Actions builds and deploys.
2. Enable GitHub Pages in your repository settings:
   - Go to: **Settings → Pages**
   - Under **Source**, select: **GitHub Actions**
   - Click **Save**

3. Your site will be live at:
   ```
   https://suresh-5610.github.io/suresh-reddy-portfolio/
   ```

4. First deployment takes ~2–5 minutes. Check status at:
   ```
   https://github.com/Suresh-5610/suresh-reddy-portfolio/actions
   ```

### Manual Deployment Check

After pushing, go to:
- **Repository → Actions tab** → Look for "Deploy Portfolio to GitHub Pages"
- If it shows ✅ green, your site is live.

---

## 🔄 Updating the Portfolio Later

Whenever you need to update anything:

```bash
# 1. Edit src/data/portfolioData.js or any component file

# 2. Test locally first
npm run dev

# 3. Commit and push
git add .
git commit -m "Update: Add experience details / new project / etc."
git push origin main
```

GitHub Actions will automatically rebuild and redeploy within ~2 minutes.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| React 18   | UI Framework |
| Vite 5     | Build Tool & Dev Server |
| Lucide React | Icons |
| CSS Custom Properties | Design System (Dark/Light) |
| GitHub Actions | CI/CD Pipeline |
| GitHub Pages | Hosting |

---

## 📞 Contact

**Suresh Reddy T**
- 📧 Email: sureshrt438@gmail.com
- 💼 GitHub: [github.com/Suresh-5610](https://github.com/Suresh-5610)
- 🔗 LinkedIn: [linkedin.com/in/suresh-reddy-t](https://linkedin.com/in/suresh-reddy-t)

---

*Built with React.js + Vite — Deployed on GitHub Pages*
