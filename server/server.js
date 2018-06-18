const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage} = require('./utils/message');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.emit('newMessage', generateMessage('Admin', 'welcome to the chat app'));

  socket.broadcast.emit('newMessage', generateMessage('Admin', 'New User joined'));

  socket.on('createMessage', (message, callback) => {
    console.log('createMessage', message);


    //socket.emit from admin,
    //text should say welcome to the chat app
    //call socket.broadcast.emit
    //set from equal to admin
    //set text equal to new user joined

    socket.emit('newMessage', generateMessage(message.from, message.text));

    socket.broadcast.emit('newMessage', {
      from: 'Admin', 
      text: 'New user joined',
      createdAt: new Date().getTime()
    })


    io.emit('newMessage', {
      from: message.from,
      text: message.text,
      createdAt: new Date().getTime()
    });
    callback('This is from the server'); 

    // socket.broadcast.emit('newMessage', {
    //   from: message.from,
    //   text: message.text,
    //   createdAt: new Date().getTime()
    // });
    // socket.broadcast.emit('newMessage', {
    //   from: message.from,
    //   text: message.text,
    //   createdAt: new Date().getTime()
    // });
  });

  socket.on('disconnect', () => {
    console.log('User was disconnected');
  });
})

    server.listen(port, function(){
        console.log(`Server is up on ${port}`);
      });

