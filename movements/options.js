const acceptChallenge = require("../challenge/acceptChallenge")
const { blackMovements } = require("./black")
const { whiteMovements } = require("./white")

const decideAction = (data) => {
    return new Promise((resolve, reject) => {

        switch (data.event) {
            case 'ask_challenge':

                acceptChallenge(data)
                    .then(challenge => {
                        resolve(challenge)
                    })
                    .catch(err => reject(err))
            case 'your_turn':

                if (data.data.actual_turn === 'white') {
                    (whiteMovements(data))
                        .then(movement => {
                            resolve(movement)
                        })
                        .catch(err => reject(err))
                }
                if (data.data.actual_turn === 'black') {
                    blackMovements(data)
                        .then(movement => {
                            resolve(movement)
                        })
                        .catch(err => reject(err))
                }

            case 'gameover':
                console.log(data)
                break;
            case 'update_user_list':
                console.log(data)
                break;
            default:
                return (' ')
        }
    })

}


module.exports = decideAction;