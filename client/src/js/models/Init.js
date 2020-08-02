import socket from 'socket.io-client';

class Init {
    constructor() {
        // this.url = `${window.location}`;
        this.url = `http://localhost:3000/`;
    }
    establishConnection = async () => {
        try {
            const io = await socket(this.url);
            return io;
        } catch (err) {
            console.log('Error', err.message);
        }
    };
}
export default Init;
