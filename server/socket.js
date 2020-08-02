const socket = require('socket.io');

let io;

module.exports = {
    init: (server) => {
        io = socket(server);
        return io;
    },
    getIO: () => {
        return io;
    },
};
