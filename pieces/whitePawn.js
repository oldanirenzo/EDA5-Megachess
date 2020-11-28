const whitePawn = async (board, from_row, from_col, enemyColor, eatPiece) => {

    let pawnMovements = [];

    if (board[from_row - 1][from_col] === ' ') {
        if (board[from_row - 2][from_col] === ' ') {
            if (from_row === 12 || from_row === 13) {
                pawnMovements.push({
                    value: 50 - from_row,
                    from_row: from_row,
                    from_col: from_col,
                    to_row: from_row - 2,
                    to_col: from_col,
                })
            }
        }
        if (enemyColor.includes(board[from_row - 1][from_col + 1])) {
            pawnMovements.push({
                value: eatPiece[board[from_row - 1][from_col + 1]],
                from_row: from_row,
                from_col: from_col,
                to_row: from_row - 1,
                to_col: from_col + 1,

            })
        }
        if (enemyColor.includes(board[from_row - 1][from_col - 1])) {
            pawnMovements.push({
                value: eatPiece[board[from_row - 1][from_col - 1]],
                from_row: from_row,
                from_col: from_col,
                to_row: from_row - 1,
                to_col: from_col - 1,

            })
        }
        if (from_row - 1 === 8) {
            pawnMovements.push({
                value: 200,
                from_row: from_row,
                from_col: from_col,
                to_row: from_row - 1,
                to_col: from_col,

            })
        }
        pawnMovements.push({
            value: 50 - from_row,
            from_row: from_row,
            from_col: from_col,
            to_row: from_row - 1,
            to_col: from_col,

        })
    }
    return pawnMovements;
}
module.exports = whitePawn;