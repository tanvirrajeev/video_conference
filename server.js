const path = require('path');
const express = require('express');
const app = express();

var http = require('http').createServer(app);
var io = require('socket.io')(http);

//Static path for public
var serveStatic = require('serve-static');
app.use(serveStatic('public', { 'index': ['index.html', 'default.htm'] }))

//Socket.io
io.on('connection', (socket) => {
    console.log('a user connected');
  });

// app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/index.html')));
// app.get('/', function(req, res){
//     res.sendFile(path.join(__dirname + '/index.html'));
// });


const port = 3000 ;

// app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
http.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));