const { whiteKingPositionValue, blackKingPositionValue } = require("../piecesValues/positionValue");

const king = async (board, from_row, from_col, sameColor, eatPiece, movePiece) => {

    let kingMovements = [];
    let positionValue;
    sameColor.includes('K') ? positionValue = whiteKingPositionValue : positionValue = blackKingPositionValue;

    // MOVIMIENTO DEL REY
    for (let row = -1; row < 2; row++) {
        for (let col = -1; col < 2; col++) {
            if ((from_row + row || from_col + col) > 15 || (from_row + row || from_col + col) < 0) {
                continue;
            }

            if (sameColor.includes(board[from_row + row][from_col + col])) {
                continue;
            }

            if (' '.includes(board[from_row + row][from_col + col])) {
                kingMovements.push({
                    value: movePiece[board[from_row][from_col]] * positionValue[from_row + row][from_col + col],
                    from_row: from_row,
                    from_col: from_col,
                    to_row: from_row + row,
                    to_col: from_col + col,
                })
            } else {
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