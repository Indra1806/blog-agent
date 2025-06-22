# ✨ BlogAgent: AI-Powered Blog Generator

Welcome to your BlogAgent project — a full-stack AI blog writing tool that takes a title as input and outputs fully structured Markdown articles.

🌐 [Live Project on Lovable](https://lovable.dev/projects/22a5eece-4e79-4e76-b2ac-5dd539b7c59d)

---

## 🚀 Project Overview

**BlogAgent** uses a React + Tailwind frontend with 3D interactivity via `three.js`, and a Flask backend that connects to AI models (Groq, Gemini, or OpenAI) to generate complete blog articles.

### 🧠 Key Features

- Blog generation via AI from a single title
- Markdown-formatted output
- React frontend styled with Tailwind CSS
- 3D animated background using `@react-three/fiber`
- Flask backend connected to LLMs
- Easily deployable via Lovable, GitHub, or Codespaces

---

## ⚙️ Tech Stack

| Layer        | Technology                |
| ------------ | ------------------------- |
| Frontend     | React, Tailwind CSS, Vite, TypeScript |
| 3D Animation | @react-three/fiber, @react-three/drei |
| Backend      | Flask, Python, LangChain-compatible LLM |
| Deployment   | Lovable, GitHub Pages, or Vercel |
| Styling UI   | shadcn-ui |
| Markdown     | Blog output format in Markdown |

---

## ✏️ How to Edit This Project

### 💡 Use Lovable

- Open your project in [Lovable](https://lovable.dev/projects/22a5eece-4e79-4e76-b2ac-5dd539b7c59d)
- Start prompting or editing files directly
- Changes are synced automatically to GitHub


### 💻 Use Your Local IDE

```bash
git clone <YOUR_GIT_URL>
cd blog-muse-canvas
npm install
npm run dev

# 🎯 How to Use the BlogAgent

1. Go to the app homepage  
2. Enter a blog title (e.g., **"Top 5 Data Visualization Trends in 2025"**)  
3. Click **Generate**  
4. Output: A full-length Markdown article including:
   - Introduction  
   - Three structured sections  
   - Conclusion  
   - SEO meta description  
   - Social media hashtags  

---

# 🧪 Development Notes

- Use `@react-three/fiber` **only when the Canvas context is loaded**
- Avoid invalid attributes like `jsx={true}` on `<style>` tags
- Run `npm run lint` or use Vite diagnostics to catch `JSX/TSX` errors early

---

# 🌍 Deployment & Domains

### 🔧 To Deploy:

- Visit the [Lovable Project Page](https://lovable.dev/projects/22a5eece-4e79-4e76-b2ac-5dd539b7c59d)  
- Click **Share → Publish**

### 🌐 To Connect a Custom Domain:

- Navigate to **Project → Settings → Domains**  
- Follow the [Custom Domain Setup Guide](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

---

# 🧠 AI Provider Setup (Flask Backend)

You can use any of the following **free-friendly** API providers:

### ✅ OpenAI

```env
OPENAI_API_KEY=your_openai_key


✅ Gemini
Get your free Gemini key → https://ai.google.dev/gemini-api/docs/api-key

python
import google.generativeai as genai
genai.configure(api_key="your_gemini_api_key")
✅ Groq
Get your free Groq key → https://console.groq.com/keys

python
from groq import Groq
client = Groq(api_key="your_groq_key")
```

---

## 🙌 Credits

Developed by Indrasena Reddy

Frontend scaffolded with Lovable

Backend powered by LLMs and your imagination
