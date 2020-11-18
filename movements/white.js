
const blacks = 'phbrqk';
const whites = 'PHBRQK';



const whiteMovements = (data) => {
    return new Promise((resolve, reject) => {

        let board_id = data.data.board_id;
        let turn_token = data.data.turn_token;
        let board = matriz(data)

        whitePiecesMovements(board)
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
    try {
        await whitePawnMovement(board);
        await whiteQueenMovement(board);
    } catch (err) {
        console.log('Error Blancas: ' + err)
    }

}



const whitePawnMovement = (board) => {
    let from_row, from_col;
    while (true) {

        from_row = Math.floor(Math.random() * (14 - 9) + 9);
        from_col = Math.floor(Math.random() * (16));
        if (board[from_row][from_col] === 'P') {

            if (board[from_row - 1][from_col] === ' ') {

                if (board[from_row - 2][from_col] === ' ') {
                    if (from_row === 12 || from_row === 13) {
                        movimiento.value = 35;
                        movimiento.from_row = from_row;
                        movimiento.from_col = from_col;
                        movimiento.to_row = from_row - 2;
                        movimiento.to_col = from_col;
                    }
                }
                if (blacks.includes(board[from_row - 1][from_col + 1])) {
                    if (value[board[from_row - 1][from_col + 1]] > movimiento.value) {
                        movimiento.value = value[board[from_row - 1][from_col + 1]];
                        movimiento.from_row = from_row;
                        movimiento.from_col = from_col;
                        movimiento.to_row = from_row - 1;
                        movimiento.to_col = from_col + 1;
                    }
                }
                if (blacks.includes(board[from_row - 1][from_col - 1])) {
                    if (value[board[from_row - 1][from_col + 1]] > movimiento.value) {
                        movimiento.value = value[board[from_row - 1][from_col - 1]]
                        movimiento.from_row = from_row;
                        movimiento.from_col = from_col;
                        movimiento.to_row = from_row - 1;
                        movimiento.to_col = from_col - 1;
                    }
                }
                if (from_row - 1 === 8) {
                    movimiento.value = 50;
                    movimiento.from_row = from_row;
                    movimiento.from_col = from_col;
                    movimiento.to_row = from_row - 1;
                    movimiento.to_col = from_col;
                }

                movimiento.value = valueMovimiento.P;
                movimiento.from_row = from_row;
                movimiento.from_col = from_col;
                movimiento.to_row = from_row - 1;
                movimiento.to_col = from_col;

            }
            return movimiento;
        }

    }
}


const whiteQueenMovement = (board) => {
    for (let row = 15; row > 0; row--) {
        for (let col = 0; col < 16; col++) {
            if (board[row][col] === 'Q') {
                queenAtack(board, row, col);
            }
        }
    }
}

const queenAtack = (board, from_row, from_col) => {

    // MOVIMIENTO VERTICAL HACIA LA BASE NEGRA
    for (let row = from_row - 1; row > 0; row--) {
        if (blacks.includes(board[row][from_col])) {
            if (board[row - 1][from_col + 1 || from_col - 1] === 'p') {
                continue;
            }

            if (value[board[row][from_col]] > movimiento.value) {
                movimiento.value = value[board[row][from_col]]
                movimiento.from_row = from_row;
                movimiento.from_col = from_col;
                movimiento.to_row = row;
                movimiento.to_col = from_col;
                // continue;
            }

        } else if (whites.includes(board[row][from_col])) {
            break;
        }
        break
    }
    // MOVIMIENTO VERTICAL HACIA LA BASE BLANCA
    for (let row = from_row + 1; row < 16; row++) {
        if (blacks.includes(board[row][from_col])) {
            if (board[row - 1][from_col + 1 || from_col - 1] === 'p') {
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
        } else if (whites.includes(board[row][from_col])) {
            continue;
        }
    }
    // MOVIMIENTO HORIZONTAL HACIA LA IZQUIERDA
    for (let col = from_col - 1; col > 0; col--) {
        if (blacks.includes(board[from_row][col])) {
            if (board[from_row - 1][col + 1 || col - 1] === 'p') {
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
        } else if (whites.includes(board[from_row][col])) {
            break;
        }
        break;
    }
    // MOVIMIENTO HORIZONTAL HACIA LA DERECHA
    for (let col = from_col + 1; col < 16; col++) {
        if (blacks.includes(board[from_row][col])) {
            if (board[from_row - 1][col + 1 || col - 1] === 'p') {
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
        } else if (whites.includes(board[from_row][col])) {
            break;
        }
    }
    // MOVIMIENTO DIAGONAL 1 CASILLERO ADELANTE A LA IZQUIERDA
    if ('kqr'.includes(board[from_row - 1][from_col - 1])) {

        if (value[board[from_row - 1][from_col - 1]] > movimiento.value) {
            movimiento.value = value[board[from_row - 1][from_col - 1]]
            movimiento.from_row = from_row;
            movimiento.from_col = from_col;
            movimiento.to_row = from_row - 1;
            movimiento.to_col = from_col - 1;
        }

    }

    let diagonalDerecha = from_row > from_col ? 15 - from_col : 15 - from_row
    // MOVIMIENTO DIAGONAL 1 CASILLERO ADELANTE A LA DERECHA
    for (let x = 1; x < diagonalDerecha; x++) {


    }
    if ('kqr'.includes(board[from_row - 1][from_col + 1])) {

        if (value[board[from_row - 1][from_col + 1]] > movimiento.value) {
            movimiento.value = value[board[from_row - 1][from_col + 1]]
            movimiento.from_row = from_row;
            movimiento.from_col = from_col;
            movimiento.to_row = from_row - 1;
            movimiento.to_col = from_col + 1;
        }

    }
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





// var pieces_strategy = {
//     'p': moveBlackPawn,
//     'P': moveWhitePawn,
//     'r': moveRook, //moveRook,
//     'R': moveRook, //moveRook,
//     'k': null,
//     'K': null,
//     'h': null,
//     'H': null,
//     'b': null,
//     'B': null,
//     'q': moveQueen, //moveQueen,
//     'Q': moveQueen, //moveQueen
// };

// function moveBlackPawn(from_row, from_col) {
//     return { to_row: from_row + 1, to_col: from_col }
//   }
//   function moveWhitePawn(from_row, from_col) {
//     return { to_row: from_row - 1, to_col: from_col }
//   }


module.exports = {
    whiteMovements,
    matriz
}