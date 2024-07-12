import React, { useState } from 'react';
import ChatMessage from './ChatMessage';

const ChatHistory = () => {
  const [messages, setMessages] = useState([]);

  const addMessage = (message) => setMessages([...messages, message]);

  return (
    <div>
      {messages.map((msg, index) => (
        <ChatMessage key={index} text={msg} />
      ))}
    </div>
  );
};

export default ChatHistory;
