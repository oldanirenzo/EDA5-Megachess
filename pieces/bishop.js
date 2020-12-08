const { whiteBishopPositionValue, blackBishopPositionValue } = require("../piecesValues/positionValue");

const bishop = async (board, from_row, from_col, sameColor, eatPiece, movePiece) => {

    let bishopMovements = [];
    let positionValue;
    sameColor.includes('B') ? positionValue = whiteBishopPositionValue : positionValue = blackBishopPositionValue;

    // MOVIMIENTO DIAGONAL ARRIBA A LA DERECHA
    diagonalArribaDerecha: for (let x = 1; x < 16; x++) {

        if (from_col + x > 15 || from_row - x < 0) {
            break diagonalArribaDerecha;
        };

        if (sameColor.includes(board[from_row - x][from_col + x])) {
            break diagonalArribaDerecha;
        }

        if (' '.includes(board[from_row - x][from_col + x])) {
            bishopMovements.push({
                value: movePiece[board[from_row][from_col]] * positionValue[from_row - x][from_col + x],
                from_row: from_row,
                from_col: from_col,
                to_row: from_row - x,
                to_col: from_col + x,
            })
        } else {
            bishopMovements.push({
                value: eatPiece[board[from_row - x][from_col + x]] + positionValue[from_row - x][from_col + x],
                from_row: from_row,
                from_col: from_col,
                to_row: from_row - x,
                to_col: from_col + x,
            })
            break diagonalArribaDerecha;
        }
    }

    // MOVIMIENTO DIAGONAL ARRIBA A LA IZQUIERDA

    diagonalArribaIzquierda: for (let y = 1; y < 16; y++) {
        if (from_col - y < 0 || from_row - y < 0) {
            break diagonalArribaIzquierda;
        }

        if (sameColor.includes(board[from_row - y][from_col - y])) {
            break diagonalArribaIzquierda;
        }

        if (' '.includes(board[from_row - y][from_col - y])) {
            bishopMovements.push({
                value: movePiece[board[from_row][from_col]] * positionValue[from_row - y][from_col - y],
                from_row: from_row,
                from_col: from_col,
                to_row: from_row - y,
                to_col: from_col - y,
            })
        } else {
            bishopMovements.push({
                value: eatPiece[board[from_row - y][from_col - y]] + positionValue[from_row - y][from_col - y],
                from_row: from_row,
                from_col: from_col,
                to_row: from_row - y,
                to_col: from_col - y,
            })
            break diagonalArribaIzquierda;
        }

    }

    // MOVIMIENTO DIAGONAL ABAJO A LA IZQUIERDA

    diagonalAbajoIzquierda: for (let x = 1; x < 16; x++) {

        if (from_col - x < 0 || from_row + x > 15) {
            break diagonalAbajoIzquierda;
        };

        if (sameColor.includes(board[from_row + x][from_col - x])) {
            break diagonalAbajoIzquierda;
        }

        if (' '.includes(board[from_row + x][from_col - x])) {
            bishopMovements.push({
                value: movePiece[board[from_row][from_col]] * positionValue[from_row + x][from_col - x],
                from_row: from_row,
                from_col: from_col,
                to_row: from_row + x,
                to_col: from_col - x,
            })
        } else {

            bishopMovements.push({
                value: eatPiece[board[from_row + x][from_col - x]] + positionValue[from_row + x][from_col - x],
                from_row: from_row,
                from_col: from_col,
                to_row: from_row + x,
                to_col: from_col - x,
            })
            break diagonalAbajoIzquierda;
        }
    }


    // MOVIMIENTO DIAGONAL ABAJO A LA DERECHA

    diagonalAbajoDerecha: for (let y = 1; y < 16; y++) {

        if (from_col + y > 15 || from_row + y > 15) {
            break diagonalAbajoDerecha;
        }

        if (sameColor.includes(board[from_row + y][from_col + y])) {
            break diagonalAbajoDerecha;
        }

        if (' '.includes(board[from_row + y][from_col + y])) {
            bishopMovements.push({
                value: movePiece[board[from_row][from_col]] * positionValue[from_row + y][from_col + y],
                from_row: from_row,
                from_col: from_col,
                to_row: from_row + y,
                to_col: from_col + y,
            })
        } else {

            bishopMovements.push({
                value: eatPiece[board[from_row + y][from_col + y]] + positionValue[from_row + y][from_col + y],
                from_row: from_row,
                from_col: from_col,
                to_row: from_row + y,
                to_col: from_col + y,
            })
            break diagonalAbajoDerecha;
        }
    }
    return bishopMovements;
}

module.exports = bishop;