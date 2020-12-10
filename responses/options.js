const acceptChallenge = require("../challenge/acceptChallenge")
// const { blackMovements } = require("../movements/black")
const matriz = require("../movements/matriz")
const { whiteMovements, blackMovements } = require("../movements/movimientos")
// const { whiteMovements } = require("../movements/movimientos")


const decideAction = (data) => {
    return new Promise((resolve, reject) => {

        switch (data.event) {
            case 'ask_challenge':

                acceptChallenge(data)
                    .then(challenge => {
                        resolve(challenge)
                    })
                    .catch(err => reject(err))
                break;

            case 'your_turn':
                if (data.data.actual_turn === 'white') {
                    whiteMovements(matriz(data))
                        .then(movement => {
                            resolve({
                                action: 'move',
                                data: {
                                    board_id: data.data.board_id,
                                    turn_token: data.data.turn_token,
                                    from_row: movement.from_row,
                                    from_col: movement.from_col,
                                    to_row: movement.to_row,
                                    to_col: movement.to_col,
                                }
                            })
                        })
                        .catch(err => reject(err))
                    console.log(data.data)
                } else {
                    blackMovements(matriz(data))
                        .then(movement => {
                            resolve({
                                action: 'move',
                                data: {
                                    board_id: data.data.board_id,
                                    turn_token: data.data.turn_token,
                                    from_row: movement.from_row,
                                    from_col: movement.from_col,
                                    to_row: movement.to_row,
                                    to_col: movement.to_col,
                                }
                            })
                        })
                        .catch(err => reject(err))
                    console.log(data.data)
                }
                break;

            case 'gameover':
                console.log(data)
                break;

            case 'update_user_list':
                console.log(data)
                break;

            default:
                console.log('No se encontro la opción.')
                break;
        }
    })

}


module.exports = decideAction;