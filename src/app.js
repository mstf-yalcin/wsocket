const express = require('express')
const app = express()
const server = require('http').createServer(app);
const WebSocket = require('ws');

const wss = new WebSocket.Server({ server:server });

wss.on('connection', function connection(ws) {
  console.log('A new client Connected!');
  ws.send('Welcome New Client!');

  ws.on('sendData', function incoming(message) {
    console.log('received: %s', message);
  });
});

app.get('/', (req, res) => res.send('Hello World!'))

server.listen(443, () => console.log(`Lisening on port :443`))