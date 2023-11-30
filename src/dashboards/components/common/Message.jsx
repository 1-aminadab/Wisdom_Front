import React, { useState } from 'react';
import {
  Avatar,
  List,
  Card,
  Typography,
  Box,
  TextField,
  Button,
} from '@mui/material';

const ChatInterfaceMui = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  const users = [
    { id: '1', name: 'John Doe', avatar: 'J' },
    { id: '2', name: 'Jane Doe', avatar: 'A' },
    { id: '3', name: 'Parent 1', avatar: 'P' },
    // Add more users as needed
  ];

  const handleUserClick = (user) => {
    setSelectedUser(user);
    setMessages([]); // Reset messages when a new user is selected
  };

  const handleParentClick = () => {
    // Perform actions when parent is clicked
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() !== '') {
      const newMessage = { id: Date.now(), text: inputMessage, from: 'Me' };
      setMessages([...messages, newMessage]);
      setInputMessage('');
    }
  };

  return (
    <Box sx={{ display: 'flex', margin: '20px' }}>
      <Box sx={{ width: '200px', marginRight: '20px' }}>
        <Typography variant="h5">Students</Typography>
        <List>
          {users.map((user) => (
            <Box
              key={user.id}
              sx={{
                cursor: 'pointer',
                '&:hover': {
                  backgroundColor: '#f0f0f0',
                },
              }}
              onClick={() => handleUserClick(user)}
            >
              <Avatar>{user.avatar}</Avatar>
              <Typography>{user.name}</Typography>
            </Box>
          ))}
        </List>
      </Box>
      <Box sx={{ flexGrow: '1' }}>
        {selectedUser ? (
          <>
            <Typography variant="h5">Chat with {selectedUser.name}</Typography>
            <Card
              sx={{
                height: '400px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '10px',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor: '#f0f0f0',
                  cursor: 'pointer',
                  padding: '10px',
                }}
                onClick={handleParentClick}
              >
                <Avatar>{selectedUser.avatar}</Avatar>
                <Typography>{selectedUser.name}</Typography>
              </Box>
              <Box sx={{ flexGrow: '1', overflowY: 'auto' }}>
                {messages.map((message) => (
                  <Comment key={message.id} author={message.from} content={message.text} />
                ))}
              </Box>
              <Box sx={{ marginTop: '10px' }}>
                <TextField
                  placeholder="Type your message..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  fullWidth
                />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSendMessage}
                  sx={{ marginTop: '10px' }}
                >
                  Send
                </Button>
              </Box>
            </Card>
          </>
        ) : (
          <Typography variant="h6" sx={{ fontSize: '18px', textAlign: 'center', marginTop: '50px' }}>
            Select a student to start chatting.
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default ChatInterfaceMui;
