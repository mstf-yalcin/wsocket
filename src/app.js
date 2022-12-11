const server=require('http').createServer();

// const io= require('socket.io')(server);
var io = require('socket.io')(server, {'transports': ['websocket', 'polling']});
io.on('connection',function(socket){
    console.log("connected");

    socket.on('sendData',function(data){
            //event-ismi -> data
            console.log(data);
        io.emit('data',data);
    })

    socket.on('disconnect',function(){
        console.log("disconnect");
    })

})

server.listen(80 || 5000,() => { // setting port for existing server
    console.log('Https listening'); // Now socket and server both listens to same port
});