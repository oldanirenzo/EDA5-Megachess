const bishop = require('../pieces/bishop')
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
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', 'B', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    ['R', 'R', 'H', 'H', 'B', ' ', 'Q', 'Q', 'K', 'K', 'B', 'B', 'H', 'H', 'R', 'R'],
    ['R', 'R', 'H', 'H', 'B', 'B', 'Q', 'Q', 'K', 'K', 'B', 'B', 'H', 'H', 'R', 'R'],
]
let board3 = [
    ['r', 'r', 'h', 'h', 'b', 'b', 'q', 'q', 'k', 'k', 'b', 'b', 'h', 'h', 'r', 'r'],
    ['r', 'r', 'h', 'h', 'b', 'b', 'q', 'q', 'k', 'k', 'b', 'b', 'h', ' ', ' ', 'r'],
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
    ['p', 'p', 'p', 'p', 'p', 'p', ' ', 'p', ' ', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'p', ' ', 'p', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', 'B', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'h', ' ', 'r', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    ['R', 'R', 'H', 'H', 'B', ' ', 'Q', 'Q', 'K', 'K', 'B', 'B', 'H', 'H', 'R', 'R'],
    ['R', 'R', 'H', 'H', 'B', 'B', 'Q', 'Q', 'K', 'K', 'B', 'B', 'H', 'H', 'R', 'R'],
]



describe('Bishop movements', () => {

    test('Debe devolver un array vacio', async () => {
        const moveBishop = await bishop(board1, 14, 4, whitePieces, eatBlackPiece, moveWhitePiece)
        expect(moveBishop).toEqual([])
    })

    test('No debe poseer un movimiento para comer una pieza blanca hacia abajo a la derecha.', async () => {
        const moveBishop = await bishop(board2, 8, 7, whitePieces, eatBlackPiece, moveWhitePiece)
        expect(moveBishop).toEqual(expect.not.arrayContaining([{
            value: 100,
            from_row: 8,
            from_col: 7,
            to_row: 12,
            to_col: 11
        }]))
    })

    test('No debe poseer un movimiento para comer una pieza blanca hacia abajo a la izquierda.', async () => {
        const moveBishop = await bishop(board2, 8, 7, whitePieces, eatBlackPiece, moveWhitePiece)
        expect(moveBishop).toEqual(expect.not.arrayContaining([{
            value: 100,
            from_row: 8,
            from_col: 7,
            to_row: 12,
            to_col: 3
        }]))
    })

    test('Debe tener al menos un movimiento hacia una celda vacia arriba a la derecha.', async () => {
        const moveBishop = await bishop(board2, 8, 7, whitePieces, eatBlackPiece, moveWhitePiece)
        expect(moveBishop).toEqual(expect.arrayContaining([{
            value: 30,
            from_row: 8,
            from_col: 7,
            to_row: 7,
            to_col: 8
        }]))
    })

    test('Debe tener al menos un movimiento hacia una celda vacia arriba a la izquierda.', async () => {
        const moveBishop = await bishop(board2, 8, 7, whitePieces, eatBlackPiece, moveWhitePiece)
        expect(moveBishop).toEqual(expect.arrayContaining([{
            value: 30,
            from_row: 8,
            from_col: 7,
            to_row: 7,
            to_col: 6
        }]))
    })
    test('Debe tener al menos un movimiento hacia una celda vacia abajo a la derecha.', async () => {
        const moveBishop = await bishop(board2, 8, 7, whitePieces, eatBlackPiece, moveWhitePiece)
        expect(moveBishop).toEqual(expect.arrayContaining([{
            value: 30,
            from_row: 8,
            from_col: 7,
            to_row: 9,
            to_col: 8
        }]))
    })
    test('Debe tener al menos un movimiento hacia una celda vacia abajo a la izquierda.', async () => {
        const moveBishop = await bishop(board2, 8, 7, whitePieces, eatBlackPiece, moveWhitePiece)
        expect(moveBishop).toEqual(expect.arrayContaining([{
            value: 30,
            from_row: 8,
            from_col: 7,
            to_row: 9,
            to_col: 6
        }]))
    })

    test('Debe tener un movimiento para comer hacia arriba a la derecha.', async () => {
        const moveBishop = await bishop(board3, 8, 7, whitePieces, eatBlackPiece, moveWhitePiece);
        expect(moveBishop).toEqual(expect.arrayContaining([{
            value: 100,
            from_row: 8,
            from_col: 7,
            to_row: 7,
            to_col: 8
        }]))
    })

    test('Debe tener un movimiento para comer hacia arriba a la izquierda.', async () => {
        const moveBishop = await bishop(board3, 8, 7, whitePieces, eatBlackPiece, moveWhitePiece)
        expect(moveBishop).toEqual(expect.arrayContaining([{
            value: 100,
            from_row: 8,
            from_col: 7,
            to_row: 7,
            to_col: 6
        }]))
    })
    test('Debe tener el movimiento para comer hacia abajo a la derecha.', async () => {
        const moveBishop = await bishop(board3, 8, 7, whitePieces, eatBlackPiece, moveWhitePiece)
        expect(moveBishop).toEqual(expect.arrayContaining([{
            value: 600,
            from_row: 8,
            from_col: 7,
            to_row: 9,
            to_col: 8
        }]))
    })
    test('Debe tener el movimiento para comer hacia abajo a la izquierda.', async () => {
        const moveBishop = await bishop(board3, 8, 7, whitePieces, eatBlackPiece, moveWhitePiece)
        expect(moveBishop).toEqual(expect.arrayContaining([{
            value: 300,
            from_row: 8,
            from_col: 7,
            to_row: 9,
            to_col: 6
        }]))
    })


});
