const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.emit('newEmail', {
    from: 'mike@example.com',
    text: 'hey, what is happening',
    createdAt: new Date().getFullYear() 
  });
  socket.emit('newMessage', {
    from: 'Casey',
    text: 'Hey, can you meet at 6?'
});

  

  socket.on('createEmail', (newEmail) => {
      console.log('createEmail', newEmail); 
  });

  socket.on('createMessage', function(message){
    console.log('new message', message); 
  });



  socket.on('disconnect', function (){
    console.log('User was disconnected');
  });
});


    server.listen(port, function(){
        console.log(`Server is up on ${port}`);
      });

