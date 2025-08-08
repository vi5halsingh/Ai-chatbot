# AI Chatbot Backend

This project is a Node.js backend for an AI-powered chatbot. It provides API endpoints and services to interact with AI models and handle chat functionality.

## Project Structure

```
backend/
├── package.json
# Veda AI Chatbot Backend

This is the Node.js backend for the Veda AI Chatbot. It provides real-time chat functionality using Socket.IO and integrates with Google Gemini AI for intelligent responses.

## Features
- Real-time chat with clients via Socket.IO
- AI-powered responses using Google Gemini
- Maintains chat history for each session
- CORS enabled for frontend integration

## Project Structure
```

backend/
├── package.json
├── server.js
├── src/
│ ├── app.js
│ └── services/
│ └── ai.servic.js

````

- `server.js`: Main server file, handles Socket.IO and chat logic
- `src/app.js`: Express app and middleware
- `src/services/ai.servic.js`: AI service integration
- `package.json`: Project dependencies and scripts

## Getting Started

### Prerequisites
- Node.js (v14 or higher recommended)
- npm

### Installation
1. Navigate to the `backend` directory:
   ```powershell
   cd backend
````

2. Install dependencies:
   ```powershell
   npm install
   ```

### Running the Backend

Start the backend server:

```powershell
node server.js
```

The backend will run on `http://localhost:3000` by default.

## Configuration

- Environment variables can be set in a `.env` file (see `.gitignore`).
- Update CORS settings in `server.js` if your frontend runs on a different port.

## Integration

- The backend is designed to work with the React frontend in the `frontend` folder.
- Communication is handled via Socket.IO for real-time messaging.

## License

This project is licensed under the MIT License.
