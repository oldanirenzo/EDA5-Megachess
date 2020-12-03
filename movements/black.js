const king = require("../pieces/king");
const queen = require("../pieces/queen");
const rook = require("../pieces/rook");
const bishop = require("../pieces/bishop");
const horse = require("../pieces/horse");
const blackPawn = require("../pieces/blackPawn");
const matriz = require("./matriz");
const { moveBlackPiece } = require('../piecesValues/moveValue')
const { eatWhitePiece } = require('../piecesValues/eatValue')


const blackMovements = (data) => {

    return new Promise((resolve, reject) => {

        let board_id = data.data.board_id;
        let turn_token = data.data.turn_token;
        let board = matriz(data)
        let sameColor = 'kqrbhp';
        let movementsArray = [];

        blackPiecesMovements(board, sameColor, movementsArray)
            .then((movements) => {
                
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

const blackPiecesMovements = async (board, sameColor, movementsArray) => {

    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board.length; col++) {
            switch (board[row][col]) {

                case 'p':
                    movementsArray.push(await blackPawn(board, row, col, eatWhitePiece));
                    break;
                case 'h':
                    movementsArray.push(await horse(board, row, col, sameColor, eatWhitePiece, moveBlackPiece));
                    break;
                case 'b':
                    movementsArray.push(await bishop(board, row, col, sameColor, eatWhitePiece, moveBlackPiece));
                    break;
                case 'r':
                    movementsArray.push(await rook(board, row, col, sameColor, eatWhitePiece, moveBlackPiece));
                    break;
                case 'q':
                    movementsArray.push(await queen(board, row, col, sameColor, eatWhitePiece, moveBlackPiece));
                    break;
                case 'k':
                    movementsArray.push(await king(board, row, col, sameColor, eatWhitePiece, moveBlackPiece));
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