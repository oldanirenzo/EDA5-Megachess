require('./config/config.js')
const decideAction = require('./movements/options.js');
const WebSocketClient = require('websocket').client;

let client = new WebSocketClient();

client.on('connectFailed', function (error) {
    console.log('Error de conexión: ' + error.toString());
});

client.on('connect', function (connection) {
    console.log('Cliente WebSocket conectado');
    connection.on('error', function (error) {
        console.log("Error de conexion: " + error.toString());
    });
    connection.on('close', function () {
        console.log('Cerrando conexión');
        client.connect(`wss://megachess.herokuapp.com/service?authtoken=${process.env.TOKEN}`);
    });
    connection.on('message', function (data) {
        decideAction(JSON.parse(data.utf8Data))
            .then(res => {
                console.log(JSON.stringify(res))
                connection.sendUTF(JSON.stringify(res))
            })
            .catch(err => console.log(err))
    });
});

client.connect(`wss://megachess.herokuapp.com/service?authtoken=${process.env.TOKEN}`);