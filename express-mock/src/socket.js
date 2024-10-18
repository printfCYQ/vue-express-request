const { Server } = require('socket.io');

function initializeSocket(server) {
    const io = new Server(server, {
        path: '/mock/socket'
    });

    io.on('connection', (socket) => {
        console.log('user connected');

        socket.on('disconnect', () => {
            console.log('user disconnected');
        });

        socket.on('message', (msg) => {
            console.log('message: ' + msg);
            io.emit('message', new Date().getTime());
        });
    });

    return io;
}

module.exports = initializeSocket;
