const URL = 'wss://fep-app.herokuapp.com/';

let socket = null;

function initConnection() {
    socket = new WebSocket(URL);

    socket.onopen = () => {
        console.log('socket connected');
    };

    socket.onmessage = (msg) => { // что бы получить смс
        const data = JSON.parse(msg.data);
        // move(data.payload.x, data.payload.y);
        showChatBoxMsg(data);
    };

    socket.onclose = () => { // когда кто то захотел сам завершить и закрыть трубу
        initConnection();
        console.log('closest');
    };

    socket.onerror = (err) => { // отбыв трубы
        console.log('error massage', err);
    };
}

function send(msg) { // что бы отправить смс
    if (socket.readyState === WebSocket.OPEN) {
        socket.send(JSON.stringify(msg))
    }
}

initConnection();