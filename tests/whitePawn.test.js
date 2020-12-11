const whitePawn = require('../pieces/whitePawn')
const { eatBlackPiece } = require('../piecesValues/eatValue')

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
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', 'P', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', ' ', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    ['R', 'R', 'H', 'H', 'B', 'B', 'Q', 'Q', 'K', 'K', 'B', 'B', 'H', 'H', 'R', 'R'],
    ['R', 'R', 'H', 'H', 'B', 'B', 'Q', 'Q', 'K', 'K', 'B', 'B', 'H', 'H', 'R', 'R'],
]
let board3 = [
    ['r', 'r', 'h', 'h', 'b', 'b', 'q', ' ', 'k', 'k', 'b', 'b', 'h', 'h', 'r', 'r'],
    ['r', 'r', 'h', 'h', 'b', 'b', ' ', 'q', 'k', 'k', 'b', 'b', 'h', 'h', 'r', 'r'],
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', 'q', ' ', 'q', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', 'P', 'P', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['P', 'P', 'P', ' ', ' ', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    ['R', 'R', 'H', 'H', 'B', 'B', 'Q', 'Q', 'K', 'K', 'B', 'B', 'H', 'H', 'R', 'R'],
    ['R', 'R', 'H', 'H', 'B', 'B', 'Q', 'Q', 'K', 'K', 'B', 'B', 'H', 'H', 'R', 'R'],
]

describe('White pawn movement', () => {

    test('Debe devolver un array vacio al pasar un peon de la 2da fila.', async () => {
        const moveWhitePawn = await whitePawn(board1, 13, 0, eatBlackPiece);
        expect(moveWhitePawn).toEqual([])
    });

    test('Debe poseer un movimiento 1 fila hacia adelante.', async () => {
        const moveWhitePawn = await whitePawn(board1, 12, 0, eatBlackPiece);
        expect(moveWhitePawn).toEqual(expect.arrayContaining([{
            value: 110,
            from_row: 12,
            from_col: 0,
            to_row: 11,
            to_col: 0
        }]))
    });

    test('Debe poseer un movimiento 2 filas hacia adelante.', async () => {
        const moveWhitePawn = await whitePawn(board1, 12, 0, eatBlackPiece);
        expect(moveWhitePawn).toEqual(expect.arrayContaining([{
            value: 130,
            from_row: 12,
            from_col: 0,
            to_row: 10,
            to_col: 0
        }]))
    });

    test('No debe poseer movimientos hacia algun costado si no hay enemigo.', async () => {
        const moveWhitePawn = await whitePawn(board1, 12, 0, eatBlackPiece);
        expect(moveWhitePawn).toEqual(expect.not.arrayContaining([{
            value: 38,
            from_row: 12,
            from_col: 0,
            to_row: 11,
            to_col: 1
        }]))
    });

    test('Debe poseer un movimiento 1 fila hacia adelante.', async () => {
        const moveWhitePawn = await whitePawn(board2, 9, 7, eatBlackPiece);
        expect(moveWhitePawn).toEqual(expect.arrayContaining([{
            value: 10000,
            from_row: 9,
            from_col: 7,
            to_row: 8,
            to_col: 7
        }]))
    });

    test('No debe poseer un movimiento 2 filas hacia adelante.', async () => {
        const moveWhitePawn = await whitePawn(board2, 9, 7, eatBlackPiece);
        expect(moveWhitePawn).toEqual(expect.not.arrayContaining([{
            value: 200,
            from_row: 9,
            from_col: 7,
            to_row: 7,
            to_col: 7
        }]))
    });

    test('Debe poseer un movimiento 1 fila hacia adelante a la derecha.', async () => {
        const moveWhitePawn = await whitePawn(board3, 10, 3, eatBlackPiece);
        expect(moveWhitePawn).toEqual(expect.arrayContaining([{
            value: 8250,
            from_row: 10,
            from_col: 3,
            to_row: 9,
            to_col: 4
        }]))
    });

    test('Debe poseer un movimiento 1 fila hacia adelante a la izquierda.', async () => {
        const moveWhitePawn = await whitePawn(board3, 10, 3, eatBlackPiece);
        expect(moveWhitePawn).toEqual(expect.arrayContaining([{
            value: 8250,
            from_row: 10,
            from_col: 3,
            to_row: 9,
            to_col: 2
        }]))
    });

    test('No debe poseer un movimiento hacia adelante al estar ocupada la celda.', async () => {
        const moveWhitePawn = await whitePawn(board3, 10, 4, eatBlackPiece);
        expect(moveWhitePawn).toEqual(expect.not.arrayContaining([{
            value: 40,
            from_row: 10,
            from_col: 4,
            to_row: 9,
            to_col: 4
        }]))
    });
});