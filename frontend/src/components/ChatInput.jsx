import React, { useState } from 'react';
import './ChatInput.css';

function ChatInput({ onSend, disabled }) {
  const [input, setInput] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    onSend(input);
    setInput('');
  };

  return (
    <form className="chat-input" onSubmit={handleSend}>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Type your message..."
        disabled={disabled}
        autoFocus
      />
      <button type="submit" disabled={disabled || !input.trim()}>Send</button>
    </form>
  );
}

export default ChatInput;
