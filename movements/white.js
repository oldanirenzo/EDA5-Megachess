const matriz = require("./matriz");

const blacks = 'kqrbhp';
const whites = 'PHBRQK';

let whiteMovementsArray = []

const whiteMovements = (data) => {

    return new Promise((resolve, reject) => {

        let board_id = data.data.board_id;
        let turn_token = data.data.turn_token;
        let board = matriz(data)

        whitePiecesMovements(board)
            .then(() => {
                let bestMovement = whiteMovementsArray.reduce((acum, actual) => acum.value > actual.value ? acum : actual)
                resolve({
                    action: 'move',
                    data: {
                        board_id,
                        turn_token,
                        from_row: bestMovement.from_row,
                        from_col: bestMovement.from_col,
                        to_row: bestMovement.to_row,
                        to_col: bestMovement.to_col,
                    }
                })
            })
            .catch(err => reject(err))
            .finally(() => {
                whiteMovementsArray = []
                bestMovement = []
            })
    })
}

let value = {
    p: 100,
    h: 300,
    b: 400,
    r: 600,
    q: 700,
    k: 1000
}

let valueMovimiento = {
    P: 10,
    H: 30,
    B: 40,
    R: 60,
    Q: 70,
    K: 100
}

const whitePiecesMovements = async (board) => {
    return new Promise((resolve, reject) => {
        whiteQueenMovement(board)
            .then(() => {
                whitePawnMovement(board)
                    .then(() => {
                        resolve()
                    })
                    .catch(err => reject(err))
            })
            .catch(err => reject(err))
    })
}
const whitePawnMovement = async (board) => {
    for (let row = 13; row > 8; row--) {
        for (let col = 0; col < 16; col++) {
            if (board[row][col] === 'P') {
                whitePawnAtack(board, row, col);
            }
        }
    }
}

const whiteQueenMovement = async (board) => {
    for (let row = 15; row > 0; row--) {
        for (let col = 0; col < 16; col++) {
            if ('KQRB'.includes(board[row][col])) {
                whiteQueenAtack(board, row, col);
            }
        }
    }
}

const whitePawnAtack = async (board, row, col) => {

    if (board[row - 1][col] === ' ') {
        if (board[row - 2][col] === ' ') {
            if (row === 12 || row === 13) {
                let nuevoMovimiento = {
                    value: 35,
                    from_row: row,
                    from_col: col,
                    to_row: row - 2,
                    to_col: col,
                    valueMovimiento: valueMovimiento.P
                }
                whiteMovementsArray.push(nuevoMovimiento)
            }
        }
        if (blacks.includes(board[row - 1][col + 1])) {
            let nuevoMovimiento = {

                value: value[board[row - 1][col + 1]],
                from_row: row,
                from_col: col,
                to_row: row - 1,
                to_col: col + 1,
                valueMovimiento: valueMovimiento.P

            }
            whiteMovementsArray.push(nuevoMovimiento)
        }
        if (blacks.includes(board[row - 1][col - 1])) {
            let nuevoMovimiento = {

                value: value[board[row - 1][col - 1]],
                from_row: row,
                from_col: col,
                to_row: row - 1,
                to_col: col - 1,
                valueMovimiento: valueMovimiento.P
            }
            whiteMovementsArray.push(nuevoMovimiento)
        }
        if (row - 1 === 8) {
            let nuevoMovimiento = {
                value: 50,
                from_row: row,
                from_col: col,
                to_row: row - 1,
                to_col: col,
                valueMovimiento: valueMovimiento.P
            }
            whiteMovementsArray.push(nuevoMovimiento)
        }
        let nuevoMovimiento = {

            value: valueMovimiento.P,
            from_row: row,
            from_col: col,
            to_row: row - 1,
            to_col: col,
            valueMovimiento: valueMovimiento.P
        }
        whiteMovementsArray.push(nuevoMovimiento)
    }
}


const whiteQueenAtack = (board, from_row, from_col) => {

    // MOVIMIENTO VERTICAL HACIA LA BASE NEGRA
    if ('QR'.includes(board[from_row][from_col])) {
        for (let row = from_row - 1; row >= 0; row--) {

            if (whites.includes(board[row][from_col])) {
                break;
            }
            if (blacks.includes(board[row][from_col])) {
                let nuevoMovimiento = {
                    value: value[board[row][from_col]],
                    from_row: from_row,
                    from_col: from_col,
                    to_row: row,
                    to_col: from_col,
                    valueMovimiento: valueMovimiento[board[from_row][from_col]]
                }
                whiteMovementsArray.push(nuevoMovimiento)
                break;
            }
        }

        // MOVIMIENTO VERTICAL HACIA LA BASE BLANCA

        for (let row = from_row + 1; row < 16; row++) {

            if (whites.includes(board[row][from_col])) {
                break;
            }

            if (blacks.includes(board[row][from_col])) {
                let nuevoMovimiento = {

                    value: value[board[row][from_col]],
                    from_row: from_row,
                    from_col: from_col,
                    to_row: row,
                    to_col: from_col,
                    valueMovimiento: valueMovimiento[board[from_row][from_col]]
                }
                whiteMovementsArray.push(nuevoMovimiento)
                break;
            }

        }

        // MOVIMIENTO HORIZONTAL HACIA LA IZQUIERDA

        for (let col = from_col - 1; col > 0; col--) {
            if (whites.includes(board[from_row][col])) {
                break;
            }
            if (blacks.includes(board[from_row][col])) {
                let nuevoMovimiento = {
                    value: value[board[from_row][col]],
                    from_row: from_row,
                    from_col: from_col,
                    to_row: from_row,
                    to_col: col,
                    valueMovimiento: valueMovimiento[board[from_row][from_col]]
                }
                whiteMovementsArray.push(nuevoMovimiento)
                break;
            }
        }

        // MOVIMIENTO HORIZONTAL HACIA LA DERECHA

        for (let col = from_col + 1; col < 16; col++) {
            if (whites.includes(board[from_row][col])) {
                break;
            }
            if (blacks.includes(board[from_row][col])) {
                let nuevoMovimiento = {
                    value: value[board[from_row][col]],
                    from_row: from_row,
                    from_col: from_col,
                    to_row: from_row,
                    to_col: col,
                    valueMovimiento: valueMovimiento[board[from_row][from_col]]
                }
                whiteMovementsArray.push(nuevoMovimiento)
                break;
            }

        }
    }
    // MOVIMIENTO DIAGONAL ADELANTE A LA DERECHA
    if ('QB'.includes(board[from_row][from_col])) {

        for (let x = 1; x < from_row; x++) {

            if (whites.includes(board[from_row - x][from_col + x])) {
                break;
            }

            if (from_col + x >= 16 || from_row - x <= -1) {
                break
            };

            if (blacks.includes(board[from_row - x][from_col + x])) {

                // if ((board[from_row - x - 1][from_col + x + 1 || from_col + x - 1] === 'p')) {
                //     break;
                // }

                let nuevoMovimiento = {

                    value: value[board[from_row - x][from_col + x]],
                    from_row: from_row,
                    from_col: from_col,
                    to_row: from_row - x,
                    to_col: from_col + x,
                    valueMovimiento: valueMovimiento[board[from_row][from_col]]
                }
                whiteMovementsArray.push(nuevoMovimiento)
                break;
            }
        }
    }

    // MOVIMIENTO DIAGONAL ADELANTE A LA IZQUIERDA
    if ('QB'.includes(board[from_row][from_col])) {

        for (let y = 1; y < from_row; y++) {

            if (whites.includes(board[from_row - y][from_col - y])) {
                break;
            }

            if (from_col - y <= -1 || from_row - y <= -1) {
                break
            }

            if (blacks.includes(board[from_row - y][from_col - y])) {

                let nuevoMovimiento = {

                    value: value[board[from_row - y][from_col - y]],
                    from_row: from_row,
                    from_col: from_col,
                    to_row: from_row - y,
                    to_col: from_col - y,
                    valueMovimiento: valueMovimiento[board[from_row][from_col]],
                }
                whiteMovementsArray.push(nuevoMovimiento)
                break;
            }
        }
    }

    // MOVIMIENTO DIAGONAL ATRAS A LA IZQUIERDA
    if ('QB'.includes(board[from_row][from_col])) {

        for (let x = 1; x < from_col; x++) {

            if (from_col - x < 0 || from_row + x > 15) {
                break
            };

            if (whites.includes(board[from_row + x][from_col - x])) {
                break;
            }

            if (blacks.includes(board[from_row + x][from_col - x])) {

                let nuevoMovimiento = {

                    value: value[board[from_row + x][from_col - x]],
                    from_row: from_row,
                    from_col: from_col,
                    to_row: from_row + x,
                    to_col: from_col - x,
                    valueMovimiento: valueMovimiento[board[from_row][from_col]]
                }
                whiteMovementsArray.push(nuevoMovimiento)
                break;
            }
        }
    }

    // MOVIMIENTO DIAGONAL ATRAS A LA DERECHA
    if ('QB'.includes(board[from_row][from_col])) {

        for (let y = 1; y < from_col; y++) {

            if (from_col + y > 15 || from_row + y > 15) {
                break
            }

            if (whites.includes(board[from_row + y][from_col + y])) {
                break;
            }

            if (blacks.includes(board[from_row + y][from_col + y])) {

                let nuevoMovimiento = {
                    value: value[board[from_row + y][from_col + y]],
                    from_row: from_row,
                    from_col: from_col,
                    to_row: from_row + y,
                    to_col: from_col + y,
                    valueMovimiento: valueMovimiento[board[from_row][from_col]]
                }
                whiteMovementsArray.push(nuevoMovimiento)
                break;
            }
        }
    }


    // MOVIMIENTO DEL REY
    if ('K'.includes(board[from_row][from_col])) {
        for (let row = -1; row < 2; row++) {
            for (let col = -1; col < 2; col++) {
                if (from_row + row > 15 || from_col + col < 0 || from_col + col > 15) {
                    continue;
                }
                if (whites.includes(board[from_row + row][from_col + col])) {
                    continue;
                }
                if (blacks.includes(board[from_row + row][from_col + col])) {
                    let nuevoMovimiento = {
                        value: value[board[from_row + row][from_col + col]],
                        from_row: from_row,
                        from_col: from_col,
                        to_row: from_row + row,
                        to_col: from_col + col,
                        valueMovimiento: valueMovimiento[board[from_row][from_col]]
                    }
                    whiteMovementsArray.push(nuevoMovimiento)
                }

            }
        }
    }
    // return movimiento
}

module.exports = {
    whiteMovements
}