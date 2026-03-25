# 🎙️ Auralis AI – Voice Cloning Web App

Auralis AI is a modern web application that allows users to **clone their voice and generate realistic AI speech** from text input using advanced Text-to-Speech models.

---

## 🚀 Features

- 🎤 Upload or record voice sample (10–30 seconds)
- 🧠 AI-powered voice cloning using XTTS v2
- ✍️ Convert text into cloned speech
- 🔊 Play generated audio instantly
- ⬇️ Download output as `.wav`
- 🌐 Clean, modern landing page UI

---

## 🛠️ Tech Stack

**Frontend**
- HTML5
- CSS3 (Modern UI, responsive design)
- JavaScript (Fetch API)

**Backend**
- Python
- Flask

**AI / ML**
- Coqui TTS (XTTS v2)
- PyTorch
- Torchaudio

---

## 📁 Project Structure
voice_clone_app/
│
├── backend/
│ ├── app.py # Flask server
│ ├── clone.py # Voice cloning logic
│
├── static/
│ ├── style.css
│ ├── script.js
│ ├── logo.png
│ └── hero.png
│
├── templates/
│ └── index.html
│
├── samples/ # Input voice samples
├── outputs/ # Generated audio
├── requirements.txt
└── README.md


---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/aylincordelia-maker/auralis-ai.git
cd auralis-ai
2️⃣ Create virtual environment
python -m venv venv
venv\Scripts\activate
3️⃣ Install dependencies
pip install -r requirements.txt
4️⃣ Run the application
python backend/app.py
5️⃣ Open in browser
http://127.0.0.1:5000/
🎯 How It Works
Upload a voice sample
Enter your desired text
Click Generate Voice
Listen and download your cloned voice
📸 Demo Preview

Clean and modern UI inspired by real AI products like ElevenLabs.

(Add screenshot here if needed)

⚠️ Notes
Recommended voice sample: 10–30 seconds
Use .wav format for best results
First run may take time (model loading)
🌟 Future Improvements
🎙️ Live voice recording
🌍 Multi-language support
⚡ Faster inference
☁️ Cloud deployment
👩‍💻 Author

Developed by Auralis AI Team
💡 Passionate about AI, ML, and building real-world projects

⭐ Show Your Support

If you like this project:

⭐ Star the repo
🍴 Fork it
🚀 Share it
