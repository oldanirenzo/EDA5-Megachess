const king = require('../pieces/king')
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
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', 'K', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    ['R', 'R', 'H', 'H', 'B', 'B', 'Q', 'Q', ' ', 'K', 'B', 'B', 'H', 'H', 'R', 'R'],
    ['R', 'R', 'H', 'H', 'B', 'B', 'Q', 'Q', 'K', 'K', 'B', 'B', 'H', 'H', 'R', 'R'],
]
let board3 = [
    ['r', 'r', 'h', 'h', 'b', 'b', 'q', 'q', 'k', 'k', 'b', 'b', 'h', 'h', 'r', 'r'],
    ['r', 'r', 'h', 'h', 'b', 'b', 'q', 'q', 'k', 'k', 'b', 'b', 'h', ' ', ' ', 'r'],
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
    ['p', 'p', 'p', 'p', 'p', 'p', ' ', ' ', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'p', 'p', 'p', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'b', 'K', 'r', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'k', 'h', 'q', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    ['R', 'R', 'H', 'H', 'B', 'B', 'Q', 'Q', ' ', 'K', 'B', 'B', 'H', 'H', 'R', 'R'],
    ['R', 'R', 'H', 'H', 'B', 'B', 'Q', 'Q', 'K', 'K', 'B', 'B', 'H', 'H', 'R', 'R'],
]

describe('King movements', () => {

    test('Debe devolver un array vacio.', async () => {
        const kingMovement = await (king(board1, 14, 8, whitePieces, eatBlackPiece, moveWhitePiece));
        expect(kingMovement).toEqual([])
    });
    test('Debe poseer un movimiento a una celda libre arriba.', async () => {
        const kingMovement = await (king(board2, 8, 7, whitePieces, eatBlackPiece, moveWhitePiece));
        expect(kingMovement).toEqual(expect.arrayContaining([{
            value: 50,
            from_row: 8,
            from_col: 7,
            to_row: 7,
            to_col: 7,
        }]))
    });
    test('Debe poseer un movimiento a una celda libre arriba a la izquierda.', async () => {
        const kingMovement = await king(board2, 8, 7, whitePieces, eatBlackPiece, moveWhitePiece);
        expect(kingMovement).toEqual(expect.arrayContaining([{
            value: 50,
            from_row: 8,
            from_col: 7,
            to_row: 7,
            to_col: 6
        }]))
    });
    test('Debe poseer un movimiento a una celda libre a la izquierda.', async () => {
        const kingMovement = await king(board2, 8, 7, whitePieces, eatBlackPiece, moveWhitePiece);
        expect(kingMovement).toEqual(expect.arrayContaining([{
            value: 50,
            from_row: 8,
            from_col: 7,
            to_row: 8,
            to_col: 6
        }]))
    });
    test('Debe poseer un movimiento a una celda libre abajo a la izquierda.', async () => {
        const kingMovement = await king(board2, 8, 7, whitePieces, eatBlackPiece, moveWhitePiece);
        expect(kingMovement).toEqual(expect.arrayContaining([{
            value: 50,
            from_row: 8,
            from_col: 7,
            to_row: 9,
            to_col: 6
        }]))
    });
    test('Debe poseer un movimiento a una celda libre abajo.', async () => {
        const kingMovement = await king(board2, 8, 7, whitePieces, eatBlackPiece, moveWhitePiece);
        expect(kingMovement).toEqual(expect.arrayContaining([{
            value: 50,
            from_row: 8,
            from_col: 7,
            to_row: 9,
            to_col: 7
        }]))
    });
    test('Debe poseer un movimiento a una celda libre abajo a la derecha.', async () => {
        const kingMovement = await king(board2, 8, 7, whitePieces, eatBlackPiece, moveWhitePiece);
        expect(kingMovement).toEqual(expect.arrayContaining([{
            value: 50,
            from_row: 8,
            from_col: 7,
            to_row: 9,
            to_col: 8
        }]))
    });
    test('Debe poseer un movimiento a una celda libre a la derecha.', async () => {
        const kingMovement = await king(board2, 8, 7, whitePieces, eatBlackPiece, moveWhitePiece);
        expect(kingMovement).toEqual(expect.arrayContaining([{
            value: 50,
            from_row: 8,
            from_col: 7,
            to_row: 8,
            to_col: 8
        }]))
    });
    test('Debe poseer un movimiento a una celda libre arriba a la derecha.', async () => {
        const kingMovement = await king(board2, 8, 7, whitePieces, eatBlackPiece, moveWhitePiece);
        expect(kingMovement).toEqual(expect.arrayContaining([{
            value: 50,
            from_row: 8,
            from_col: 7,
            to_row: 7,
            to_col: 8
        }]))
    });

    test('Debe poseer un movimiento para comer una celda hacia arriba.', async () => {
        const kingMovement = await king(board3, 8, 7, whitePieces, eatBlackPiece, moveWhitePiece);
        expect(kingMovement).toEqual(expect.arrayContaining([{
            value: 100,
            from_row: 8,
            from_col: 7,
            to_row: 7,
            to_col: 7
        }]))
    });

    test('Debe poseer un movimiento para comer una celda hacia arriba a la izquierda.', async () => {
        const kingMovement = await king(board3, 8, 7, whitePieces, eatBlackPiece, moveWhitePiece);
        expect(kingMovement).toEqual(expect.arrayContaining([{
            value: 100,
            from_row: 8,
            from_col: 7,
            to_row: 7,
            to_col: 6
        }]))
    });

    test('Debe poseer un movimiento para comer una celda hacia la izquierda.', async () => {
        const kingMovement = await king(board3, 8, 7, whitePieces, eatBlackPiece, moveWhitePiece);
        expect(kingMovement).toEqual(expect.arrayContaining([{
            value: 400,
            from_row: 8,
            from_col: 7,
            to_row: 8,
            to_col: 6
        }]))
    });

    test('Debe poseer un movimiento para comer una celda hacia abajo a la izquierda.', async () => {
        const kingMovement = await king(board3, 8, 7, whitePieces, eatBlackPiece, moveWhitePiece);
        expect(kingMovement).toEqual(expect.arrayContaining([{
            value: 1000,
            from_row: 8,
            from_col: 7,
            to_row: 9,
            to_col: 6
        }]))
    });

    test('Debe poseer un movimiento para comer una celda hacia abajo.', async () => {
        const kingMovement = await king(board3, 8, 7, whitePieces, eatBlackPiece, moveWhitePiece);
        expect(kingMovement).toEqual(expect.arrayContaining([{
            value: 300,
            from_row: 8,
            from_col: 7,
            to_row: 9,
            to_col: 7
        }]))
    });

    test('Debe poseer un movimiento para comer una celda hacia abajo a la derecha.', async () => {
        const kingMovement = await king(board3, 8, 7, whitePieces, eatBlackPiece, moveWhitePiece);
        expect(kingMovement).toEqual(expect.arrayContaining([{
            value: 350,
            from_row: 8,
            from_col: 7,
            to_row: 9,
            to_col: 8
        }]))
    });

    test('Debe poseer un movimiento para comer una celda hacia la derecha.', async () => {
        const kingMovement = await king(board3, 8, 7, whitePieces, eatBlackPiece, moveWhitePiece);
        expect(kingMovement).toEqual(expect.arrayContaining([{
            value: 600,
            from_row: 8,
            from_col: 7,
            to_row: 8,
            to_col: 8
        }]))
    });

    test('Debe poseer un movimiento para comer una celda hacia arriba a la derecha.', async () => {
        const kingMovement = await king(board3, 8, 7, whitePieces, eatBlackPiece, moveWhitePiece);
        expect(kingMovement).toEqual(expect.arrayContaining([{
            value: 100,
            from_row: 8,
            from_col: 7,
            to_row: 7,
            to_col: 8
        }]))
    });
});