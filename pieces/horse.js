const { whiteHorsePositionValue, blackHorsePositionValue } = require("../piecesValues/positionValue");

const horse = async (board, from_row, from_col, sameColor, eatPiece, movePiece) => {


    let horseMovements = []
    let positionValue;
    sameColor.includes('H') ? positionValue = whiteHorsePositionValue : positionValue = blackHorsePositionValue;

    // 2 HACIA LOS LADOS Y 1 HACIA ARRIBA Y ABAJO
    for (let x = -2; x < 3; x += 4) {
        for (let y = -1; y < 2; y += 2) {
            if (from_row + x < 0 || from_col + y < 0 || from_row + x > 15 || from_col + y > 15) {
                continue;
            }
            if (sameColor.includes(board[from_row + x][from_col + y])) {
                continue;
            }
            if (' '.includes(board[from_row + x][from_col + y])) {
                horseMovements.push({
                    value: (movePiece[board[from_row][from_col]] * positionValue[from_row + x][from_col + y]),
                    from_row: from_row,
                    from_col: from_col,
                    to_row: from_row + x,
                    to_col: from_col + y,
                })
            } else {
                horseMovements.push({
                    value: (eatPiece[board[from_row + x][from_col + y]] + positionValue[from_row + x][from_col + y]),
                    from_row: from_row,
                    from_col: from_col,
                    to_row: from_row + x,
                    to_col: from_col + y,
                })
            }
        }
    }

    // 1 HACIA LOS LADOS Y 2 HACIA ARRIBA Y ABAJO
    for (let x = -1; x < 2; x += 2) {
        for (let y = -2; y < 3; y += 4) {
            if (from_row + x < 0 || from_col + y < 0 || from_row + x > 15 || from_col + y > 15) {
                continue;
            }
            if (sameColor.includes(board[from_row + x][from_col + y])) {
                continue;
            }
            if (' '.includes(board[from_row + x][from_col + y])) {
                horseMovements.push({
                    value: (movePiece[board[from_row][from_col]] * positionValue[from_row + x][from_col + y]),
                    from_row: from_row,
                    from_col: from_col,
                    to_row: from_row + x,
                    to_col: from_col + y,
                })
            } else {
                horseMovements.push({
                    value: (eatPiece[board[from_row + x][from_col + y]] + positionValue[from_row + x][from_col + y]),
                    from_row: from_row,
                    from_col: from_col,
                    to_row: from_row + x,
                    to_col: from_col + y,
                })
            }
        }
    }

    return horseMovements;
}

module.exports = horse;