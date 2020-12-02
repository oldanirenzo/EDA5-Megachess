
const rook = async (board, from_row, from_col, sameColor, eatPiece, movePiece) => {

    let rookMovements = []
    // MOVIMIENTO VERTICAL HACIA ARRIBA
    verticalArriba: for (let row = from_row - 1; row > -1; row--) {

        if (sameColor.includes(board[row][from_col])) {
            break verticalArriba;
        }

        if (' '.includes(board[row][from_col])) {
            rookMovements.push({
                value: movePiece[board[from_row][from_col]],
                from_row: from_row,
                from_col: from_col,
                to_row: row,
                to_col: from_col,
            })
        } else {
            rookMovements.push({
                value: eatPiece[board[row][from_col]],
                from_row: from_row,
                from_col: from_col,
                to_row: row,
                to_col: from_col,
            })
            break verticalArriba;
        }
    }

    // MOVIMIENTO VERTICAL HACIA ABAJO

    verticalAbajo: for (let row = from_row + 1; row < board.length; row++) {

        if (sameColor.includes(board[row][from_col])) {
            break verticalAbajo;
        }

        if (' '.includes(board[row][from_col])) {
            rookMovements.push({
                value: movePiece[board[from_row][from_col]],
                from_row: from_row,
                from_col: from_col,
                to_row: row,
                to_col: from_col,
            })
        } else {
            rookMovements.push({
                value: eatPiece[board[row][from_col]],
                from_row: from_row,
                from_col: from_col,
                to_row: row,
                to_col: from_col,
            })
            break verticalAbajo;
        }
    }
    // MOVIMIENTO HORIZONTAL HACIA LA IZQUIERDA
    horizontalIzquierda: for (let col = from_col - 1; col > 0; col--) {
        if (sameColor.includes(board[from_row][col])) {
            break horizontalIzquierda;
        }

        if (' '.includes(board[from_row][col])) {
            rookMovements.push({
                value: movePiece[board[from_row][from_col]],
                from_row: from_row,
                from_col: from_col,
                to_row: from_row,
                to_col: col,
            })
        } else {
            rookMovements.push({
                value: eatPiece[board[from_row][col]],
                from_row: from_row,
                from_col: from_col,
                to_row: from_row,
                to_col: col,
            })
            break horizontalIzquierda;
        }
    }

    // MOVIMIENTO HORIZONTAL HACIA LA DERECHA

    horizontalDerecha: for (let col = from_col + 1; col < 16; col++) {
        if (sameColor.includes(board[from_row][col])) {
            break horizontalDerecha;
        }

        if (' '.includes(board[from_row][col])) {
            rookMovements.push({
                value: movePiece[board[from_row][from_col]],
                from_row: from_row,
                from_col: from_col,
                to_row: from_row,
                to_col: col,
            })
        } else {
            rookMovements.push({
                value: eatPiece[board[from_row][col]],
                from_row: from_row,
                from_col: from_col,
                to_row: from_row,
                to_col: col,
            })
            break horizontalDerecha;
        }
    }
    return rookMovements;
}

module.exports = rook;