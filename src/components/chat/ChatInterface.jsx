// ChatInterface.js
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

//const socket = io('http://localhost:3001'); // Update with your server URL

const ChatInterface = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  // useEffect(() => {
  //   socket.on('message', (data) => {
  //     setMessages([...messages, data]);
  //   });

  //   return () => {
  //     socket.disconnect();
  //   };
  // }, [messages]);

  // const handleSendMessage = async () => {
  //   if (newMessage.trim() === '') return;

  //   // Send the message to the server via API
  //   try {
  //     await axios.post('http://localhost:3001/api/messages', {
  //       senderId: 'parent', // Replace with the actual sender ID
  //       receiverId: 'teacher', // Replace with the actual receiver ID
  //       content: newMessage,
  //     });

  //     // You can update the UI immediately without waiting for the socket event
  //     setMessages([...messages, { senderId: 'parent', content: newMessage }]);
  //     setNewMessage('');
  //   } catch (error) {
  //     console.error('Error sending message via Axios:', error);
  //   }
  // };


  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-md overflow-hidden">
      <div className="bg-blue-500 text-white p-4">
        <h2 className="text-lg font-bold">Parent-Teacher Chat</h2>
      </div>
      <div className="px-4 py-3 bg-gray-100">
        <div className="overflow-y-auto max-h-60">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-2 ${
                message.sender === 'parent' ? 'text-right' : 'text-left'
              }`}
            >
              <span
                className={`inline-block bg-${
                  message.sender === 'parent' ? 'blue' : 'green'
                }-500 text-white p-2 rounded-lg`}
              >
                {message.text}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="p-4 flex items-center">
        <input
          type="text"
          className="flex-1 border rounded-md p-2 mr-2"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={handleSendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatInterface;
