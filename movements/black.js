const matriz = require("./matriz");

const blacks = 'phbrqk';
const whites = 'PHBRQK';

let blackMovementsArray = []

const blackMovements = (data) => {
    return new Promise((resolve, reject) => {

        let board_id = data.data.board_id;
        let turn_token = data.data.turn_token;
        let board = matriz(data)

        blackPiecesMovements(board)
            .then(() => {
                let bestMovement = blackMovementsArray.reduce((acum, actual) => acum.value > actual.value && acum.valuePiece < actual.valuePiece ? acum : actual)
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
                blackMovementsArray = []
                bestMovement = []
            })
    })
}

let value = {
    P: 100,
    H: 300,
    B: 400,
    R: 600,
    Q: 700,
    K: 1000
}

let valuePiece = {
    p: 10,
    h: 30,
    b: 40,
    r: 60,
    q: 70,
    k: 100,
}

const blackPiecesMovements = async (board) => {
    return new Promise((resolve, reject) => {
        blackPawnMovement(board)
            .then(() => {
                blackQueenMovement(board)
                    .then(() => {
                        resolve()
                    })
                    .catch(err => reject(err))
            })
            .catch(err => reject(err))

    })
}

const blackPawnMovement = async (board) => {
    for (let row = 2; row < 8; row++) {
        for (let col = 0; col < 16; col++) {
            if (board[row][col] === 'p') {
                await blackPawnAtack(board, row, col);
            }
        }
    }
}

const blackQueenMovement = async (board) => {
    for (let row = 15; row > 0; row--) {
        for (let col = 0; col < 16; col++) {
            if ('kqrbh'.includes(board[row][col])) {
                await blackQueenAtack(board, row, col);
            }
        }
    }
}

const blackPawnAtack = async (board, row, col) => {

    if (board[row + 1][col] === ' ') {
        if (board[row + 2][col] === ' ') {
            if (row === (2 || 3)) {
                blackMovementsArray.push({
                    value: 35,
                    from_row: row,
                    from_col: col,
                    to_row: row + 2,
                    to_col: col,
                    valuePiece: valuePiece.p
                }
                )
            }
        }
        if (whites.includes(board[row + 1][col + 1])) {
            blackMovementsArray.push({

                value: value[board[row + 1][col + 1]],
                from_row: row,
                from_col: col,
                to_row: row + 1,
                to_col: col + 1,
                valuePiece: valuePiece.p

            }
            )
        }
        if (whites.includes(board[row + 1][col - 1])) {
            blackMovementsArray.push({

                value: value[board[row + 1][col - 1]],
                from_row: row,
                from_col: col,
                to_row: row + 1,
                to_col: col - 1,
                valuePiece: valuePiece.p
            }
            )
        }
        if (row + 1 === 7) {
            blackMovementsArray.push({
                value: 50,
                from_row: row,
                from_col: col,
                to_row: row + 1,
                to_col: col,
                valuePiece: valuePiece.p
            }
            )
        }
        blackMovementsArray.push({

            value: valuePiece.p,
            from_row: row,
            from_col: col,
            to_row: row + 1,
            to_col: col,
            valuePiece: valuePiece.p
        })
    }
}


const blackQueenAtack = (board, from_row, from_col) => {

    // MOVIMIENTO VERTICAL HACIA LA BASE NEGRA
    if ('qr'.includes(board[from_row][from_col])) {
        for (let row = from_row - 1; row > 0; row--) {

            if (blacks.includes(board[row][from_col])) {
                break;
            }
            if (whites.includes(board[row][from_col])) {
                blackMovementsArray.push({
                    value: value[board[row][from_col]],
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

            if (blacks.includes(board[row][from_col])) {
                break;
            }

            if (whites.includes(board[row][from_col])) {
                blackMovementsArray.push({
                    value: value[board[row][from_col]],
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
            if (blacks.includes(board[from_row][col])) {
                break;
            }
            if (whites.includes(board[from_row][col])) {
                blackMovementsArray.push({
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
            if (blacks.includes(board[from_row][col])) {
                break;
            }
            if (whites.includes(board[from_row][col])) {
                blackMovementsArray.push({
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
    // MOVIMIENTO DIAGONAL ARRIBA A LA DERECHA
    if ('qb'.includes(board[from_row][from_col])) {

        for (let x = 1; x < from_row; x++) {

            if (blacks.includes(board[from_row - x][from_col + x])) {
                break;
            }

            if (from_col + x >= 16 || from_row - x <= -1) {
                break
            };

            if (whites.includes(board[from_row - x][from_col + x])) {

                // if ((board[from_row - x + 1][from_col + x + 1 || from_col + x - 1] === 'P')) {
                //     break;
                // }

                blackMovementsArray.push({

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

    // MOVIMIENTO DIAGONAL ARRIBA A LA IZQUIERDA
    if ('qb'.includes(board[from_row][from_col])) {

        for (let y = 1; y < from_row; y++) {

            if (blacks.includes(board[from_row - y][from_col - y])) {
                break;
            }

            if (from_col - y <= -1 || from_row - y <= -1) {
                break
            }

            if (whites.includes(board[from_row - y][from_col - y])) {

                blackMovementsArray.push({

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

    // MOVIMIENTO DIAGONAL ABAJO A LA IZQUIERDA
    if ('qb'.includes(board[from_row][from_col])) {

        for (let x = 1; x < from_col; x++) {

            if (from_col - x < 0 || from_row + x > 15) {
                break
            };

            if (blacks.includes(board[from_row + x][from_col - x])) {
                break;
            }

            if (whites.includes(board[from_row + x][from_col - x])) {

                blackMovementsArray.push({

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

    // MOVIMIENTO DIAGONAL ABAJO A LA DERECHA
    if ('qb'.includes(board[from_row][from_col])) {

        for (let y = 1; y < from_col; y++) {

            if (from_col + y > 15 || from_row + y > 15) {
                break
            }

            if (blacks.includes(board[from_row + y][from_col + y])) {
                break;
            }

            if (whites.includes(board[from_row + y][from_col + y])) {

                blackMovementsArray.push({
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
    if ('k'.includes(board[from_row][from_col])) {
        for (let row = -1; row < 2; row++) {
            for (let col = -1; col < 2; col++) {
                if (from_row + row < 0 || from_col + col < 0 || from_col + col > 15) {
                    continue;
                }
                if (blacks.includes(board[from_row + row][from_col + col])) {
                    continue;
                }
                if (whites.includes(board[from_row + row][from_col + col])) {
                    blackMovementsArray.push({

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
    if ('h'.includes(board[from_row][from_col])) {
        // 2 HACIA LOS LADOS Y 1 HACIA ARRIBA Y ABAJO
        for (let x = -2; x < 3; x += 4) {
            for (let y = -1; y < 2; y += 2) {
                if ((from_row + x || from_col + y) < 0 || (from_row + x || from_col + y) > 15) {
                    continue;
                }
                if (blacks.includes(board[from_row + x][from_col + y])) {
                    break;
                }
                // if (' '.includes(board[from_row + x][from_col + y])) {
                //     blackMovementsArray.push({
                //         value: valuePiece.h,
                //         from_row: from_row,
                //         from_col: from_col,
                //         to_row: from_row + x,
                //         to_col: from_col + y,
                //         valuePiece: valuePiece[board[from_row][from_col]]
                //     })
                // }
                if (whites.includes(board[from_row + x][from_col + y])) {
                    blackMovementsArray.push({
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
                if (blacks.includes(board[from_row + x][from_col + y])) {
                    break;
                }
                // if (' '.includes(board[from_row + x][from_col + y])) {
                //     blackMovementsArray.push({
                //         value: valuePiece.h,
                //         from_row: from_row,
                //         from_col: from_col,
                //         to_row: from_row + x,
                //         to_col: from_col + y,
                //         valuePiece: valuePiece[board[from_row][from_col]]
                //     })
                // }
                if (whites.includes(board[from_row + x][from_col + y])) {
                    blackMovementsArray.push({
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
    blackMovements,
}