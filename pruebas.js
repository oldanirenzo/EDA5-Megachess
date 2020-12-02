// const { whiteMovements } = require("./blancasConSwitch");
// const matriz = require("./movements/matriz");
// const { blackMovements } = require("./movements/negrasConSwitch");
// const decideAction = require("./movements/options");


const negras = 'phbrqk';
const blancas = 'PHBRQK';

let data = {
    event: 'your_turn',
    data: {
        board_id: '9294de41-a6e8-4dc1-be6e-0b4310a8f274',
        turn_token: '2a7ed463-8419-4dce-87a7-2490c0ad9d33',
        username: 'oldanirenzo',
        actual_turn: 'white',
        // board: 'rrhhbbqqkkbbhhrrrrhhbbqqkkbbhhrr  p  p       p   p       ppp  p pp pppppp   p            p   p p  ppp ppp  pp ppq         q     Q     Q  Q QQQ   PP P    P     P P P      PP  PPP  PP  PP   PP    P  PP P P          P P      P RRHHBBQQKKBBHHRRRRHHBBQQKKBBHHRR',
        // board: 'rrhhbbqqkkbbhhrrrrhhbbqqkkbbhhrr    ppppp p p pp ppppp   p  pp ppp p  ppp     p p          p p           pp       q        q                                    PP PPPPP PPPPPP P    PP     PPP   P     P      P PPPP  PPPPP   PRRHHBBQQKKBBHHRRRRHHBBQQKKBBHHRR',
        board: 'h     Qq    hhrr   h       qhhr   ppp  p pp ppp                  p                                                                                                                                              PHPPP  P  PPPPP       QH    HHRRH     QQ    H RR',
        move_left: 8,
        opponent_username: 'oldanirenzo'
    }
}



// whiteMovements(data)
//     .then(move => console.log(JSON.stringify(move)))
//     .catch(err => reject(err))


// console.table(matriz(data))
// console.log(matriz(data)[14][15])
// let action = decideAction(data);

// decideAction(data)
//     .then(res => {
//         console.log('RES: ' + JSON.stringify(res))
//     })
//     .catch(err => console.log(err))


// console.log(negras.includes(matriz(data)[8][5])) 
