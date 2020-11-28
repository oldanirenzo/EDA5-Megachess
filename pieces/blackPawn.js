const blackPawn = async (board, from_row, from_col, enemyColor, eatPiece) => {
    let pawnMovements = []

    if (board[from_row + 1][from_col] === ' ') {
        if (board[from_row + 2][from_col] === ' ') {
            //Movimiento doble si no se ha movido
            if (from_row === 2 || from_row === 3) {
                pawnMovements.push({
                    value: 100 + from_row,
                    from_row: from_row,
                    from_col: from_col,
                    to_row: from_row + 2,
                    to_col: from_col,
                    valuePiece: valuePiece[board[from_row][from_col]]
                })
            }

        }
        if (enemyColor.includes(board[from_row + 1][from_col + 1])) {
            pawnMovements.push({
                value: value[board[from_row + 1][from_col + 1]],
                from_row: from_row,
                from_col: from_col,
                to_row: from_row + 1,
                to_col: from_col + 1,
                valuePiece: valuePiece[board[from_row][from_col]]
            })
        }
        if (enemyColor.includes(board[from_row + 1][from_col - 1])) {
            pawnMovements.push({
                value: value[board[from_row + 1][from_col - 1]],
                from_row: from_row,
                from_col: from_col,
                to_row: from_row + 1,
                to_col: from_col - 1,
                valuePiece: valuePiece[board[from_row][from_col]]
            })
        }
        if (from_row + 1 === 7) {
            pawnMovements.push({
                value: 500,
                from_row: from_row,
                from_col: from_col,
                to_row: from_row + 1,
                to_col: from_col,
                valuePiece: valuePiece[board[from_row][from_col]]
            })
        }
        pawnMovements.push({
            value: 100 + from_row,
            from_row: from_row,
            from_col: from_col,
            to_row: from_row + 1,
            to_col: from_col,
            valuePiece: valuePiece[board[from_row][from_col]]
        })
    }
    return pawnMovements;
}
module.exports = blackPawn;