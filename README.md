# Ménara Préfa AI Assistant

This project is a web application featuring an AI-powered chatbot for **Ménara Préfa**, designed to answer questions about products, expertise, and services.

## Project Structure

The project follows a standard split structure:

- **backend/**: Spring Boot (Java 25) application.
  - Contains `src/main/java`, `pom.xml`, etc.
  - Exposes REST APIs.
- **frontend/**: React (Vite + TypeScript) application.
  - Contains `src/`, `package.json`, etc.
  - Consumes the Spring Boot API.

## Prerequisites

- **Java**: JDK 25 or higher
- **Node.js**: v18 or higher
- **Maven**: (Wrapper included in `backend/mvnw`)
- **API Key**: Ensure `GOOGLE_API_KEY` is set.

## Setup & Running

### 1. Backend (Spring Boot)

Navigate to the `backend` directory and run:

```bash
cd backend
# Linux/Mac
./mvnw spring-boot:run

# Windows
.\mvnw spring-boot:run
```

The server will start on `http://localhost:8080`.

### 2. Frontend (React)

Open a new terminal, navigate to the `frontend` folder:

```bash
cd frontend
npm install
npm run dev
```

The frontend will start on `http://localhost:5173`.

## Architecture Standards

- **Service Layer Pattern**: Business logic is encapsulated in `AiService`, keeping Controllers clean.
- **DTOs**: `ChatRequest` and `ChatResponse` are used for clear API contracts.
- **React Components**: The frontend uses small, reusable components (`ChatMessage`, `ChatInput`) and defined Services (`ai.service.ts`).

## Deployment

To prepare for deployment/git upload:

1. Ensure `.gitignore` is properly configured (already done).
2. Build the frontend (`npm run build`).
3. Package the Spring Boot app (`./mvnw package`).

---

Start coding with standard norms! 🚀
