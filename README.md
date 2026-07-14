# Ménara Préfa AI Assistant 🤖🏗️

<img width="300" height="85" alt="image" src="https://github.com/user-attachments/assets/463de2ff-db2d-4297-99db-2d7b69e71a52" />

An intelligent customer support chatbot designed for **Ménara Préfa**, a leader in the construction materials industry in Morocco. This application leverages the power of **Google Gemini AI** to provide instant responses regarding products, services, and technical expertise.

## 🚀 Features

- **AI-Powered Chat**: Seamless conversation with a context-aware AI assistant (Google Gemini 1.5 Flash).
- **Product Knowledge**: Trained on Ménara Préfa's catalog (Agglos, Hourdis, Concrete, etc.).
- **Modern UI**: A responsive, clean, and professional interface built with React & TypeScript.
- **Robust Backend**: Scalable Spring Boot architecture with structured validation and error handling.
- **Production Ready**: Fully configured CORS, environment variables, Actuator health checks, and optimized assets.

## 🛠️ Technology Stack

### Backend ☕

- **Framework**: Spring Boot 3.5.9
- **Language**: Java 25
- **AI Integration**: Spring AI (Google Gemini)
- **Validation**: Spring Boot Validation
- **Build Tool**: Maven Wrapper

### Frontend ⚛️

- **Framework**: React 19
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Vanilla CSS & Bootstrap (internalized via npm)
- **Maps**: Leaflet (interactive implantations map)

## 📂 Project Structure

The repository is organized into two main synchronized directories:

```
📦 menara-prefa-ai-assistant
├── 📂 backend           # Spring Boot Application
│   ├── src/main/java   # Source Code (com.menara.prefa.ai)
│   ├── .env.example    # Environment variables template
│   └── pom.xml         # Maven Dependencies
├── 📂 frontend          # React Application
│   ├── src/            # Components, Pages, Assets, Data Modules
│   ├── .env.example    # Environment variables template
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

Navigate to the `backend` folder, set up your environment variables, and run the server.

1. **Copy the `.env` template:**
   ```bash
   cp .env.example .env
   ```
2. **Edit `.env`** to add your `GOOGLE_API_KEY`.
3. **Run the server:**

**Linux/Mac/Windows (using env loading or standard exports):**
```bash
cd backend
./mvnw spring-boot:run
```

_The backend runs on `http://localhost:8080`_

### 2️⃣ Frontend Setup

Navigate to the `frontend` folder, configure your environment variables, and start the app.

1. **Copy the `.env` template:**
   ```bash
   cp .env.example .env
   ```
2. **Edit `.env`** to configure `VITE_API_BASE_URL` if the backend is not on `http://localhost:8080`.
3. **Install and run:**
   ```bash
   npm install
   npm run dev
   ```

_The frontend runs on `http://localhost:5173` (or `5174`)_

## 🧪 Testing and Building

### Backend
To run backend unit and integration tests:
```bash
cd backend
./mvnw clean test
```
To build a production-ready executable `.jar`:
```bash
./mvnw clean package
```

### Frontend
To verify code quality and build for production:
```bash
cd frontend
npm run lint
npm run build
```

## 🔒 Security Note

This project uses environment variables (`.env`) for sensitive configuration. 
- Never commit your `GOOGLE_API_KEY` to public repositories.
- The `.env` files are ignored by `git` via `.gitignore`.

---

**© 2026 Oumrane Echidmi** - Developed for Ménara Préfa.
