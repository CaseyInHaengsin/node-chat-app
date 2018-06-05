var socket = io(); 

socket.on('connect', () => {
    var date = new Date();
    console.log('Connected to server');
 
});

socket.on('disconnect', () => {
    console.log('disconnected from server');
});

socket.on('newMessage', function(newMessage){
    console.log('createMessage', newMessage);
});





//newMessage
//createMessage