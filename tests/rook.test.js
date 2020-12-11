const rook = require('../pieces/rook')
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
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', 'R', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    ['R', ' ', 'H', 'H', 'B', 'B', 'Q', 'Q', 'K', 'K', 'B', 'B', 'H', 'H', 'R', 'R'],
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
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', 'p', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'p', 'R', 'r', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', 'h', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    ['R', ' ', 'H', 'H', 'B', 'B', 'Q', 'Q', 'K', 'K', 'B', 'B', 'H', 'H', 'R', 'R'],
    ['R', 'R', 'H', 'H', 'B', 'B', 'Q', 'Q', 'K', 'K', 'B', 'B', 'H', 'H', 'R', 'R'],
]

describe('Rook movements', () => {
    test('Debe devolver el array vacio', async () => {
        const moveRook = await (rook(board1, 14, 0, whitePieces, eatBlackPiece, moveWhitePiece))
        expect(moveRook).toEqual([])
    })

    test('Debe poseer un movimiento para comer un peon', async () => {
        const moveRook = await (rook(board2, 8, 7, whitePieces, eatBlackPiece, moveWhitePiece))
        expect(moveRook).toEqual(expect.arrayContaining([{
            value: 120,
            from_row: 8,
            from_col: 7,
            to_row: 3,
            to_col: 7
        }]))
    })

    test('Debe poseer un movimiento hacia una celda vacia arriba', async () => {
        const moveRook = await (rook(board2, 8, 7, whitePieces, eatBlackPiece, moveWhitePiece))
        expect(moveRook).toEqual(expect.arrayContaining([{
            value: 0,
            from_row: 8,
            from_col: 7,
            to_row: 7,
            to_col: 7
        }]))
    })

    test('Debe poseer un movimiento hacia una celda vacia a la izquierda', async () => {
        const moveRook = await (rook(board2, 8, 7, whitePieces, eatBlackPiece, moveWhitePiece))
        expect(moveRook).toEqual(expect.arrayContaining([{
            value: 0,
            from_row: 8,
            from_col: 7,
            to_row: 8,
            to_col: 6
        }]))
    })

    test('Debe poseer un movimiento hacia una celda vacia abajo', async () => {
        const moveRook = await (rook(board2, 8, 7, whitePieces, eatBlackPiece, moveWhitePiece))
        expect(moveRook).toEqual(expect.arrayContaining([{
            value: 0,
            from_row: 8,
            from_col: 7,
            to_row: 9,
            to_col: 7
        }]))
    })

    test('Debe poseer un movimiento hacia una celda vacia a la derecha', async () => {
        const moveRook = await (rook(board2, 8, 7, whitePieces, eatBlackPiece, moveWhitePiece))
        expect(moveRook).toEqual(expect.arrayContaining([{
            value: 0,
            from_row: 8,
            from_col: 7,
            to_row: 8,
            to_col: 8
        }]))
    })

    test('No debe poseer un movimiento para comer una pieza blanca', async () => {
        const moveRook = await (rook(board2, 8, 7, whitePieces, eatBlackPiece, moveWhitePiece))
        expect(moveRook).toEqual(expect.not.arrayContaining([{
            value: 100,
            from_row: 8,
            from_col: 7,
            to_row: 12,
            to_col: 7
        }]))
    })

    test('Debe poseer un movimiento para comer hacia arriba', async () => {
        const moveRook = await (rook(board3, 8, 7, whitePieces, eatBlackPiece, moveWhitePiece))
        expect(moveRook).toEqual(expect.arrayContaining([{
            value: 120,
            from_row: 8,
            from_col: 7,
            to_row: 7,
            to_col: 7
        }]))
    })

    test('Debe poseer un movimiento para comer hacia la izquierda', async () => {
        const moveRook = await (rook(board3, 8, 7, whitePieces, eatBlackPiece, moveWhitePiece))
        expect(moveRook).toEqual(expect.arrayContaining([{
            value: 120,
            from_row: 8,
            from_col: 7,
            to_row: 8,
            to_col: 6
        }]))
    })

    test('Debe poseer un movimiento para comer hacia abajo', async () => {
        const moveRook = await (rook(board3, 8, 7, whitePieces, eatBlackPiece, moveWhitePiece))
        expect(moveRook).toEqual(expect.arrayContaining([{
            value: 300,
            from_row: 8,
            from_col: 7,
            to_row: 9,
            to_col: 7
        }]))
    })

    test('Debe poseer un movimiento para comer hacia la derecha', async () => {
        const moveRook = await (rook(board3, 8, 7, whitePieces, eatBlackPiece, moveWhitePiece))
        expect(moveRook).toEqual(expect.arrayContaining([{
            value: 600,
            from_row: 8,
            from_col: 7,
            to_row: 8,
            to_col: 8
        }]))
    })

})
