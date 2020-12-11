const horse = require('../pieces/horse')
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
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', 'H', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    ['R', 'R', ' ', 'H', 'B', 'B', 'Q', 'Q', 'K', 'K', 'B', 'B', 'H', 'H', 'R', 'R'],
    ['R', 'R', 'H', 'H', 'B', 'B', 'Q', 'Q', 'K', 'K', 'B', 'B', 'H', 'H', 'R', 'R'],
]

let board3 = [
    ['r', 'r', 'h', 'h', 'b', 'b', 'q', 'q', 'k', 'k', 'b', 'b', 'h', 'h', ' ', 'r'],
    ['r', 'r', 'h', ' ', 'b', 'b', 'q', ' ', ' ', 'k', 'b', ' ', 'h', ' ', ' ', 'r'],
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
    ['p', 'p', 'p', 'p', 'p', ' ', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'k', ' ', 'q', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', 'p', ' ', ' ', ' ', 'r', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', 'H', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', 'b', ' ', ' ', ' ', 'r', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'h', ' ', 'h', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    ['R', 'R', ' ', 'H', 'B', 'B', 'Q', 'Q', 'K', 'K', 'B', 'B', 'H', 'H', 'R', 'R'],
    ['R', 'R', 'H', 'H', 'B', 'B', 'Q', 'Q', 'K', 'K', 'B', 'B', 'H', 'H', 'R', 'R'],
]

describe('Horse movements', () => {

    test('Debe devolver un array vacio.', async () => {
        const horseMovement = await horse(board1, 14, 2, whitePieces, eatBlackPiece, moveWhitePiece);
        expect(horseMovement).toEqual([])
    });
    //MOVIMIENTOS
    test('Debe poseer un movimiento 2 filas arriba y 1 columna a la izquierda.', async () => {
        const horseMovement = await horse(board2, 8, 7, whitePieces, eatBlackPiece, moveWhitePiece);
        expect(horseMovement).toEqual(expect.arrayContaining([{
            value: 60,
            from_row: 8,
            from_col: 7,
            to_row: 6,
            to_col: 6
        }]))
    });
    test('Debe poseer un movimiento 2 filas arriba y 1 columna a la derecha.', async () => {
        const horseMovement = await horse(board2, 8, 7, whitePieces, eatBlackPiece, moveWhitePiece);
        expect(horseMovement).toEqual(expect.arrayContaining([{
            value: 60,
            from_row: 8,
            from_col: 7,
            to_row: 6,
            to_col: 8
        }]))
    });
    test('Debe poseer un movimiento 2 filas abajo y 1 columna a la izquierda.', async () => {
        const horseMovement = await horse(board2, 8, 7, whitePieces, eatBlackPiece, moveWhitePiece);
        expect(horseMovement).toEqual(expect.arrayContaining([{
            value: 45,
            from_row: 8,
            from_col: 7,
            to_row: 10,
            to_col: 6
        }]))
    });

    test('Debe poseer un movimiento 2 filas abajo y 1 columna a la derecha.', async () => {
        const horseMovement = await horse(board2, 8, 7, whitePieces, eatBlackPiece, moveWhitePiece);
        expect(horseMovement).toEqual(expect.arrayContaining([{
            value: 45,
            from_row: 8,
            from_col: 7,
            to_row: 10,
            to_col: 8
        }]))
    });

    test('Debe poseer un movimiento 2 columnas a la izquierda y una fila arriba.', async () => {
        const horseMovement = await horse(board2, 8, 7, whitePieces, eatBlackPiece, moveWhitePiece);
        expect(horseMovement).toEqual(expect.arrayContaining([{
            value: 45,
            from_row: 8,
            from_col: 7,
            to_row: 7,
            to_col: 5
        }]))
    });
    test('Debe poseer un movimiento 2 columnas a la izquierda y una fila abajo.', async () => {
        const horseMovement = await horse(board2, 8, 7, whitePieces, eatBlackPiece, moveWhitePiece);
        expect(horseMovement).toEqual(expect.arrayContaining([{
            value: 45,
            from_row: 8,
            from_col: 7,
            to_row: 9,
            to_col: 5
        }]))
    });

    test('Debe poseer un movimiento 2 columnas a la derecha y una fila arriba.', async () => {
        const horseMovement = await horse(board2, 8, 7, whitePieces, eatBlackPiece, moveWhitePiece);
        expect(horseMovement).toEqual(expect.arrayContaining([{
            value: 60,
            from_row: 8,
            from_col: 7,
            to_row: 7,
            to_col: 9
        }]))
    });

    test('Debe poseer un movimiento 2 columnas a la derecha y una fila abajo.', async () => {
        const horseMovement = await horse(board2, 8, 7, whitePieces, eatBlackPiece, moveWhitePiece);
        expect(horseMovement).toEqual(expect.arrayContaining([{
            value: 60,
            from_row: 8,
            from_col: 7,
            to_row: 9,
            to_col: 9
        }]))
    });

    //COMER
    test('Debe poseer un movimiento para comer 2 filas arriba y 1 columna a la izquierda.', async () => {
        const horseMovement = await horse(board3, 8, 7, whitePieces, eatBlackPiece, moveWhitePiece);
        expect(horseMovement).toEqual(expect.arrayContaining([{
            value: 1002,
            from_row: 8,
            from_col: 7,
            to_row: 6,
            to_col: 6
        }]))
    });
    test('Debe poseer un movimiento para comer 2 filas arriba y 1 columna a la derecha.', async () => {
        const horseMovement = await horse(board3, 8, 7, whitePieces, eatBlackPiece, moveWhitePiece);
        expect(horseMovement).toEqual(expect.arrayContaining([{
            value: 552,
            from_row: 8,
            from_col: 7,
            to_row: 6,
            to_col: 8
        }]))
    });
    test('Debe poseer un movimiento para comer 2 filas abajo y 1 columna a la izquierda.', async () => {
        const horseMovement = await horse(board3, 8, 7, whitePieces, eatBlackPiece, moveWhitePiece);
        expect(horseMovement).toEqual(expect.arrayContaining([{
            value: 301.5,
            from_row: 8,
            from_col: 7,
            to_row: 10,
            to_col: 6
        }]))
    });

    test('Debe poseer un movimiento para comer 2 filas abajo y 1 columna a la derecha.', async () => {
        const horseMovement = await horse(board3, 8, 7, whitePieces, eatBlackPiece, moveWhitePiece);
        expect(horseMovement).toEqual(expect.arrayContaining([{
            value: 301.5,
            from_row: 8,
            from_col: 7,
            to_row: 10,
            to_col: 8
        }]))
    });

    test('Debe poseer un movimiento para comer 2 columnas a la izquierda y una fila arriba.', async () => {
        const horseMovement = await horse(board3, 8, 7, whitePieces, eatBlackPiece, moveWhitePiece);
        expect(horseMovement).toEqual(expect.arrayContaining([{
            value: 121.5,
            from_row: 8,
            from_col: 7,
            to_row: 7,
            to_col: 5
        }]))
    });
    test('Debe poseer un movimiento para comer 2 columnas a la izquierda y una fila abajo.', async () => {
        const horseMovement = await horse(board3, 8, 7, whitePieces, eatBlackPiece, moveWhitePiece);
        expect(horseMovement).toEqual(expect.arrayContaining([{
            value: 401.5,
            from_row: 8,
            from_col: 7,
            to_row: 9,
            to_col: 5
        }]))
    });

    test('Debe poseer un movimiento para comer 2 columnas a la derecha y una fila arriba.', async () => {
        const horseMovement = await horse(board3, 8, 7, whitePieces, eatBlackPiece, moveWhitePiece);
        expect(horseMovement).toEqual(expect.arrayContaining([{
            value: 602,
            from_row: 8,
            from_col: 7,
            to_row: 7,
            to_col: 9
        }]))
    });

    test('Debe poseer un movimiento para comer 2 columnas a la derecha y una fila abajo.', async () => {
        const horseMovement = await horse(board3, 8, 7, whitePieces, eatBlackPiece, moveWhitePiece);
        expect(horseMovement).toEqual(expect.arrayContaining([{
            value: 602,
            from_row: 8,
            from_col: 7,
            to_row: 9,
            to_col: 9
        }]))
    });
});