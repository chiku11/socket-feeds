const express = require('express');
const app = express();

const server = require('http').createServer(app);
const socketio = require('socket.io').listen(server);

const fetch = require('node-fetch');

socketio.on('connection', function(socket){
    console.log('a user connected');
    let counter = 0;
    setInterval(async () => {
        counter++;
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${counter}`);
        const body = await response.json();
        socket.emit('feeds', body);
    }, 10000);
    socket.on('disconnect', function(){
      console.log('user disconnected');
    });
  });

server.listen(9090, () => {
    console.log('Listening on port 9090!!');
});