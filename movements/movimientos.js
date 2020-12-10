const bishop = require("../pieces/bishop");
const blackPawn = require("../pieces/blackPawn");
const horse = require("../pieces/horse");
const king = require("../pieces/king");
const queen = require("../pieces/queen");
const rook = require("../pieces/rook");
const whitePawn = require("../pieces/whitePawn");
const { moveBlackPiece, moveWhitePiece } = require('../piecesValues/moveValue')
const { eatWhitePiece, eatBlackPiece } = require('../piecesValues/eatValue');
const { newMatriz } = require("./newMatriz");

const DEEP = 2;

const whiteMovements = async (board, deep = DEEP) => {

    if (deep === 0) {
        return 0;
    }
    // return new Promise((resolve) => {

    let sameColor = 'KQRBHP';
    let movementsArray = [];

    let movements = await whitePiecesMovements(board, sameColor, movementsArray, deep);

    movements.forEach(move => {
        move.value -= blackMovements(newMatriz(board, move.from_row, move.from_col, move.to_row, move.to_col), deep - 1).value
    });

    let whiteBestMovement = movements.reduce((acum, current) => {

        if (acum.value >= current.value) {
            return acum
        } else {
            return current
        }
    })

    return whiteBestMovement;
}


const whitePiecesMovements = async (board, sameColor, movementsArray, deep) => {


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









const blackMovements = async (board, deep = DEEP) => {

    if (deep === 0) {
        return 0;
    }

    let sameColor = 'kqrbhp';
    let movementsArray = [];

    let movements = await blackPiecesMovements(board, sameColor, movementsArray, deep);

    movements.forEach(move => {
        move.value -= whiteMovements(newMatriz(board, move.from_row, move.from_col, move.to_row, move.to_col), deep - 1).value
    });

    let blackBestMovement = movements.reduce((acum, current) => {
        if (acum.value >= current.value) {
            return acum
        } else {
            return current
        }
    })

    return blackBestMovement;
}

const blackPiecesMovements = async (board, sameColor, movementsArray, deep) => {

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
        element.forEach(children => {
            allMovements.push(children)
        });
    });

    return allMovements;
}

const minimax = (board, movimientos, isWhite, deep = DEEP) => {

    let maxValue = { value: -9999 };
    let betterMovement;

    for (let index = 0; index < movimientos.length; index++) {

        let newBoard = newMatriz(board, movimientos[index].from_row, movimientos[index].from_col, movimientos[index].to_row, movimientos[index].to_col);

        let movement;
        if (isWhite) {
            // movement = 
        }

    }

    if (deep === 0) {
        return betterMovement;
    }

}

module.exports = {
    whiteMovements,
    blackMovements
}