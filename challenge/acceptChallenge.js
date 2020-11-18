

const acceptChallenge = (data) => {

    return new Promise((resolve, reject) => {

        acceptOrNot(data)
            .then(challenge => {
                resolve(challenge)
            })
            .catch(err => reject(err))

    })

}

const acceptOrNot = async (data) => {
    if (data.event === 'ask_challenge') {
        return ({
            action: 'accept_challenge',
            data: {
                board_id: data.data.board_id
            }
        })
    }

}

module.exports = acceptChallenge