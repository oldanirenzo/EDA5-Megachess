
const blacks = 'phbrqk';
const whites = 'PHBRQK';



const blackMovements = (data) => {
    return new Promise((resolve, reject) => {

        let board_id = data.data.board_id;
        let turn_token = data.data.turn_token;
        let board = matriz(data)

        blackPiecesMovements(board)
            .then(movement => {
                resolve({
                    action: 'move',
                    data: {
                        board_id,
                        turn_token,
                        from_row: movimiento.from_row,
                        from_col: movimiento.from_col,
                        to_row: movimiento.to_row,
                        to_col: movimiento.to_col,
                    }
                })
            })
            .catch(err => reject(err))
    })
}

let movimiento = {
    value: 0,
    from_row: 0,
    from_col: 0,
    to_row: 0,
    to_col: 0
}

let value = {
    P: 100,
    H: 300,
    B: 400,
    R: 600,
    Q: 700,
    K: 1000
}

let valueMovimiento = {
    p: 10,
    h: 30,
    b: 40,
    r: 60,
    q: 70,
    k: 100
}

const blackPiecesMovements = async (board) => {
    try {
        await blackPawnMovement(board);
        await blackQueenMovement(board);
    } catch (error) {
        console.log('Error Negras: ' + error)
    }
}



const blackPawnMovement = (board) => {
    let from_row, from_col;
    while (true) {
        from_row = Math.floor(Math.random() * (7 - 0));
        from_col = Math.floor(Math.random() * (15 - 0));
        if (board[from_row][from_col] === 'p') {

            if (board[from_row + 1][from_col] === ' ') {
                if (board[from_row + 2][from_col] === ' ') {
                    if (from_row === 2 || from_row === 3) {
                        movimiento.value = 30;
                        movimiento.from_row = from_row;
                        movimiento.from_col = from_col;
                        movimiento.to_row = from_row + 2;
                        movimiento.to_col = from_col;
                    }
                }
                if (whites.includes(board[from_row + 1][from_col + 1])) {
                    movimiento.value = value[board[from_row + 1][from_col + 1]]
                    movimiento.from_row = from_row;
                    movimiento.from_col = from_col;
                    movimiento.to_row = from_row + 1;
                    movimiento.to_col = from_col + 1;
                }
                if (whites.includes(board[from_row + 1][from_col - 1])) {
                    movimiento.value = value[board[from_row + 1][from_col - 1]]
                    movimiento.from_row = from_row;
                    movimiento.from_col = from_col;
                    movimiento.to_row = from_row + 1;
                    movimiento.to_col = from_col - 1;
                }

                movimiento.value = valueMovimiento.p;
                movimiento.from_row = from_row;
                movimiento.from_col = from_col;
                movimiento.to_row = from_row + 1;
                movimiento.to_col = from_col;

            }
            return movimiento;
        }
    }
}


const blackQueenMovement = (board) => {
    for (let row = 0; row < 16; row++) {
        for (let col = 0; col < 16; col++) {
            if (board[row][col] === 'q') {
                blackQueenAtack(board, row, col);
            }
        }
    }
}

const blackQueenAtack = (board, from_row, from_col) => {
    // MOVIMIENTO VERTICAL HACIA LA BASE BLANCA
    for (let row = from_row + 1; row < 16; row++) {
        if (whites.includes(board[row][from_col])) {
            if (board[row + 1][from_col + 1 || from_col - 1] === 'P') {
                continue;
            }

            if (value[board[row][from_col]] > movimiento.value) {
                movimiento.value = value[board[row][from_col]]
                movimiento.from_row = from_row;
                movimiento.from_col = from_col;
                movimiento.to_row = row;
                movimiento.to_col = from_col;
                continue;
            }

        } else if (blacks.includes(board[row][from_col])) {
            continue;
        }
        break;
    }
    // MOVIMIENTO VERTICAL HACIA LA BASE NEGRA
    for (let row = from_row - 1; row > 0; row--) {
        if (whites.includes(board[row][from_col])) {
            if (board[row + 1][from_col + 1 || from_col - 1] === 'P') {
                continue;
            }
            if (value[board[row][from_col]] > movimiento.value) {
                movimiento.value = value[board[row][from_col]]
                movimiento.from_row = from_row;
                movimiento.from_col = from_col;
                movimiento.to_row = row;
                movimiento.to_col = from_col;
                continue;
            }
        } else if (blacks.includes(board[row][from_col])) {
            continue;
        }
        break;
    }
    // MOVIMIENTO HORIZONTAL HACIA LA IZQUIERDA
    for (let col = from_col; col > 0; col--) {
        if (whites.includes(board[from_row][col])) {
            if (board[from_row + 1][col + 1 || col - 1] === 'P') {
                continue;
            }
            if (value[board[from_row][col]] > movimiento.value) {
                movimiento.value = value[board[from_row][col]]
                movimiento.from_row = from_row;
                movimiento.from_col = from_col;
                movimiento.to_row = from_row;
                movimiento.to_col = col;
                continue;
            }
        } else if (blacks.includes(board[from_row][col])) {
            continue;
        }
        break;
    }
    // MOVIMIENTO HORIZONTAL HACIA LA DERECHA
    for (let col = from_col; col < 16; col++) {
        if (whites.includes(board[from_row][col])) {
            if (board[from_row + 1][col + 1 || col - 1] === 'P') {
                continue;
            }
            if (value[board[from_row][col]] > movimiento.value) {
                movimiento.value = value[board[from_row][col]]
                movimiento.from_row = from_row;
                movimiento.from_col = from_col;
                movimiento.to_row = from_row;
                movimiento.to_col = col;
                continue;
            }
        } else if (blacks.includes(board[from_row][col])) {
            continue;
        }
        break;
    }
    // // MOVIMIENTO DIAGONAL 1 CASILLERO ADELANTE A LA IZQUIERDA
    // if ('KQR'.includes(board[from_row + 1][from_col - 1])) {

    //     if (value[board[from_row + 1][from_col - 1]] > movimiento.value) {
    //         movimiento.value = value[board[from_row + 1][from_col - 1]]
    //         movimiento.from_row = from_row;
    //         movimiento.from_col = from_col;
    //         movimiento.to_row = from_row + 1;
    //         movimiento.to_col = from_col - 1;
    //     }

    // }

    // MOVIMIENTO DIAGONAL ADELANTE A LA DERECHA
    for (let x = 1; x < 16; x++) {

        if ('KQRBH'.includes(board[from_row + x][from_col + x])) {

            if (from_col + x === 16) break;

            if (value[board[from_row + x][from_col + x]] > movimiento.value) {
                movimiento.value = value[board[from_row + x][from_col + x]]
                movimiento.from_row = from_row;
                movimiento.from_col = from_col;
                movimiento.to_row = from_row + x;
                movimiento.to_col = from_col + x;
            }

        } else if (blacks.includes(board[from_row + x][from_col + x])) {
            break;
        }
    }

    // MOVIMIENTO DIAGONAL ADELANTE A LA IZQUIERDA
    for (let x = 1; x < 16; x++) {

        if ('KQRBH'.includes(board[from_row + x][from_col - x])) {

            if (from_col - x === -1) break;

            if (value[board[from_row + x][from_col - x]] > movimiento.value) {
                movimiento.value = value[board[from_row + x][from_col - x]]
                movimiento.from_row = from_row;
                movimiento.from_col = from_col;
                movimiento.to_row = from_row + x;
                movimiento.to_col = from_col - x;
            }

        } else if (blacks.includes(board[from_row + x][from_col + x])) {
            break;
        }
    }

    return movimiento;
}

const matriz = ({ data }) => {
    let board = data.board;
    let index = 0;
    let matriz = [];

    for (let i = 0; i < 16; i++) {

        let row = [];
        for (let j = 0; j < 16; j++) {
            row.push(board[index])
            index++
        }
        matriz.push(row)
    }
    return matriz;
}

module.exports = {
    blackMovements,
}