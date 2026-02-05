# Ménara Préfa AI Assistant 🤖🏗️

![Ménara Préfa Logo](https://menara-prefa.com/wp-content/uploads/2023/12/logo-menara-prefa.png)

An intelligent customer support chatbot designed for **Ménara Préfa**, a leader in the construction materials industry in Morocco. This application leverages the power of **Google Gemini AI** to provide instant responses regarding products, services, and technical expertise.

## 🚀 Features

- **AI-Powered Chat**: Seamless conversation with a context-aware AI assistant (Google Gemini 1.5 Flash).
- **Product Knowledge**: Trained on Ménara Préfa's catalog (Agglos, Hourdis, Concrete, etc.).
- **Modern UI**: A responsive, clean, and professional interface built with React & TypeScript.
- **Robust Backend**: Scalable Spring Boot architecture.

## 🛠️ Technology Stack

### Backend ☕

- **Framework**: Spring Boot 3.5.9
- **Language**: Java 25 (Preview features may be enabled)
- **AI Integration**: Spring AI (Google Gemini)
- **Build Tool**: Maven

### Frontend ⚛️

- **Framework**: React 19
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Custom CSS with Responsive Design

## 📂 Project Structure

The repository is organized into two main synchronized directories:

```
📦 menara-prefa-ai-assistant
├── 📂 backend           # Spring Boot Application
│   ├── src/main/java   # Source Code
│   └── pom.xml         # Maven Dependencies
├── 📂 frontend          # React Application
│   ├── src/            # Components, Pages, Assets
│   └── package.json    # Node Dependencies
└── README.md           # Documentation
```

## ⚙️ Installation & Setup

### Prerequisites

- Java JDK 25+
- Node.js v18+
- Maven (Wrapper included)
- Google Cloud API Key (Gemini)

### 1️⃣ Backend Setup

Navigate to the `backend` folder and run the Spring Boot server.

**Linux/Mac:**

```bash
cd backend
export GOOGLE_API_KEY=your_api_key_here
./mvnw spring-boot:run
```

**Windows:**

```powershell
cd backend
$env:GOOGLE_API_KEY="your_api_key_here"
.\mvnw spring-boot:run
```

_The backend runs on `http://localhost:8080`_

### 2️⃣ Frontend Setup

Open a new terminal, navigate to the `frontend` folder, install dependencies, and start the dev server.

```bash
cd frontend
npm install
npm run dev
```

_The frontend runs on `http://localhost:5173`_

## 🔒 Security Note

This project uses environment variables for sensitive keys. Never commit your `GOOGLE_API_KEY` to public repositories.

---

**© 2026 Oumrane Echidmi** - Developed for Ménara Préfa.
