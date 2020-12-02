const { default: each } = require('jest-each');
const bishop = require('../pieces/bishop')
const { eatBlackPiece, eatWhitePiece } = require('../piecesValues/eatValue')
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
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', 'B', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    ['R', 'R', 'H', 'H', 'B', ' ', 'Q', 'Q', 'K', 'K', 'B', 'B', 'H', 'H', 'R', 'R'],
    ['R', 'R', 'H', 'H', 'B', 'B', 'Q', 'Q', 'K', 'K', 'B', 'B', 'H', 'H', 'R', 'R'],
]




describe('Bishop de las piezas blancas', () => {

    test('Debe devolver array vacio', async () => {
        const moveBishop = await bishop(board1, 14, 4, whitePieces, eatBlackPiece, moveWhitePiece)
        expect(moveBishop).toEqual([])
    })

    test('Debe tener un movimiento para comer un peon arriba a la derecha', async () => {
        const moveBishop = await bishop(board2, 8, 7, whitePieces, eatBlackPiece, moveWhitePiece);
        expect(moveBishop).toEqual(expect.arrayContaining([{
            value: 100,
            from_row: 8,
            from_col: 7,
            to_row: 3,
            to_col: 12
        }]))
    })

    test('Debe tener un movimiento para comer un peon arriba a la izquierda', async () => {
        const moveBishop = await bishop(board2, 8, 7, whitePieces, eatBlackPiece, moveWhitePiece)
        expect(moveBishop).toEqual(expect.arrayContaining([{
            value: 100,
            from_row: 8,
            from_col: 7,
            to_row: 3,
            to_col: 2
        }]))
    })

    test('Debe tener un movimiento hacia una celda vacia arriba a la derecha', async () => {
        const moveBishop = await bishop(board2, 8, 7, whitePieces, eatBlackPiece, moveWhitePiece)
        expect(moveBishop).toEqual(expect.arrayContaining([{
            value: 30,
            from_row: 8,
            from_col: 7,
            to_row: 7,
            to_col: 8
        }]))
    })

    test('Debe tener un movimiento hacia una celda vacia arriba a la izquierda', async () => {
        const moveBishop = await bishop(board2, 8, 7, whitePieces, eatBlackPiece, moveWhitePiece)
        expect(moveBishop).toEqual(expect.arrayContaining([{
            value: 30,
            from_row: 8,
            from_col: 7,
            to_row: 7,
            to_col: 6
        }]))
    })
    test('Debe tener un movimiento hacia una celda vacia abajo a la derecha', async () => {
        const moveBishop = await bishop(board2, 8, 7, whitePieces, eatBlackPiece, moveWhitePiece)
        expect(moveBishop).toEqual(expect.arrayContaining([{
            value: 30,
            from_row: 8,
            from_col: 7,
            to_row: 9,
            to_col: 8
        }]))
    })
    test('Debe tener un movimiento hacia una celda vacia abajo a la izquierda', async () => {
        const moveBishop = await bishop(board2, 8, 7, whitePieces, eatBlackPiece, moveWhitePiece)
        expect(moveBishop).toEqual(expect.arrayContaining([{
            value: 30,
            from_row: 8,
            from_col: 7,
            to_row: 9,
            to_col: 6
        }]))
    })


});
