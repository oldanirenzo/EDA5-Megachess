const acceptChallenge = require("../challenge/acceptChallenge")
const { blackMovements } = require("../movements/black")
const { whiteMovements } = require("../movements/white")


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
                    (whiteMovements(data))
                        .then(movement => {
                            resolve(movement)
                        })
                        .catch(err => reject(err))
                    console.log(data.data)
                } else {
                    blackMovements(data)
                        .then(movement => {
                            resolve(movement)
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
            case 'response_error':
                console.log(data)
                break;
            default:
                console.log('Opcion no conocida.')
                console.log(data)
                break;
        }
    })

}


module.exports = decideAction;