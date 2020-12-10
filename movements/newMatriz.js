
const newMatriz = (board, from_row, from_col, to_row, to_col) => {
    let newBoard = [];
    for (let index = 0; index < board.length; index++) {
        newBoard.push(board[index])
    }
    newBoard[to_row][to_col] = newBoard[from_row][from_col]
    newBoard[from_row][from_col] = ' '

    return newBoard;
}

module.exports = {
    newMatriz
}