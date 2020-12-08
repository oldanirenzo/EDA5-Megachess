const { whiteRookPositionValue, blackRookPositionValue } = require("../piecesValues/positionValue");

const rook = async (board, from_row, from_col, sameColor, eatPiece, movePiece) => {

    let rookMovements = [];

    // Asigno un valor a cada casilla del tablero, para mejorar el posicionamiento de las piezas.
    let positionValue;
    sameColor.includes('R') ? positionValue = whiteRookPositionValue : positionValue = blackRookPositionValue;

    // MOVIMIENTO VERTICAL HACIA ARRIBA
    verticalArriba: for (let row = from_row - 1; row > -1; row--) {

        // Encontro una pieza aliada, asi que pasa al siguiente loop.
        if (sameColor.includes(board[row][from_col])) {
            break verticalArriba;
        }

        // Guarda en el array cualquier movimiento hacia un espacio vacio hacia arriba.
        if (' '.includes(board[row][from_col])) {
            rookMovements.push({
                value: movePiece[board[from_row][from_col]] * positionValue[row][from_col],
                from_row: from_row,
                from_col: from_col,
                to_row: row,
                to_col: from_col,
            })
        } else {
            // Encontro un enemigo, guarda el movimiento hacia el.
            rookMovements.push({
                value: eatPiece[board[row][from_col]] + positionValue[row][from_col],
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
                value: movePiece[board[from_row][from_col]] * positionValue[row][from_col],
                from_row: from_row,
                from_col: from_col,
                to_row: row,
                to_col: from_col,
            })
        } else {
            rookMovements.push({
                value: eatPiece[board[row][from_col]] + positionValue[row][from_col],
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
                value: movePiece[board[from_row][from_col]] * positionValue[from_row][col],
                from_row: from_row,
                from_col: from_col,
                to_row: from_row,
                to_col: col,
            })
        } else {
            rookMovements.push({
                value: eatPiece[board[from_row][col]] + positionValue[from_row][col],
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
                value: movePiece[board[from_row][from_col]] * positionValue[from_row][col],
                from_row: from_row,
                from_col: from_col,
                to_row: from_row,
                to_col: col,
            })
        } else {
            rookMovements.push({
                value: eatPiece[board[from_row][col]] + positionValue[from_row][col],
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