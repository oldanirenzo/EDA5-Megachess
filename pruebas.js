const matriz = require("./movements/matriz");
const decideAction = require("./movements/options");


const negras = 'phbrqk';
const blancas = 'PHBRQK';

let data = {
    event: 'your_turn',
    data: {
        board_id: '9294de41-a6e8-4dc1-be6e-0b4310a8f274',
        turn_token: '2a7ed463-8419-4dce-87a7-2490c0ad9d33',
        username: 'oldanirenzo',
        actual_turn: 'black',
        //        board: 'rrhhbbqqkkbbhhrrrrhhbbqqkkbbhhrr  p  p       p   p       ppp  p pp pppppp   p            p   p p  ppp ppp  pp ppq         q     Q     Q  Q QQQ   PP P    P     P P P      PP  PPP  PP  PP   PP    P  PP P P          P P      P RRHHBBQQKKBBHHRRRRHHBBQQKKBBHHRR',
        board: 'rrhhbbqqkkbbhhrrrrhhbbqqkkbbhhrr    ppppp p p pp ppppp   p  pp ppp p  ppp     p p          p p           pp       q        q                                    PP PPPPP PPPPPP P    PP     PPP   P     P      P PPPP  PPPPP   PRRHHBBQQKKBBHHRRRRHHBBQQKKBBHHRR',
        move_left: 8,
        opponent_username: 'oldanirenzo'
    }
}
// console.log(matriz(data))
// if (matriz(data)[13][1] === 'P') {
//     console.log(true)
// }

// let action = decideAction(data);
decideAction(data)
    .then(res => {
        console.log('RES: ' + JSON.stringify(res))
    })
    .catch(err => console.log(err))


let value = {
    p: 10,
    h: 30,
    b: 40,
    r: 60,
    q: 70,
    k: 100
}

// console.log(negras.includes(matriz(data)[8][5])) 


// console.log(negras.includes(matriz(data)[1][5]))
// console.log(value[matriz(data)[1][6]])
// let data = {
//     event: 'your_turn',
//     data: {
//         board_id: '46f2bec3-0fc2-4baf-a5e5-7f6231c76735',
//         turn_token: '5236b513-fa35-4522-bdcf-b2258ee92b48',
//         username: 'oldanirenzo',
//         actual_turn: 'white',
//         board: 'rrhhbbqqkkbbhhrrrrhhbbqqkkbbhhrrpppppppppppppppppppppppppppppppp                                                                                                                                PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPRRHHBBQQKKBBHHRRRRHHBBQQKKBBHHRR',
//         move_left: 159,
//         opponent_username: 'oldanirenzo'
//     }
// }


