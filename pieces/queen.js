const { blackQueenPositionValue, whiteQueenPositionValue } = require("../piecesValues/positionValue");

const queen = async (board, from_row, from_col, sameColor, eatPiece, movePiece) => {
    let queenMovements = []

    // Asigno un valor a cada casilla del tablero, para mejorar el posicionamiento de las piezas.
    let positionValue;
    sameColor.includes('B') ? positionValue = whiteQueenPositionValue : positionValue = blackQueenPositionValue;

    // MOVIMIENTO VERTICAL HACIA ARRIBA
    verticalArriba: for (let row = from_row - 1; row > -1; row--) {

        // Encontro una pieza aliada, asi que pasa al siguiente loop.
        if (sameColor.includes(board[row][from_col])) {
            break verticalArriba;
        }
        // Guarda en el array cualquier movimiento hacia un espacio vacio hacia arriba.
        if (' '.includes(board[row][from_col])) {
            queenMovements.push({
                value: movePiece[board[from_row][from_col]] * positionValue[row][from_col],
                from_row: from_row,
                from_col: from_col,
                to_row: row,
                to_col: from_col,
            })
        } else {
        // Encontro un enemigo, guarda el movimiento hacia el.
            queenMovements.push({
                value: eatPiece[board[row][from_col]] * positionValue[row][from_col],
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
            queenMovements.push({
                value: movePiece[board[from_row][from_col]] * positionValue[row][from_col],
                from_row: from_row,
                from_col: from_col,
                to_row: row,
                to_col: from_col,
            })
        } else {
            queenMovements.push({
                value: eatPiece[board[row][from_col]] * positionValue[row][from_col],
                from_row: from_row,
                from_col: from_col,
                to_row: row,
                to_col: from_col,
            })
            break verticalAbajo;
        }
    }

    // MOVIMIENTO HORIZONTAL HACIA LA IZQUIERDA
    horizontalIzquierda: for (let col = from_col - 1; col > -1; col--) {
        if (sameColor.includes(board[from_row][col])) {
            break horizontalIzquierda;
        }
        if (' '.includes(board[from_row][col])) {
            queenMovements.push({
                value: movePiece[board[from_row][from_col]] * positionValue[from_row][col],
                from_row: from_row,
                from_col: from_col,
                to_row: from_row,
                to_col: col,
            })
        } else {
            queenMovements.push({
                value: eatPiece[board[from_row][col]] * positionValue[from_row][col],
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
            queenMovements.push({
                value: movePiece[board[from_row][from_col]] * positionValue[from_row][col],
                from_row: from_row,
                from_col: from_col,
                to_row: from_row,
                to_col: col,
            })
        } else {
            queenMovements.push({
                value: eatPiece[board[from_row][col]] * positionValue[from_row][col],
                from_row: from_row,
                from_col: from_col,
                to_row: from_row,
                to_col: col,
            })
            break horizontalDerecha;
        }
    }
    // MOVIMIENTO DIAGONAL ARRIBA A LA DERECHA

    diagonalArribaDerecha: for (let x = 1; x < 16; x++) {

        if (from_col + x > 15 || from_row - x < 0) {
            break diagonalArribaDerecha;
        };

        if (sameColor.includes(board[from_row - x][from_col + x])) {
            break diagonalArribaDerecha;
        }

        if (' '.includes(board[from_row - x][from_col + x])) {
            queenMovements.push({
                value: movePiece[board[from_row][from_col]] * positionValue[from_row - x][from_col + x],
                from_row: from_row,
                from_col: from_col,
                to_row: from_row - x,
                to_col: from_col + x,
            })
        } else {
            queenMovements.push({
                value: eatPiece[board[from_row - x][from_col + x]] * positionValue[from_row - x][from_col + x],
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
            queenMovements.push({
                value: movePiece[board[from_row][from_col]] * positionValue[from_row - y][from_col - y],
                from_row: from_row,
                from_col: from_col,
                to_row: from_row - y,
                to_col: from_col - y,
            })
        } else {
            queenMovements.push({
                value: eatPiece[board[from_row - y][from_col - y]] * positionValue[from_row - y][from_col - y],
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
            queenMovements.push({
                value: movePiece[board[from_row][from_col]] * positionValue[from_row + x][from_col - x],
                from_row: from_row,
                from_col: from_col,
                to_row: from_row + x,
                to_col: from_col - x,
            })
        } else {

            queenMovements.push({
                value: eatPiece[board[from_row + x][from_col - x]] * positionValue[from_row + x][from_col - x],
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
            queenMovements.push({
                value: movePiece[board[from_row][from_col]] * positionValue[from_row + y][from_col + y],
                from_row: from_row,
                from_col: from_col,
                to_row: from_row + y,
                to_col: from_col + y,
            })
        } else {
            queenMovements.push({
                value: eatPiece[board[from_row + y][from_col + y]] * positionValue[from_row + y][from_col + y],
                from_row: from_row,
                from_col: from_col,
                to_row: from_row + y,
                to_col: from_col + y,
            })
            break diagonalAbajoDerecha;
        }
    }
    return queenMovements;
}

module.exports = queen;