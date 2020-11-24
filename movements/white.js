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
                // console.log('Movimientos: ' + whiteMovementsArray.length)
                let bestMovement = whiteMovementsArray.reduce((acum, current) => acum.value >= current.value ? acum : current)
                // console.log('BestMovement white: ', bestMovement)

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
    P: 30,
    H: 10,
    B: 40,
    R: 60,
    Q: 70,
    K: 100,
}

const whitePiecesMovements = async (board) => {
    return new Promise((resolve, reject) => {
        whitePawnMovement(board)
            .then(() => {
                whiteQueenMovement(board)
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
    for (let row = 0; row < 16; row++) {
        for (let col = 0; col < 16; col++) {
            if ('KQRBH'.includes(board[row][col])) {
                whiteQueenAtack(board, row, col);
            }
        }
    }
}

const whitePawnAtack = async (board, row, col) => {

    if (board[row - 1][col] === ' ') {
        if (board[row - 2][col] === ' ') {
            if (row === 12 || row === 13) {
                whiteMovementsArray.push({
                    value: 35,
                    from_row: row,
                    from_col: col,
                    to_row: row - 2,
                    to_col: col,
                    valuePiece: valuePiece.P
                })
            }
        }
        if (blacks.includes(board[row - 1][col + 1])) {
            whiteMovementsArray.push({
                value: value[board[row - 1][col + 1]],
                from_row: row,
                from_col: col,
                to_row: row - 1,
                to_col: col + 1,
                valuePiece: valuePiece.P
            })
        }
        if (blacks.includes(board[row - 1][col - 1])) {
            whiteMovementsArray.push({

                value: value[board[row - 1][col - 1]],
                from_row: row,
                from_col: col,
                to_row: row - 1,
                to_col: col - 1,
                valuePiece: valuePiece.P
            })
        }
        if (row - 1 === 8) {
            whiteMovementsArray.push({
                value: 50,
                from_row: row,
                from_col: col,
                to_row: row - 1,
                to_col: col,
                valuePiece: valuePiece.P
            })
        }
        whiteMovementsArray.push({

            value: valuePiece.P,
            from_row: row,
            from_col: col,
            to_row: row - 1,
            to_col: col,
            valuePiece: valuePiece.P
        })
    }
}


const whiteQueenAtack = (board, from_row, from_col) => {

    // MOVIMIENTO VERTICAL HACIA LA BASE NEGRA
    if ('QR'.includes(board[from_row][from_col])) {
        for (let row = from_row - 1; row >= 0; row--) {

            if (whites.includes(board[row][from_col])) {
                // if (row + 1 !== from_row) {
                //     whiteMovementsArray.push({
                //         value: valuePiece[board[from_row][from_col]],
                //         from_row: from_row,
                //         from_col: from_col,
                //         to_row: row + 1,
                //         to_col: from_col,
                //         valuePiece: valuePiece[board[from_row][from_col]]
                //     })
                // }
                break;
            }
            if (blacks.includes(board[row][from_col])) {
                whiteMovementsArray.push({
                    value: valuePiece[board[from_row][from_col]],
                    from_row: from_row,
                    from_col: from_col,
                    to_row: row,
                    to_col: from_col,
                    valuePiece: valuePiece[board[from_row][from_col]]
                })
                break;
            }
        }

        // MOVIMIENTO VERTICAL HACIA LA BASE BLANCA

        for (let row = from_row + 1; row < 16; row++) {

            if (whites.includes(board[row][from_col])) {
                // if (row - 1 !== from_row) {
                //     whiteMovementsArray.push({
                //         value: valuePiece[board[from_row][from_col]],
                //         from_row: from_row,
                //         from_col: from_col,
                //         to_row: row - 1,
                //         to_col: from_col,
                //         valuePiece: valuePiece[board[from_row][from_col]]
                //     })
                // }
                break;
            }

            if (blacks.includes(board[row][from_col])) {
                whiteMovementsArray.push({

                    value: valuePiece[board[from_row][from_col]],
                    from_row: from_row,
                    from_col: from_col,
                    to_row: row,
                    to_col: from_col,
                    valuePiece: valuePiece[board[from_row][from_col]]
                })
                break;
            }

        }

        // MOVIMIENTO HORIZONTAL HACIA LA IZQUIERDA

        for (let col = from_col - 1; col > 0; col--) {
            if (whites.includes(board[from_row][col])) {
                // if (col + 1 !== from_col) {
                //     whiteMovementsArray.push({
                //         value: valuePiece[board[from_row][from_col]],
                //         from_row: from_row,
                //         from_col: from_col,
                //         to_row: from_row,
                //         to_col: col + 1,
                //         valuePiece: valuePiece[board[from_row][from_col]]
                //     })
                // }
                break;
            }
            if (blacks.includes(board[from_row][col])) {
                whiteMovementsArray.push({
                    value: value[board[from_row][col]],
                    from_row: from_row,
                    from_col: from_col,
                    to_row: from_row,
                    to_col: col,
                    valuePiece: valuePiece[board[from_row][from_col]]
                })
                break;
            }
        }

        // MOVIMIENTO HORIZONTAL HACIA LA DERECHA

        for (let col = from_col + 1; col < 16; col++) {
            if (whites.includes(board[from_row][col])) {
                // if (col - 1 !== from_col) {
                //     whiteMovementsArray.push({
                //         value: valuePiece[board[from_row][from_col]],
                //         from_row: from_row,
                //         from_col: from_col,
                //         to_row: from_row,
                //         to_col: col - 1,
                //         valuePiece: valuePiece[board[from_row][from_col]]
                //     })
                // }
                break;
            }
            if (blacks.includes(board[from_row][col])) {
                whiteMovementsArray.push({
                    value: value[board[from_row][col]],
                    from_row: from_row,
                    from_col: from_col,
                    to_row: from_row,
                    to_col: col,
                    valuePiece: valuePiece[board[from_row][from_col]]
                })
                break;
            }

        }
    }
    // MOVIMIENTO DIAGONAL ADELANTE A LA DERECHA
    if ('QB'.includes(board[from_row][from_col])) {

        for (let x = 1; x < 16; x++) {

            if (from_col + x > 15 || from_row - x < 0) {
                break
            };

            if (whites.includes(board[from_row - x][from_col + x])) {
                // if (x !== 1) {
                //     whiteMovementsArray.push({
                //         value: valuePiece[board[from_row][from_col]],
                //         from_row: from_row,
                //         from_col: from_col,
                //         to_row: from_row - x + 1,
                //         to_col: from_col + x - 1,
                //         valuePiece: valuePiece[board[from_row][from_col]]
                //     })
                // }
                break;
            }

            if (blacks.includes(board[from_row - x][from_col + x])) {

                // if ((board[from_row - x - 1][from_col + x + 1 || from_col + x - 1] === 'p')) {
                //     break;
                // }

                whiteMovementsArray.push({

                    value: value[board[from_row - x][from_col + x]],
                    from_row: from_row,
                    from_col: from_col,
                    to_row: from_row - x,
                    to_col: from_col + x,
                    valuePiece: valuePiece[board[from_row][from_col]]
                })
                break;
            }
        }
    }

    // MOVIMIENTO DIAGONAL ADELANTE A LA IZQUIERDA
    if ('QB'.includes(board[from_row][from_col])) {

        for (let y = 1; y < 16; y++) {
            if (from_col - y < 0 || from_row - y < 0) {
                break
            }

            if (whites.includes(board[from_row - y][from_col - y])) {
                // if (y !== 1) {
                //     whiteMovementsArray.push({
                //         value: valuePiece[board[from_row][from_col]],
                //         from_row: from_row,
                //         from_col: from_col,
                //         to_row: from_row - y + 1,
                //         to_col: from_col - y + 1,
                //         valuePiece: valuePiece[board[from_row][from_col]]
                //     })
                // }
                break;
            }

            if (blacks.includes(board[from_row - y][from_col - y])) {

                whiteMovementsArray.push({
                    value: value[board[from_row - y][from_col - y]],
                    from_row: from_row,
                    from_col: from_col,
                    to_row: from_row - y,
                    to_col: from_col - y,
                    valuePiece: valuePiece[board[from_row][from_col]],
                })
                break;
            }
        }
    }

    // MOVIMIENTO DIAGONAL ATRAS A LA IZQUIERDA
    if ('QB'.includes(board[from_row][from_col])) {

        for (let x = 1; x < 16; x++) {

            if (from_col - x < 0 || from_row + x > 15) {
                break
            };

            if (whites.includes(board[from_row + x][from_col - x])) {
                // if (x !== 1) {
                //     whiteMovementsArray.push({
                //         value: valuePiece[board[from_row][from_col]],
                //         from_row: from_row,
                //         from_col: from_col,
                //         to_row: from_row + x - 1,
                //         to_col: from_col - x + 1,
                //         valuePiece: valuePiece[board[from_row][from_col]]
                //     })
                // }
                break;
            }

            if (blacks.includes(board[from_row + x][from_col - x])) {

                whiteMovementsArray.push({

                    value: value[board[from_row + x][from_col - x]],
                    from_row: from_row,
                    from_col: from_col,
                    to_row: from_row + x,
                    to_col: from_col - x,
                    valuePiece: valuePiece[board[from_row][from_col]]
                })
                break;
            }
        }
    }

    // MOVIMIENTO DIAGONAL ATRAS A LA DERECHA
    if ('QB'.includes(board[from_row][from_col])) {

        for (let y = 1; y < 16; y++) {

            if (from_col + y > 15 || from_row + y > 15) {
                break
            }

            if (whites.includes(board[from_row + y][from_col + y])) {
                // if (y !== 1) {
                //     whiteMovementsArray.push({
                //         value: valuePiece[board[from_row][from_col]],
                //         from_row: from_row,
                //         from_col: from_col,
                //         to_row: from_row + y - 1,
                //         to_col: from_col + y - 1,
                //         valuePiece: valuePiece[board[from_row][from_col]]
                //     })
                // }
                break;
            }

            if (blacks.includes(board[from_row + y][from_col + y])) {

                whiteMovementsArray.push({
                    value: value[board[from_row + y][from_col + y]],
                    from_row: from_row,
                    from_col: from_col,
                    to_row: from_row + y,
                    to_col: from_col + y,
                    valuePiece: valuePiece[board[from_row][from_col]]
                })
                break;
            }
        }
    }


    // MOVIMIENTO DEL REY
    if ('K'.includes(board[from_row][from_col])) {
        for (let row = -1; row < 2; row++) {
            for (let col = -1; col < 2; col++) {
                if ((from_row + row || from_col + col) > 15 || (from_row + row || from_col + col) < 0) {
                    continue;
                }
                if (whites.includes(board[from_row + row][from_col + col])) {
                    continue;
                }
                // if (' '.includes(board[from_row + row][from_col + col])) {
                //     whiteMovementsArray.push({
                //         value: valuePiece.K,
                //         from_row: from_row,
                //         from_col: from_col,
                //         to_row: from_row + row,
                //         to_col: from_col + col,
                //         valuePiece: valuePiece[board[from_row][from_col]]
                //     })
                // }
                if (blacks.includes(board[from_row + row][from_col + col])) {
                    whiteMovementsArray.push({
                        value: value[board[from_row + row][from_col + col]],
                        from_row: from_row,
                        from_col: from_col,
                        to_row: from_row + row,
                        to_col: from_col + col,
                        valuePiece: valuePiece[board[from_row][from_col]]
                    })
                }
            }
        }
    }

    //MOVIMIENTO DEL CABALLO
    if ('H'.includes(board[from_row][from_col])) {
        // 2 HACIA LOS LADOS Y 1 HACIA ARRIBA Y ABAJO
        for (let x = -2; x < 3; x += 4) {
            for (let y = -1; y < 2; y += 2) {
                if ((from_row + x || from_col + y) < 0 || (from_row + x || from_col + y) > 15) {
                    continue;
                }
                if (whites.includes(board[from_row + x][from_col + y])) {
                    break;
                }
                // if (' '.includes(board[from_row + x][from_col + y])) {
                //     whiteMovementsArray.push({
                //         value: valuePiece.H,
                //         from_row: from_row,
                //         from_col: from_col,
                //         to_row: from_row + x,
                //         to_col: from_col + y,
                //         valuePiece: valuePiece[board[from_row][from_col]]
                //     })
                // }
                if (blacks.includes(board[from_row + x][from_col + y])) {
                    whiteMovementsArray.push({
                        value: value[board[from_row + x][from_col + y]],
                        from_row: from_row,
                        from_col: from_col,
                        to_row: from_row + x,
                        to_col: from_col + y,
                        valuePiece: valuePiece[board[from_row][from_col]]
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
                        valuePiece: valuePiece[board[from_row][from_col]]
                    })
                }
                if (blacks.includes(board[from_row + x][from_col + y])) {
                    whiteMovementsArray.push({
                        value: value[board[from_row + x][from_col + y]],
                        from_row: from_row,
                        from_col: from_col,
                        to_row: from_row + x,
                        to_col: from_col + y,
                        valuePiece: valuePiece[board[from_row][from_col]]
                    })
                }
            }
        }
    }
    // return movimiento
}

module.exports = {
    whiteMovements
}