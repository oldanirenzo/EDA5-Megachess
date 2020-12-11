const king = require("../pieces/king");
const queen = require("../pieces/queen");
const rook = require("../pieces/rook");
const bishop = require("../pieces/bishop");
const horse = require("../pieces/horse");
const whitePawn = require("../pieces/whitePawn");
const matriz = require("./matriz");
const { moveWhitePiece } = require('../piecesValues/moveValue')
const { eatBlackPiece } = require('../piecesValues/eatValue')

const whiteMovements = (data) => {

    return new Promise((resolve) => {

        let board_id = data.data.board_id;
        let turn_token = data.data.turn_token;
        let board = matriz(data);
        let sameColor = 'KQRBHP';
        let movementsArray = [];

        whitePiecesMovements(board, sameColor, movementsArray)
            .then((movements) => {

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
    })
}


const whitePiecesMovements = async (board, sameColor, movementsArray) => {


    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board.length; col++) {
            switch (board[row][col]) {
                case 'P':
                    movementsArray.push(await whitePawn(board, row, col, eatBlackPiece));
                    break;

                case 'H':
                    movementsArray.push(await horse(board, row, col, sameColor, eatBlackPiece, moveWhitePiece));
                    break;

                case 'B':
                    movementsArray.push(await bishop(board, row, col, sameColor, eatBlackPiece, moveWhitePiece));
                    break;

                case 'R':
                    movementsArray.push(await rook(board, row, col, sameColor, eatBlackPiece, moveWhitePiece));
                    break;

                case 'Q':
                    movementsArray.push(await queen(board, row, col, sameColor, eatBlackPiece, moveWhitePiece));
                    break;

                case 'K':
                    movementsArray.push(await king(board, row, col, sameColor, eatBlackPiece, moveWhitePiece));
                    break;

                default:
                    break;
            }
        }
    }
    let allMovements = [];

    //Recorro cada array y elemento que posea adentro del mismo, y lo agrego al array 'allMovements'
    movementsArray.forEach(element => {
        element.forEach(children => {
            allMovements.push(children)
        });
    });

    return allMovements;
}

module.exports = {
    whiteMovements
}