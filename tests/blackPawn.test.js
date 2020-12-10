const blackPawn = require('../pieces/blackPawn')
const { eatWhitePiece } = require('../piecesValues/eatValue')

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
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', ' ', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', 'p', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
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

let board3 = [
    ['r', 'r', 'h', 'h', 'b', 'b', 'q', 'q', 'k', 'k', 'b', 'b', 'h', 'h', 'r', 'r'],
    ['r', 'r', 'h', 'h', 'b', 'b', 'q', 'q', 'k', 'k', 'b', 'b', 'h', 'h', 'r', 'r'],
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
    ['p', 'p', 'p', ' ', ' ', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', 'p', 'p', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', 'Q', ' ', 'Q', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    ['R', 'R', 'H', 'H', 'B', 'B', ' ', 'Q', 'K', 'K', 'B', 'B', 'H', 'H', 'R', 'R'],
    ['R', 'R', 'H', 'H', 'B', 'B', 'Q', ' ', 'K', 'K', 'B', 'B', 'H', 'H', 'R', 'R'],
]


describe('Black pawn movement', () => {

    test('Debe devolver un array vacio al pasar un peon de la 2da fila.', async () => {
        const moveBlackPawn = await blackPawn(board1, 2, 0, eatWhitePiece);
        expect(moveBlackPawn).toEqual([])
    })

    test('Debe poseer un movimiento 1 fila hacia adelante.', async () => {
        const moveBlackPawn = await blackPawn(board1, 3, 0, eatWhitePiece);
        expect(moveBlackPawn).toEqual(expect.arrayContaining([{
            value: 25,
            from_row: 3,
            from_col: 0,
            to_row: 4,
            to_col: 0
        }]))
    })

    test('Debe poseer un movimiento 2 fila hacia adelante.', async () => {
        const moveBlackPawn = await blackPawn(board1, 3, 0, eatWhitePiece);
        expect(moveBlackPawn).toEqual(expect.arrayContaining([{
            value: 50,
            from_row: 3,
            from_col: 0,
            to_row: 5,
            to_col: 0
        }]))
    })

    test('No debe poseer movimientos hacia algun costado si no hay enemigo.', async () => {
        const moveBlackPawn = await blackPawn(board1, 3, 0, eatWhitePiece);
        expect(moveBlackPawn).toEqual(expect.not.arrayContaining([{
            value: 53,
            from_row: 3,
            from_col: 0,
            to_row: 4,
            to_col: 1
        }]))
    })

    test('Debe poseer un movimiento 1 fila hacia adelante.', async () => {
        const moveBlackPawn = await blackPawn(board2, 6, 7, eatWhitePiece);
        expect(moveBlackPawn).toEqual(expect.arrayContaining([{
            value: 1500,
            from_row: 6,
            from_col: 7,
            to_row: 7,
            to_col: 7
        }]))
    })

    test('No debe poseer un movimiento 2 fila hacia adelante.', async () => {
        const moveBlackPawn = await blackPawn(board2, 6, 7, eatWhitePiece);
        expect(moveBlackPawn).toEqual(expect.not.arrayContaining([{
            value: 56,
            from_row: 6,
            from_col: 7,
            to_row: 8,
            to_col: 7
        }]))
    })

    test('Debe poseer un movimiento 1 fila hacia adelante a la izquierda.', async () => {
        const moveBlackPawn = await blackPawn(board3, 5, 4, eatWhitePiece);
        expect(moveBlackPawn).toEqual(expect.arrayContaining([{
            value: 1125,
            from_row: 5,
            from_col: 4,
            to_row: 6,
            to_col: 3
        }]))
    })

    test('Debe poseer un movimiento 1 fila hacia adelante a la derecha.', async () => {
        const moveBlackPawn = await blackPawn(board3, 5, 4, eatWhitePiece);
        expect(moveBlackPawn).toEqual(expect.arrayContaining([{
            value: 1125,
            from_row: 5,
            from_col: 4,
            to_row: 6,
            to_col: 5
        }]))
    })

    test('No debe poseer un movimiento hacia adelante al estar la celda ocupada.', async () => {
        const moveBlackPawn = await blackPawn(board3, 5, 3, eatWhitePiece);
        expect(moveBlackPawn).toEqual(expect.not.arrayContaining([{
            value: 55,
            from_row: 5,
            from_col: 3,
            to_row: 6,
            to_col: 3
        }]))
    })
});