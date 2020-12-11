const { whiteKingPositionValue, blackKingPositionValue } = require("../piecesValues/positionValue");

const king = async (board, from_row, from_col, sameColor, eatPiece, movePiece) => {

    let kingMovements = [];

    // Asigno un valor a cada casilla del tablero, para mejorar el posicionamiento de las piezas.
    let positionValue;
    sameColor.includes('K') ? positionValue = whiteKingPositionValue : positionValue = blackKingPositionValue;

    // MOVIMIENTO DEL REY
    for (let row = -1; row < 2; row++) {
        for (let col = -1; col < 2; col++) {

            // Si se sale del tablero con ese movimiento, entra al proximo loop.
            if (from_row + row > 15 || from_col + col > 15 || from_row + row < 0 || from_col + col < 0) {
                continue;
            }
            // Encontro una pieza aliada, asi que pasa al siguiente loop.
            if (sameColor.includes(board[from_row + row][from_col + col])) {
                continue;
            }

            // Guarda en el array cualquier movimiento hacia un espacio vacio.
            if (' '.includes(board[from_row + row][from_col + col])) {
                kingMovements.push({
                    value: movePiece[board[from_row][from_col]] * positionValue[from_row + row][from_col + col],
                    from_row: from_row,
                    from_col: from_col,
                    to_row: from_row + row,
                    to_col: from_col + col,
                })
            } else {
                // Encontro un enemigo, guarda el movimiento hacia el.
                kingMovements.push({
                    value: eatPiece[board[from_row + row][from_col + col]] + positionValue[from_row + row][from_col + col],
                    from_row: from_row,
                    from_col: from_col,
                    to_row: from_row + row,
                    to_col: from_col + col,
                })
            }
        }
    }
    return kingMovements;
}
module.exports = king;