const king = require("../pieces/king");
const queen = require("../pieces/queen");
const rook = require("../pieces/rook");
const bishop = require("../pieces/bishop");
const horse = require("../pieces/horse");
const blackPawn = require("../Pieces/BlackPawn");
const matriz = require("./matriz");
const { randomMovements } = require("./movementsWithoutEating");
const { moveBlackPiece } = require('../piecesValues/moveValue')
const { eatWhitePiece } = require('../piecesValues/eatValue')


const blackMovements = (data) => {

    return new Promise((resolve, reject) => {

        let board_id = data.data.board_id;
        let turn_token = data.data.turn_token;
        let board = matriz(data)
        // console.table(board);
        let enemyColor = 'KQRBHP';
        let sameColor = 'kqrbhp';
        let movementsArray = [];

        blackPiecesMovements(board, sameColor, enemyColor, movementsArray)
            .then((movements) => {
                if (movements.length === 0) {
                    let movement = randomMovements(board)
                    resolve({
                        action: 'move',
                        data: {
                            board_id,
                            turn_token,
                            from_row: movement.from_row,
                            from_col: movement.from_col,
                            to_row: movement.to_row,
                            to_col: movement.to_col,
                        }
                    })
                }
                // console.log(blackMovementsArray)

                let blackBestMovement = movements.reduce((acum, current) => {
                    if (acum.value >= current.value) {
                        return acum
                    } else {
                        return current
                    }
                })
                // console.log(blackBestMovement)
                resolve({
                    action: 'move',
                    data: {
                        board_id,
                        turn_token,
                        from_row: blackBestMovement.from_row,
                        from_col: blackBestMovement.from_col,
                        to_row: blackBestMovement.to_row,
                        to_col: blackBestMovement.to_col,
                    }
                })
            })
            .catch(err => reject(err))
            .finally(() => {
                movements = []
                blackBestMovement = []
            })
    })
}

const blackPiecesMovements = async (board, sameColor, enemyColor, movementsArray) => {

    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board.length; col++) {
            switch (board[row][col]) {

                case 'p':
                    movementsArray.push(await blackPawn(board, row, col, enemyColor, eatWhitePiece));
                    break;
                case 'h':
                    movementsArray.push(await horse(board, row, col, sameColor, enemyColor, eatWhitePiece, moveBlackPiece));
                    break;
                case 'b':
                    movementsArray.push(await bishop(board, row, col, sameColor, enemyColor, eatWhitePiece, moveBlackPiece));
                    break;
                case 'r':
                    movementsArray.push(await rook(board, row, col, sameColor, enemyColor, eatWhitePiece, moveBlackPiece));
                    break;
                case 'q':
                    movementsArray.push(await queen(board, row, col, sameColor, enemyColor, eatWhitePiece, moveBlackPiece));
                    break;
                case 'k':
                    movementsArray.push(await king(board, row, col, sameColor, enemyColor, eatWhitePiece, moveBlackPiece));
                    break;
                default:
                    break;
            }
        }
    }
    let allMovements = [];

    //Recorro cada array y elemento que posea adentro del mismo, y lo agrego al array 'allMovements'
    movementsArray.forEach(element => {
        element.forEach(elementChildren => {
            allMovements.push(elementChildren)
        });
    });
    // console.log(allMovements)
    return allMovements;
}

module.exports = {
    blackMovements
}