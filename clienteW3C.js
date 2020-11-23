require('./config/config.js')
const decideAction = require('./movements/options.js');
const W3CWebSocket = require('websocket').w3cwebsocket;

const client = new W3CWebSocket(`wss://megachess.herokuapp.com/service?authtoken=${process.env.TOKEN}`);

// const connectedUsers = {
//     action: 'get_connected_users',
//     data: {}
// }

client.onerror = () => {
    console.log('Connection Error');
};

client.onopen = () => {
    // client.send(JSON.stringify(connectedUsers))
    console.log('Client Connected');
};

client.onclose = () => {
    console.log('Client Closed');
};

client.onmessage = ({ data }) => {

    // console.log(JSON.parse(data))
    // if (JSON.parse(data).event !== 'update_user_list') {

    decideAction(JSON.parse(data))
        .then(res => {
            console.log(JSON.stringify(res))
            client.send(JSON.stringify(res))
        })
        .catch(err => console.log(err))
    // }
};
