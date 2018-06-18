var socket = io(); 

socket.on('connect', () => {
    var date = new Date();
    console.log('Connected to server');
 
});

socket.on('disconnect', () => {
    console.log('disconnected from server');
});

socket.on('newMessage', function(message){
    console.log('createMessage', message);
    var li = $('<li></li>');
    li.text(`${message.from}: ${message.text}`); 

    $('#messages').append(li); 
});

socket.emit('createMessage', {
    from: 'Frank', 
    text: 'Hi'
}, function(data) {
    console.log('got it!', data);
});



$('#message-form').on('submit', (e) => {
    e.preventDefault(); 
    socket.emit('createMessage', {
        from: 'User', 
        text: $('[name=message]').val()
    }, function() {

    })
});
//newMessage
//createMessage