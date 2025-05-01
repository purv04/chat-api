const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Basic REST endpoint for health check
app.get('/health', (req, res) => {
  res.status(200).send('Chat API is healthy!');
});

// Socket.IO connection
io.on('connection', (socket) => {
  console.log(`User connected: ${socket.id}`);

  // Listen for incoming chat messages
  socket.on('chat message', (msg) => {
    console.log(`Message: ${msg}`);
    // Broadcast to all clients
    io.emit('chat message', msg);
  });

  // Handle disconnect
  socket.on('disconnect', () => {
    console.log(`User disconnected: ${socket.id}`);
  });
});

// Start server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Chat API listening on port ${PORT}`);
});
