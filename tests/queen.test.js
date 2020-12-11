const queen = require('../pieces/queen')
const { eatBlackPiece } = require('../piecesValues/eatValue')
const { moveWhitePiece } = require('../piecesValues/moveValue')

let whitePieces = 'KQRBHP';

let board1 = [
    ['r', 'r', 'h', 'h', 'b', 'b', 'q', 'q', 'k', 'k', 'b', 'b', 'h', 'h', 'r', 'r'],
    ['r', 'r', 'h', 'h', 'b', 'b', 'q', 'q', 'k', 'k', 'b', 'b', 'h', 'h', 'r', 'r'],
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    ['R', 'R', 'H', 'H', 'B', 'B', 'Q', 'Q', 'K', 'K', 'B', 'B', 'H', 'H', 'R', 'R'],
    ['R', 'R', 'H', 'H', 'B', 'B', 'Q', 'Q', 'K', 'K', 'B', 'B', 'H', 'H', 'R', 'R'],
]
let board2 = [
    ['r', 'r', 'h', 'h', 'b', 'b', 'q', 'q', 'k', 'k', 'b', 'b', 'h', 'h', 'r', 'r'],
    ['r', 'r', 'h', 'h', 'b', 'b', 'q', 'q', 'k', 'k', 'b', 'b', 'h', 'h', 'r', 'r'],
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', 'Q', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    ['R', 'R', 'H', 'H', 'B', 'B', 'Q', ' ', 'K', 'K', 'B', 'B', 'H', 'H', 'R', 'R'],
    ['R', 'R', 'H', 'H', 'B', 'B', 'Q', 'Q', 'K', 'K', 'B', 'B', 'H', 'H', 'R', 'R'],
]
let board3 = [
    ['r', 'r', 'h', 'h', 'b', ' ', 'q', 'q', 'k', 'k', 'b', 'b', 'h', 'h', 'r', 'r'],
    ['r', 'r', 'h', 'h', 'b', 'b', ' ', 'q', ' ', 'k', 'b', 'b', 'h', ' ', ' ', 'r'],
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', ' ', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
    ['p', 'p', 'p', 'p', 'p', 'p', ' ', ' ', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'p', 'p', 'p', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'k', 'Q', 'q', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'h', 'b', 'r', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    ['R', 'R', 'H', 'H', 'B', 'B', 'Q', ' ', 'K', 'K', 'B', 'B', 'H', 'H', 'R', 'R'],
    ['R', 'R', 'H', 'H', 'B', 'B', 'Q', 'Q', 'K', 'K', 'B', 'B', 'H', 'H', 'R', 'R'],
]

describe('Queen movements', () => {
    test('Debe devolver un array vacio.', async () => {
        const queenMovement = await queen(board1, 14, 7, whitePieces, eatBlackPiece, moveWhitePiece);
        expect(queenMovement).toEqual([])
    });

    // MOVIMIENTOS
    
    test('Debe poseer al menos un movimiento hacia alguna celda vacia hacia arriba.', async () => {
        const queenMovement = await queen(board2, 8, 7, whitePieces, eatBlackPiece, moveWhitePiece);
        expect(queenMovement).toEqual(expect.arrayContaining([{
            value: 5,
            from_row: 8,
            from_col: 7,
            to_row: 6,
            to_col: 7
        }]))
    });

    test('Debe poseer al menos un movimiento hacia alguna celda vacia hacia arriba a la izquierda.', async () => {
        const queenMovement = await queen(board2, 8, 7, whitePieces, eatBlackPiece, moveWhitePiece);
        expect(queenMovement).toEqual(expect.arrayContaining([{
            value: 5,
            from_row: 8,
            from_col: 7,
            to_row: 6,
            to_col: 5
        }]))
    });
    test('Debe poseer al menos un movimiento hacia alguna celda vacia hacia la izquierda.', async () => {
        const queenMovement = await queen(board2, 8, 7, whitePieces, eatBlackPiece, moveWhitePiece);
        expect(queenMovement).toEqual(expect.arrayContaining([{
            value: 5,
            from_row: 8,
            from_col: 7,
            to_row: 8,
            to_col: 5
        }]))
    });

    test('Debe poseer al menos un movimiento hacia alguna celda vacia hacia abajo a la izquierda.', async () => {
        const queenMovement = await queen(board2, 8, 7, whitePieces, eatBlackPiece, moveWhitePiece);
        expect(queenMovement).toEqual(expect.arrayContaining([{
            value: 2.5,
            from_row: 8,
            from_col: 7,
            to_row: 10,
            to_col: 5
        }]))
    });

    test('Debe poseer al menos un movimiento hacia alguna celda vacia hacia abajo.', async () => {
        const queenMovement = await queen(board2, 8, 7, whitePieces, eatBlackPiece, moveWhitePiece);
        expect(queenMovement).toEqual(expect.arrayContaining([{
            value: 2.5,
            from_row: 8,
            from_col: 7,
            to_row: 10,
            to_col: 7
        }]))
    });

    test('Debe poseer al menos un movimiento hacia alguna celda vacia hacia abajo a la derecha.', async () => {
        const queenMovement = await queen(board2, 8, 7, whitePieces, eatBlackPiece, moveWhitePiece);
        expect(queenMovement).toEqual(expect.arrayContaining([{
            value: 2.5,
            from_row: 8,
            from_col: 7,
            to_row: 10,
            to_col: 9
        }]))
    });

    test('Debe poseer al menos un movimiento hacia alguna celda vacia hacia la derecha.', async () => {
        const queenMovement = await queen(board2, 8, 7, whitePieces, eatBlackPiece, moveWhitePiece);
        expect(queenMovement).toEqual(expect.arrayContaining([{
            value: 5,
            from_row: 8,
            from_col: 7,
            to_row: 8,
            to_col: 9
        }]))
    });

    test('Debe poseer al menos un movimiento hacia alguna celda vacia hacia arriba a la derecha.', async () => {
        const queenMovement = await queen(board2, 8, 7, whitePieces, eatBlackPiece, moveWhitePiece);
        expect(queenMovement).toEqual(expect.arrayContaining([{
            value: 5,
            from_row: 8,
            from_col: 7,
            to_row: 6,
            to_col: 9
        }]))
    });

    // COMER

    test('Debe poseer un movimiento para comer hacia arriba.', async () => {
        const queenMovement = await queen(board3, 8, 7, whitePieces, eatBlackPiece, moveWhitePiece);
        expect(queenMovement).toEqual(expect.arrayContaining([{
            value: 400,
            from_row: 8,
            from_col: 7,
            to_row: 7,
            to_col: 7
        }]))
    });

    test('Debe poseer un movimiento para comer hacia arriba a la izquierda.', async () => {
        const queenMovement = await queen(board3, 8, 7, whitePieces, eatBlackPiece, moveWhitePiece);
        expect(queenMovement).toEqual(expect.arrayContaining([{
            value: 400,
            from_row: 8,
            from_col: 7,
            to_row: 7,
            to_col: 6
        }]))
    });

    test('Debe poseer un movimiento para comer hacia la izquierda.', async () => {
        const queenMovement = await queen(board3, 8, 7, whitePieces, eatBlackPiece, moveWhitePiece);
        expect(queenMovement).toEqual(expect.arrayContaining([{
            value: 1001,
            from_row: 8,
            from_col: 7,
            to_row: 8,
            to_col: 6
        }]))
    });

    test('Debe poseer un movimiento para comer hacia abajo a la izquierda.', async () => {
        const queenMovement = await queen(board3, 8, 7, whitePieces, eatBlackPiece, moveWhitePiece);
        expect(queenMovement).toEqual(expect.arrayContaining([{
            value: 301,
            from_row: 8,
            from_col: 7,
            to_row: 9,
            to_col: 6
        }]))
    });

    test('Debe poseer un movimiento para comer hacia abajo.', async () => {
        const queenMovement = await queen(board3, 8, 7, whitePieces, eatBlackPiece, moveWhitePiece);
        expect(queenMovement).toEqual(expect.arrayContaining([{
            value: 401,
            from_row: 8,
            from_col: 7,
            to_row: 9,
            to_col: 7
        }]))
    });

    test('Debe poseer un movimiento para comer hacia abajo a la derecha.', async () => {
        const queenMovement = await queen(board3, 8, 7, whitePieces, eatBlackPiece, moveWhitePiece);
        expect(queenMovement).toEqual(expect.arrayContaining([{
            value: 601,
            from_row: 8,
            from_col: 7,
            to_row: 9,
            to_col: 8
        }]))
    });

    test('Debe poseer un movimiento para comer hacia la derecha.', async () => {
        const queenMovement = await queen(board3, 8, 7, whitePieces, eatBlackPiece, moveWhitePiece);
        expect(queenMovement).toEqual(expect.arrayContaining([{
            value: 551,
            from_row: 8,
            from_col: 7,
            to_row: 8,
            to_col: 8
        }]))
    });

    test('Debe poseer un movimiento para comer hacia arriba a la derecha.', async () => {
        const queenMovement = await queen(board3, 8, 7, whitePieces, eatBlackPiece, moveWhitePiece);
        expect(queenMovement).toEqual(expect.arrayContaining([{
            value: 400,
            from_row: 8,
            from_col: 7,
            to_row: 7,
            to_col: 8
        }]))
    });

});

