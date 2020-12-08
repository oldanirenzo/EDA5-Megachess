

const acceptChallenge = (data) => {

    return new Promise((resolve) => {

        resolve({
            action: 'accept_challenge',
            data: {
                board_id: data.data.board_id
            }
        })

    })
}

module.exports = acceptChallenge