const matriz = require("./movements/matriz");

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
                // console.log('Movimientos Array: ', whiteMovementsArray)
                console.log('Movimientos encontrados: ' + whiteMovementsArray.length)
                let bestMovement = whiteMovementsArray.reduce((acum, actual) => acum.value >= actual.value ? acum : actual)
                console.log('BestMovement blancasConSwitch: ', bestMovement)
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
    k: 1000,
}

let valuePiece = {
    P: 10,
    H: 30,
    B: 40,
    R: 60,
    Q: 70,
    K: 100,
}

const whitePiecesMovements = async (board) => {

    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board.length; col++) {
            switch (board[row][col]) {
                case 'P':
                    await pawnMovement(board, row, col);
                    continue;
                case 'H':
                    await horseMovement(board, row, col);
                    continue;

                case 'B':
                    await diagonalMovement(board, row, col);
                    continue;

                case 'R':
                    await horizontalMovement(board, row, col);
                    await verticalMovement(board, row, col);
                    continue;

                case 'Q':
                    await horizontalMovement(board, row, col);
                    await verticalMovement(board, row, col);
                    await diagonalMovement(board, row, col);
                    continue;
                case 'K':
                    await kingMovement(board, row, col);
                    continue;
                default:
                    continue;
            }

        }

    }
}


////////////////////////////////////////////////////////////////////////////////////////////////////
const horizontalMovement = async (board, from_row, from_col) => {
    // MOVIMIENTO HORIZONTAL HACIA LA IZQUIERDA

    for (let col = from_col - 1; col > 0; col--) {
        if (whites.includes(board[from_row][col])) {
            if (col + 1 !== from_col) {
                whiteMovementsArray.push({
                    value: valuePiece[board[from_row][from_col]],
                    from_row: from_row,
                    from_col: from_col,
                    to_row: from_row,
                    to_col: col + 1,
                    // valuePiece: valuePiece[board[from_row][from_col]]
                })
            }
            break;
        }
        if (blacks.includes(board[from_row][col])) {
            whiteMovementsArray.push({
                value: value[board[from_row][col]] - valuePiece[board[from_row][from_col]],
                from_row: from_row,
                from_col: from_col,
                to_row: from_row,
                to_col: col,
                // valuePiece: valuePiece[board[from_row][from_col]]
            })
            break;
        }
    }

    // MOVIMIENTO HORIZONTAL HACIA LA DERECHA

    for (let col = from_col + 1; col < 16; col++) {
        if (whites.includes(board[from_row][col])) {
                if (col - 1 !== from_col) {
                    whiteMovementsArray.push({
                        value: valuePiece[board[from_row][from_col]],
                        from_row: from_row,
                        from_col: from_col,
                        to_row: from_row,
                        to_col: col - 1,
                        // valuePiece: valuePiece[board[from_row][from_col]]
                    })
            }
            break;
        }
        if (blacks.includes(board[from_row][col])) {
            whiteMovementsArray.push({
                value: value[board[from_row][col]] - valuePiece[board[from_row][from_col]],
                from_row: from_row,
                from_col: from_col,
                to_row: from_row,
                to_col: col,
                // valuePiece: valuePiece[board[from_row][from_col]]
            })
            break;
        }

    }
}

const verticalMovement = async (board, from_row, from_col) => {

    // MOVIMIENTO VERTICAL HACIA LA BASE NEGRA
    for (let row = from_row - 1; row >= 0; row--) {

        if (whites.includes(board[row][from_col])) {
            if (row + 1 !== from_row) {
                whiteMovementsArray.push({
                    value: valuePiece[board[from_row][from_col]],
                    from_row: from_row,
                    from_col: from_col,
                    to_row: row + 1,
                    to_col: from_col,
                    // valuePiece: valuePiece[board[from_row][from_col]]
                })
            }
            break;
        }
        if (blacks.includes(board[row][from_col])) {
            whiteMovementsArray.push({
                value: valuePiece[board[from_row][from_col]] - valuePiece[board[from_row][from_col]],
                from_row: from_row,
                from_col: from_col,
                to_row: row,
                to_col: from_col,
                // valuePiece: valuePiece[board[from_row][from_col]]
            })
            break;
        }
    }

    // MOVIMIENTO VERTICAL HACIA LA BASE BLANCA

    for (let row = from_row + 1; row < 16; row++) {

        if (whites.includes(board[row][from_col])) {
            if (row - 1 !== from_row) {
                whiteMovementsArray.push({
                    value: valuePiece[board[from_row][from_col]],
                    from_row: from_row,
                    from_col: from_col,
                    to_row: row - 1,
                    to_col: from_col,
                    // valuePiece: valuePiece[board[from_row][from_col]]
                })
            }
            break;
        }

        if (blacks.includes(board[row][from_col])) {
            whiteMovementsArray.push({

                value: valuePiece[board[from_row][from_col]] - valuePiece[board[from_row][from_col]],
                from_row: from_row,
                from_col: from_col,
                to_row: row,
                to_col: from_col,
                // valuePiece: valuePiece[board[from_row][from_col]]
            })
            break;
        }
    }


}

const diagonalMovement = async (board, from_row, from_col) => {

    // MOVIMIENTO DIAGONAL ADELANTE A LA DERECHA

    for (let x = 1; x < 16; x++) {

        if (from_col + x > 15 || from_row - x < 0) {
            break
        };

        if (whites.includes(board[from_row - x][from_col + x])) {
            if (x !== 1) {
                whiteMovementsArray.push({
                    value: valuePiece[board[from_row][from_col]],
                    from_row: from_row,
                    from_col: from_col,
                    to_row: from_row - x + 1,
                    to_col: from_col + x - 1,
                    // valuePiece: valuePiece[board[from_row][from_col]]
                })
            }
            break;
        }

        if (blacks.includes(board[from_row - x][from_col + x])) {

            // if ((board[from_row - x - 1][from_col + x + 1 || from_col + x - 1] === 'p')) {
            //     break;
            // }

            whiteMovementsArray.push({

                value: value[board[from_row - x][from_col + x]] - valuePiece[board[from_row][from_col]],
                from_row: from_row,
                from_col: from_col,
                to_row: from_row - x,
                to_col: from_col + x,
                // valuePiece: valuePiece[board[from_row][from_col]]
            })
            break;
        }

    }

    // MOVIMIENTO DIAGONAL ADELANTE A LA IZQUIERDA

    for (let y = 1; y < 16; y++) {
        if (from_col - y < 0 || from_row - y < 0) {
            break
        }

        if (whites.includes(board[from_row - y][from_col - y])) {
            if (y !== 1) {
                whiteMovementsArray.push({
                    value: valuePiece[board[from_row][from_col]],
                    from_row: from_row,
                    from_col: from_col,
                    to_row: from_row - y + 1,
                    to_col: from_col - y + 1,
                    // valuePiece: valuePiece[board[from_row][from_col]]
                })
            }
            break;
        }

        if (blacks.includes(board[from_row - y][from_col - y])) {

            whiteMovementsArray.push({
                value: value[board[from_row - y][from_col - y]] - valuePiece[board[from_row][from_col]],
                from_row: from_row,
                from_col: from_col,
                to_row: from_row - y,
                to_col: from_col - y,
                // valuePiece: valuePiece[board[from_row][from_col]],
            })
            break;
        }

    }

    // MOVIMIENTO DIAGONAL ATRAS A LA IZQUIERDA

    for (let x = 1; x < 16; x++) {

        if (from_col - x < 0 || from_row + x > 15) {
            break
        };

        if (whites.includes(board[from_row + x][from_col - x])) {
            if (x !== 1) {
                whiteMovementsArray.push({
                    value: valuePiece[board[from_row][from_col]],
                    from_row: from_row,
                    from_col: from_col,
                    to_row: from_row + x - 1,
                    to_col: from_col - x + 1,
                    // valuePiece: valuePiece[board[from_row][from_col]]
                })
            }
            break;
        }

        if (blacks.includes(board[from_row + x][from_col - x])) {

            whiteMovementsArray.push({

                value: value[board[from_row + x][from_col - x]] - valuePiece[board[from_row][from_col]],
                from_row: from_row,
                from_col: from_col,
                to_row: from_row + x,
                to_col: from_col - x,
                // valuePiece: valuePiece[board[from_row][from_col]]
            })
            break;
        }
    }


    // MOVIMIENTO DIAGONAL ATRAS A LA DERECHA

    for (let y = 1; y < 16; y++) {

        if (from_col + y > 15 || from_row + y > 15) {
            break
        }

        if (whites.includes(board[from_row + y][from_col + y])) {
            if (y !== 1) {
                whiteMovementsArray.push({
                    value: valuePiece[board[from_row][from_col]],
                    from_row: from_row,
                    from_col: from_col,
                    to_row: from_row + y - 1,
                    to_col: from_col + y - 1,
                    // valuePiece: valuePiece[board[from_row][from_col]]
                })
            }
            break;
        }

        if (blacks.includes(board[from_row + y][from_col + y])) {

            whiteMovementsArray.push({
                value: value[board[from_row + y][from_col + y]] - valuePiece[board[from_row][from_col]],
                from_row: from_row,
                from_col: from_col,
                to_row: from_row + y,
                to_col: from_col + y,
                // valuePiece: valuePiece[board[from_row][from_col]]
            })
            break;
        }
    }
}

const kingMovement = async (board, from_row, from_col) => {
    // MOVIMIENTO DEL REY
    for (let row = -1; row < 2; row++) {
        for (let col = -1; col < 2; col++) {
            if ((from_row + row || from_col + col) > 15 || (from_row + row || from_col + col) < 0) {
                continue;
            }
            if (whites.includes(board[from_row + row][from_col + col])) {
                continue;
            }
            if (' '.includes(board[from_row + row][from_col + col])) {
                whiteMovementsArray.push({
                    value: valuePiece.K,
                    from_row: from_row,
                    from_col: from_col,
                    to_row: from_row + row,
                    to_col: from_col + col,
                    // valuePiece: valuePiece[board[from_row][from_col]]
                })
            }
            if (blacks.includes(board[from_row + row][from_col + col])) {
                whiteMovementsArray.push({
                    value: value[board[from_row + row][from_col + col]] - valuePiece[board[from_row][from_col]],
                    from_row: from_row,
                    from_col: from_col,
                    to_row: from_row + row,
                    to_col: from_col + col,
                    // valuePiece: valuePiece[board[from_row][from_col]]
                })
            }
        }

    }
}

const horseMovement = async (board, from_row, from_col) => {
    // 2 HACIA LOS LADOS Y 1 HACIA ARRIBA Y ABAJO
    for (let x = -2; x < 3; x += 4) {
        for (let y = -1; y < 2; y += 2) {
            if ((from_row + x || from_col + y) < 0 || (from_row + x || from_col + y) > 15) {
                continue;
            }
            if (whites.includes(board[from_row + x][from_col + y])) {
                break;
            }
            if (' '.includes(board[from_row + x][from_col + y])) {
                whiteMovementsArray.push({
                    value: valuePiece.H,
                    from_row: from_row,
                    from_col: from_col,
                    to_row: from_row + x,
                    to_col: from_col + y,
                    // valuePiece: valuePiece[board[from_row][from_col]]
                })
            }
            if (blacks.includes(board[from_row + x][from_col + y])) {
                whiteMovementsArray.push({
                    value: value[board[from_row + x][from_col + y]] - valuePiece[board[from_row][from_col]],
                    from_row: from_row,
                    from_col: from_col,
                    to_row: from_row + x,
                    to_col: from_col + y,
                    // valuePiece: valuePiece[board[from_row][from_col]]
                })
            }

        }
    }

    // 1 HACIA LOS LADOS Y 2 HACIA ARRIBA Y ABAJO
    for (let x = -1; x < 2; x += 2) {
        for (let y = -2; y < 3; y += 4) {
            if ((from_row + x || from_col + y) < 0 || (from_row + x || from_col + y) > 15) {
                continue;
            }
            if (whites.includes(board[from_row + x][from_col + y])) {
                break;
            }
            if (' '.includes(board[from_row + x][from_col + y])) {
                whiteMovementsArray.push({
                    value: valuePiece.H,
                    from_row: from_row,
                    from_col: from_col,
                    to_row: from_row + x,
                    to_col: from_col + y,
                    // valuePiece: valuePiece[board[from_row][from_col]]
                })
            }
            if (blacks.includes(board[from_row + x][from_col + y])) {
                whiteMovementsArray.push({
                    value: value[board[from_row + x][from_col + y]],
                    from_row: from_row,
                    from_col: from_col,
                    to_row: from_row + x,
                    to_col: from_col + y,
                    // valuePiece: valuePiece[board[from_row][from_col]]
                })
            }
        }
    }
}

const pawnMovement = async (board, from_row, from_col) => {

    if (board[from_row - 1][from_col] === ' ') {
        if (board[from_row - 2][from_col] === ' ') {
            if (from_row === 12 || from_row === 13) {
                whiteMovementsArray.push({
                    value: 50,
                    from_row: from_row,
                    from_col: from_col,
                    to_row: from_row - 2,
                    to_col: from_col,
                    // valuePiece: valuePiece.P
                })
            }
        }
        if (blacks.includes(board[from_row - 1][from_col + 1])) {
            whiteMovementsArray.push({
                value: value[board[from_row - 1][from_col + 1]],
                from_row: from_row,
                from_col: from_col,
                to_row: from_row - 1,
                to_col: from_col + 1,
                // valuePiece: valuePiece.P
            })
        }
        if (blacks.includes(board[from_row - 1][from_col - 1])) {
            whiteMovementsArray.push({
                value: value[board[from_row - 1][from_col - 1]],
                from_row: from_row,
                from_col: from_col,
                to_row: from_row - 1,
                to_col: from_col - 1,
                // valuePiece: valuePiece.P
            })
        }
        if (from_row - 1 === 8) {
            whiteMovementsArray.push({
                value: 70,
                from_row: from_row,
                from_col: from_col,
                to_row: from_row - 1,
                to_col: from_col,
                // valuePiece: valuePiece.P
            })
        }
        whiteMovementsArray.push({

            value: 40,
            from_row: from_row,
            from_col: from_col,
            to_row: from_row - 1,
            to_col: from_col,
            // valuePiece: valuePiece.P
        })
    }
}


////////////////////////////////////////////////////////////////////////////////////////////////////
module.exports = {
    whiteMovements
}