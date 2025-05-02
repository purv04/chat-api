const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// ✅ Default route for browser access
app.get('/', (req, res) => {
  res.send('🚀 Welcome to the Chat API!');
});

// ✅ Health check route
app.get('/health', (req, res) => {
  res.status(200).send('Chat API is healthy!');
});

// 🔌 Socket.IO setup
io.on('connection', (socket) => {
  console.log(`User connected: ${socket.id}`);

  socket.on('chat message', (msg) => {
    console.log(`Message: ${msg}`);
    io.emit('chat message', msg); // Broadcast to all clients
  });

  socket.on('disconnect', () => {
    console.log(`User disconnected: ${socket.id}`);
  });
});

// 🚀 Start server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Chat API listening on port ${PORT}`);
});
