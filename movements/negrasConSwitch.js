const matriz = require("./matriz");
const { randomMovements } = require("./movementsWithoutEating");

const blacks = 'phbrqk';
const whites = 'PHBRQK';

let blackMovementsArray = []

const blackMovements = (data) => {

    return new Promise((resolve, reject) => {

        let board_id = data.data.board_id;
        let turn_token = data.data.turn_token;
        let board = matriz(data)
        // console.table(board);

        blackPiecesMovements(board)
            .then(() => {
                if (blackMovementsArray.length === 0) {
                    let movement = randomMovements(board)
                    resolve({
                        action: 'move',
                        data: {
                            board_id,
                            turn_token,
                            from_row: movement.from_row,
                            from_col: movement.from_col,
                            to_row: movement.to_row,
                            to_col: movement.to_col,
                        }
                    })
                }
                // console.log(blackMovementsArray)

                let blackBestMovement = blackMovementsArray.reduce((acum, current) => {
                    // if (current.value === 700 & current.to_row < 7) {
                    //     return current
                    // } else if (acum.value === 700 & acum.to_row < 7) {
                    //     return acum
                    // }
                    if (acum.value >= current.value) {
                        return acum
                    } else {
                        return current
                    }
                })
                // console.log(blackBestMovement)
                resolve({
                    action: 'move',
                    data: {
                        board_id,
                        turn_token,
                        from_row: blackBestMovement.from_row,
                        from_col: blackBestMovement.from_col,
                        to_row: blackBestMovement.to_row,
                        to_col: blackBestMovement.to_col,
                    }
                })
            })
            .catch(err => reject(err))
            .finally(() => {
                blackMovementsArray = []
                blackBestMovement = []
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
    q: 5,
    k: 100,
}

const blackPiecesMovements = async (board) => {

    for (let row = 15; row > -1; row--) {
        for (let col = 0; col < board.length; col++) {
            switch (board[row][col]) {

                case 'p':
                    await pawnMovement(board, row, col);
                    break;

                case 'h':
                    await horseMovement(board, row, col);
                    break;

                case 'b':
                    await diagonalMovement(board, row, col);
                    break;

                case 'r':
                    await horizontalMovement(board, row, col);
                    await verticalMovement(board, row, col);
                    break;

                case 'q':
                    await horizontalMovement(board, row, col);
                    await verticalMovement(board, row, col);
                    await diagonalMovement(board, row, col);
                    break;

                case 'k':
                    await kingMovement(board, row, col);
                    break;

                default:
                    break;
            }
        }
    }
}

//FUNCIONES DE MOVIMIENTO
////////////////////////////////////////////////////////////////////////////////////////////////////
const horizontalMovement = async (board, from_row, from_col) => {
    // MOVIMIENTO HORIZONTAL HACIA LA IZQUIERDA

    for (let col = from_col - 1; col > 0; col--) {
        if (blacks.includes(board[from_row][col])) {
            if (col + 1 !== from_col) {
                blackMovementsArray.push({
                    value: valuePiece[board[from_row][from_col]],
                    from_row: from_row,
                    from_col: from_col,
                    to_row: from_row,
                    to_col: col + 1,
                    valuePiece: valuePiece[board[from_row][from_col]]
                })
            }
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
            if (col - 1 !== from_col) {
                blackMovementsArray.push({
                    value: valuePiece[board[from_row][from_col]],
                    from_row: from_row,
                    from_col: from_col,
                    to_row: from_row,
                    to_col: col - 1,
                    valuePiece: valuePiece[board[from_row][from_col]]
                })
            }
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

const verticalMovement = async (board, from_row, from_col) => {

    // MOVIMIENTO VERTICAL HACIA LA BASE NEGRA
    for (let row = from_row - 1; row > -1; row--) {

        if (blacks.includes(board[row][from_col])) {
            if (row + 1 !== from_row) {
                blackMovementsArray.push({
                    value: valuePiece[board[from_row][from_col]],
                    from_row: from_row,
                    from_col: from_col,
                    to_row: row + 1,
                    to_col: from_col,
                    valuePiece: valuePiece[board[from_row][from_col]]
                })
            }
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

    for (let row = from_row + 1; row < board.length; row++) {

        if (blacks.includes(board[row][from_col])) {
            if (row - 1 !== from_row) {
                blackMovementsArray.push({
                    value: valuePiece[board[from_row][from_col]],
                    from_row: from_row,
                    from_col: from_col,
                    to_row: row - 1,
                    to_col: from_col,
                    valuePiece: valuePiece[board[from_row][from_col]]
                })
            }
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


}

const diagonalMovement = async (board, from_row, from_col) => {

    // MOVIMIENTO DIAGONAL ARRIBA A LA DERECHA

    for (let x = 1; x < 16; x++) {

        if (from_col + x > 15 || from_row - x < 0) {
            break
        };

        if (blacks.includes(board[from_row - x][from_col + x])) {
            if (x !== 1) {
                blackMovementsArray.push({
                    value: valuePiece[board[from_row][from_col]],
                    from_row: from_row,
                    from_col: from_col,
                    to_row: from_row - x + 1,
                    to_col: from_col + x - 1,
                    valuePiece: valuePiece[board[from_row][from_col]]
                })
            }
            break;
        }

        if (whites.includes(board[from_row - x][from_col + x])) {
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

    // MOVIMIENTO DIAGONAL ARRIBA A LA IZQUIERDA

    for (let y = 1; y < 16; y++) {
        if (from_col - y < 0 || from_row - y < 0) {
            break
        }

        if (blacks.includes(board[from_row - y][from_col - y])) {
            if (y !== 1) {
                blackMovementsArray.push({
                    value: valuePiece[board[from_row][from_col]],
                    from_row: from_row,
                    from_col: from_col,
                    to_row: from_row - y + 1,
                    to_col: from_col - y + 1,
                    valuePiece: valuePiece[board[from_row][from_col]]
                })
            }
            break;
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

    // MOVIMIENTO DIAGONAL ABAJO A LA IZQUIERDA

    for (let x = 1; x < 16; x++) {

        if (from_col - x < 0 || from_row + x > 15) {
            break
        };

        if (blacks.includes(board[from_row + x][from_col - x])) {
            if (x !== 1) {
                blackMovementsArray.push({
                    value: valuePiece[board[from_row][from_col]],
                    from_row: from_row,
                    from_col: from_col,
                    to_row: from_row + x - 1,
                    to_col: from_col - x + 1,
                    valuePiece: valuePiece[board[from_row][from_col]]
                })
            }
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


    // MOVIMIENTO DIAGONAL ABAJO A LA DERECHA

    for (let y = 1; y < 16; y++) {

        if (from_col + y > 15 || from_row + y > 15) {
            break
        }

        if (blacks.includes(board[from_row + y][from_col + y])) {
            if (y !== 1) {
                blackMovementsArray.push({
                    value: valuePiece[board[from_row][from_col]],
                    from_row: from_row,
                    from_col: from_col,
                    to_row: from_row + y - 1,
                    to_col: from_col + y - 1,
                    valuePiece: valuePiece[board[from_row][from_col]]
                })
            }
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

const kingMovement = async (board, from_row, from_col) => {
    // MOVIMIENTO DEL REY
    for (let row = -1; row < 2; row++) {
        for (let col = -1; col < 2; col++) {
            if ((from_row + row || from_col + col) > 15 || (from_row + row || from_col + col) < 0) {
                continue;
            }
            if (blacks.includes(board[from_row + row][from_col + col])) {
                continue;
            }
            // if (' '.includes(board[from_row + row][from_col + col])) {
            //     blackMovementsArray.push({
            //         value: valuePiece.k,
            //         from_row: from_row,
            //         from_col: from_col,
            //         to_row: from_row + row,
            //         to_col: from_col + col,
            //         valuePiece: valuePiece[board[from_row][from_col]]
            //     })
            // }
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

const horseMovement = async (board, from_row, from_col) => {
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
            //         value: valuePiece.H,
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

const pawnMovement = async (board, from_row, from_col) => {

    if (board[from_row + 1][from_col] === ' ') {
        if (board[from_row + 2][from_col] === ' ') {
            if (from_row === 2 || from_row === 3) {

                if (from_col > 12) {
                    blackMovementsArray.push({
                        value: 150,
                        from_row: from_row,
                        from_col: from_col,
                        to_row: from_row + 2,
                        to_col: from_col,
                        valuePiece: valuePiece[board[from_row][from_col]]
                    })
                }

                blackMovementsArray.push({
                    value: 100,
                    from_row: from_row,
                    from_col: from_col,
                    to_row: from_row + 2,
                    to_col: from_col,
                    valuePiece: valuePiece[board[from_row][from_col]]
                })
            }

        }
        if (whites.includes(board[from_row + 1][from_col + 1])) {
            blackMovementsArray.push({
                value: value[board[from_row + 1][from_col + 1]],
                from_row: from_row,
                from_col: from_col,
                to_row: from_row + 1,
                to_col: from_col + 1,
                valuePiece: valuePiece[board[from_row][from_col]]
            })
        }
        if (whites.includes(board[from_row + 1][from_col - 1])) {
            blackMovementsArray.push({
                value: value[board[from_row + 1][from_col - 1]],
                from_row: from_row,
                from_col: from_col,
                to_row: from_row + 1,
                to_col: from_col - 1,
                valuePiece: valuePiece[board[from_row][from_col]]
            })
        }
        if (from_row + 1 === 7) {
            blackMovementsArray.push({
                value: 500,
                from_row: from_row,
                from_col: from_col,
                to_row: from_row + 1,
                to_col: from_col,
                valuePiece: valuePiece[board[from_row][from_col]]
            })
        }
        if (from_col > 12) {
            blackMovementsArray.push({
                value: 150,
                from_row: from_row,
                from_col: from_col,
                to_row: from_row + 1,
                to_col: from_col,
                valuePiece: valuePiece[board[from_row][from_col]]
            })
        }
        blackMovementsArray.push({
            value: 100,
            from_row: from_row,
            from_col: from_col,
            to_row: from_row + 1,
            to_col: from_col,
            valuePiece: valuePiece[board[from_row][from_col]]
        })
    }
}
////////////////////////////////////////////////////////////////////////////////////////////////////
module.exports = {
    blackMovements
}