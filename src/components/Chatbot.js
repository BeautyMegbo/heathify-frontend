import React, { useState } from 'react';
import axios from 'axios';
import './Chatbot.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [sessionID] = useState(Date.now()); // Unique session ID for context management
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isChatMinimized, setIsChatMinimized] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    setMessages([...messages, { text: input, sender: 'user' }]);
    setInput('');

    try {
      const response = await axios.post('/api/chat', { message: input, sessionID });
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: response.data.message, sender: 'bot' }
      ]);
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: 'Sorry, something went wrong. Please try again later.', sender: 'bot' }
      ]);
    }
  };

  const handleInputKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const toggleMinimize = () => {
    setIsChatMinimized(!isChatMinimized);
  };

  const endChat = () => {
    setMessages([]);
    setIsChatOpen(false);
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">
        <button onClick={toggleChat} className="chatbot-button">
          Chat
        </button>
      </div>
      {isChatOpen && (
        <div className={`chatbot ${isChatMinimized ? 'minimized' : ''}`}>
          <div className="chat-header">
            <span>Chatbot</span>
            <div>
              <button onClick={toggleMinimize}>
                {isChatMinimized ? 'Maximize' : 'Minimize'}
              </button>
              <button onClick={endChat}>End</button>
            </div>
          </div>
          {!isChatMinimized && (
            <div className="chat-window">
              {messages.map((msg, index) => (
                <div key={index} className={`message ${msg.sender}`}>
                  {msg.text}
                </div>
              ))}
            </div>
          )}
          {!isChatMinimized && (
            <div className="chat-input">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleInputKeyPress}
                placeholder="Ask me anything..."
              />
              <button onClick={sendMessage}>Send</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Chatbot;
