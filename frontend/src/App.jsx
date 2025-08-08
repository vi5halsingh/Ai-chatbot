
import React, { useState, useRef, useEffect } from 'react';
import ChatWindow from './components/ChatWindow';
import ChatInput from './components/ChatInput';
import './App.css';
import { io } from "socket.io-client";

function App() {
  const [messages, setMessages] = useState([
    { sender: 'bot', parts:[
      {text: 'Hey! I am Veda, what next ?',
        timeStamp : new Date().toLocaleTimeString()
       }
    ]
  }
  ]);
  const [socket, setSocket] = useState(null)
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    const socketinstance = io('localhost:3000/');
    setSocket(socketinstance)
    socketinstance.on("aiResponse",(response)=>{
      const botMsg = {
        sender:"bot",
        parts:[{text:response}],
         timeStamp : new Date().toLocaleTimeString()
      }
      setMessages(p => [...p , botMsg])
    })
  }, [messages]);

  const sendMessage = async (text) => {
    if (!text.trim()) return;
      try {
    setMessages((msgs) => [...msgs, { sender: 'user', parts:[{text:text , timeStamp : new Date().toLocaleTimeString()},]
   }]);
    setLoading(true);
      socket.emit("userPrompt",text)
    } catch (err) {
      setMessages((msgs) => [...msgs, { sender: 'bot', text: 'Sorry, something went wrong.' }]);
    }
    setLoading(false);
  };

  return (
    <div className="app-container">
      <h1>Veda - AI Chatbot</h1>
      <ChatWindow messages={messages} loading={loading} chatEndRef={chatEndRef} />
      <ChatInput onSend={sendMessage} disabled={loading} />
    </div>
  );
}

export default App;
