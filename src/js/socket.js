const URL = 'wss://fep-app.herokuapp.com/';

let socket = null;

function initConnection() {
    socket = new WebSocket(URL);

    socket.onopen = () => {
        console.log('user connected');
    };

    socket.onmessage = (msg) => {
        const data = JSON.parse(msg.data);
        // move(data.payload.x, data.payload.y);
        showChatBoxMsg(data);
    };

    socket.onclose = () => {
        initConnection();
        console.log('closest');
    };

    socket.onerror = (err) => {
        console.log('error massage', err);
    };
}

function send(msg) {
    if (socket.readyState === WebSocket.OPEN) {
        socket.send(JSON.stringify(msg))
    }
}

initConnection();
