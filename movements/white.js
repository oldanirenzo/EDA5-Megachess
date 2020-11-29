const king = require("../pieces/king");
const queen = require("../pieces/queen");
const rook = require("../pieces/rook");
const bishop = require("../pieces/bishop");
const horse = require("../pieces/horse");
const whitePawn = require("../pieces/whitePawn");
const matriz = require("./matriz");
const { randomMovements } = require("./movementsWithoutEating");
const { moveWhitePiece } = require('../piecesValues/moveValue')
const { eatBlackPiece } = require('../piecesValues/eatValue')

const whiteMovements = (data) => {

    return new Promise((resolve, reject) => {

        let board_id = data.data.board_id;
        let turn_token = data.data.turn_token;
        let board = matriz(data);
        // console.table(board);
        let sameColor = 'KQRBHP';
        let enemyColor = 'kqrbhp';
        let movementsArray = [];
        // console.table(board);

        whitePiecesMovements(board, sameColor, enemyColor, movementsArray)
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

                let whiteBestMovement = movements.reduce((acum, current) => {

                    if (acum.value >= current.value) {
                        return acum
                    } else {
                        return current
                    }
                })
                resolve({
                    action: 'move',
                    data: {
                        board_id,
                        turn_token,
                        from_row: whiteBestMovement.from_row,
                        from_col: whiteBestMovement.from_col,
                        to_row: whiteBestMovement.to_row,
                        to_col: whiteBestMovement.to_col,
                    }
                })
            })
            .catch(err => reject(err))
            .finally(() => {
                movementsArray = []
                whiteBestMovement = []
            })
    })
}


const whitePiecesMovements = async (board, sameColor, enemyColor, movementsArray) => {


    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board.length; col++) {
            switch (board[row][col]) {
                case 'P':
                    movementsArray.push(await whitePawn(board, row, col, enemyColor, eatBlackPiece));
                    break;

                case 'H':
                    movementsArray.push(await horse(board, row, col, sameColor, enemyColor, eatBlackPiece, moveWhitePiece));
                    break;

                case 'B':
                    movementsArray.push(await bishop(board, row, col, sameColor, enemyColor, eatBlackPiece, moveWhitePiece));
                    break;

                case 'R':
                    movementsArray.push(await rook(board, row, col, sameColor, enemyColor, eatBlackPiece, moveWhitePiece));
                    break;

                case 'Q':
                    movementsArray.push(await queen(board, row, col, sameColor, enemyColor, eatBlackPiece, moveWhitePiece));
                    break;

                case 'K':
                    movementsArray.push(await king(board, row, col, sameColor, enemyColor, eatBlackPiece, moveWhitePiece));
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
    whiteMovements
}