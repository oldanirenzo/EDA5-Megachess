const { whitePawnPositionValue } = require("../piecesValues/positionValue");

const whitePawn = async (board, from_row, from_col, eatPiece) => {

    let pawnMovements = [];

    if (board[from_row - 1][from_col] === ' ') {
        if (board[from_row - 2][from_col] === ' ') {
            if (from_row === 12 || from_row === 13) {
                pawnMovements.push({
                    value: 50 * whitePawnPositionValue[from_row - 2][from_col], // Asigno un valor a cada casilla del tablero, para mejorar el posicionamiento.
                    from_row: from_row,
                    from_col: from_col,
                    to_row: from_row - 2,
                    to_col: from_col,
                })
            }
        }
        // Encontro un enemigo, guarda el movimiento hacia el.
        if ('kqrbh'.includes(board[from_row - 1][from_col + 1])) {
            pawnMovements.push({
                value: eatPiece[board[from_row - 1][from_col + 1]] * whitePawnPositionValue[from_row - 1][from_col + 1],
                from_row: from_row,
                from_col: from_col,
                to_row: from_row - 1,
                to_col: from_col + 1,

            })
        }
        // Encontro un enemigo, guarda el movimiento hacia el.
        if ('kqrbh'.includes(board[from_row - 1][from_col - 1])) {
            pawnMovements.push({
                value: eatPiece[board[from_row - 1][from_col - 1]] * whitePawnPositionValue[from_row - 1][from_col - 1],
                from_row: from_row,
                from_col: from_col,
                to_row: from_row - 1,
                to_col: from_col - 1,

            })
        }
        // Si esta por coronar, le doy un mayor valor a ese movimiento.
        if (from_row - 1 === 8) {
            pawnMovements.push({
                value: 500 * whitePawnPositionValue[from_row - 1][from_col],
                from_row: from_row,
                from_col: from_col,
                to_row: from_row - 1,
                to_col: from_col,

            })
        }
        pawnMovements.push({
            value: 50 * whitePawnPositionValue[from_row - 1][from_col],
            from_row: from_row,
            from_col: from_col,
            to_row: from_row - 1,
            to_col: from_col,

        })
    }
    return pawnMovements;
}

module.exports = whitePawn;