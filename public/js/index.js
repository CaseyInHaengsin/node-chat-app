var socket = io(); 

socket.on('connect', () => {
    var date = new Date();
    console.log('Connected to server');
    
    socket.emit('createMessage', {
        from: 'casey@here',
        text: 'I want this to work!'
    });
    

 
});

socket.on('disconnect', () => {
    console.log('disconnected from server');
});

socket.on('newMessage', function(newMessage){
    console.log('createMessage', newMessage);
});





//newMessage
//createMessage