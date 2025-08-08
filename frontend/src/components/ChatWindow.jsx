import React from 'react';
import './ChatWindow.css';


function ChatWindow({ messages, loading, chatEndRef }) {
  return (
    <div className="chat-window">
      {messages.map((msg, idx) => (
        <div key={idx} className={`chat-message ${msg.sender}`}>
          {msg.parts && Array.isArray(msg.parts) ? (
            msg.parts.map((part, i) => {
              let text = part.text;
              if (typeof text === 'object') {
                // If text is an object with a response property, use it
                text = text.response || '';
              }
              return (
                <div key={i} className="chat-part" style={{ position: 'relative', paddingBottom: '16px' }}>
                  <span>{text}</span>
                  <span className="timestamp" style={{ position: 'absolute', right: 8, bottom: 2, fontSize: '0.75em', color: '#888' }}>
                    {part.timeStamp || msg.timeStamp || ''}
                  </span>
                </div>
              );
            })
          ) : (
            // Fallback for messages with no parts, or with text as object
            <div className="chat-part" style={{ position: 'relative', paddingBottom: '16px' }}>
              <span>{typeof msg.text === 'object' ? (msg.text.response || '') : msg.text}</span>
              <span className="timestamp" style={{ position: 'absolute', right: 8, bottom: 2, fontSize: '0.75em', color: '#888' }}>
                {msg.timeStamp || ''}
              </span>
            </div>
          )}
        </div>
      ))}
      {loading && <div className="chat-message bot"><span>Typing...</span></div>}
      <div ref={chatEndRef} />
    </div>
  );
}

export default ChatWindow;
