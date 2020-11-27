


const randomMovements = (board) => {
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board.length; col++) {
            switch (board[row][col]) {

                case ('p' || 'P' || 'r' || 'R' || 'q' || 'Q' || 'k' || 'K'):
                    if (row + 1 !== undefined) {
                        return ({
                            from_row: row,
                            from_col: col,
                            to_row: row + 1,
                            to_col: col,
                        })
                    } else {
                        return ({
                            from_row: row,
                            from_col: col,
                            to_row: row - 1,
                            to_col: col - 1,
                        })
                    }
                case ('h' || 'H'):
                    if (row + 2 !== undefined && col + 1 !== undefined) {
                        return ({
                            from_row: row,
                            from_col: col,
                            to_row: row + 2,
                            to_col: col + 1,
                        })
                    } else {
                        return ({
                            from_row: row,
                            from_col: col,
                            to_row: row + 1,
                            to_col: col + 2,
                        })
                    }

                case ('b' || 'B'):
                    if (row + 1 !== undefined && col + 1 !== undefined) {
                        return ({
                            from_row: row,
                            from_col: col,
                            to_row: row + 1,
                            to_col: col + 1,
                        })
                    } else {
                        return ({
                            from_row: row,
                            from_col: col,
                            to_row: row - 1,
                            to_col: col - 1,
                        })
                    }
                default:
                    continue;
            }
        }
    }
}

module.exports = { randomMovements }