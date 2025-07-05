import React, { useState } from 'react';
import '../Components/Chatbox.css';

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'guide', text: 'Hi! I’m your travel guide. Ask me anything!' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { sender: 'user', text: input }];
    const botReply = getBotReply(input.toLowerCase());
    newMessages.push({ sender: 'guide', text: botReply });

    setMessages(newMessages);
    setInput('');
  };

  const getBotReply = (question) => {
    if (question.includes('price') || question.includes('cost')) return 'The price varies by destination. Most packages start from ₹25,000.';
    if (question.includes('best time')) return 'The best time depends on the destination. Let me know where you plan to go!';
    if (question.includes('included') || question.includes('food')) return 'Usually, food and stay are included. Details depend on the package.';
    return "I'm not sure, but I'll find out for you!";
  };

  return (
    <div className="chatbox-container">
      {isOpen ? (
        <div className="chatbox">
          <div className="chatbox-header" onClick={() => setIsOpen(false)}>🗨️ Travel Guide</div>
          <div className="chatbox-body">
            {messages.map((msg, i) => (
              <div key={i} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chatbox-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      ) : (
        <button className="chatbox-toggle" onClick={() => setIsOpen(true)}>💬</button>
      )}
    </div>
  );
};

export default ChatBox;
