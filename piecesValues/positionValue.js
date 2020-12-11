const whitePawnPositionValue =
    [
        [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
        [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
        [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
        [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
        [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
        [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
        [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
        [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
        [ 15,  15,  15,  20,  20,  20,  20,  20,  20,  20,  15,  15,  20,  20,  15,  15],
        [ 12,  12,  15,  15,  15,  15,  15,  15,  15,  15,  12,  15,  15,  12,  12,  12],
        [ 13,  13,  13,  13,  13,  14,  14,  14,  14,  14,  13,  13,  13,  13,  13,  13],
        [ 11,  11,  11,  11,  11,  12,  12,  12,  12,  12,  11,  11,  11,  11,  11,  11],
        [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
        [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
        [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
        [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
    ];

const blackPawnPositionValue = 
    [
        [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
        [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
        [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
        [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
        [ 11,  11,  11,  11,  11,  12,  12,  12,  12,  12,  11,  11,  11,  11,  11,  11],
        [ 13,  13,  13,  13,  13,  14,  14,  14,  14,  14,  13,  13,  13,  13,  13,  13],
        [ 12,  12,  15,  15,  15,  15,  15,  15,  15,  15,  12,  15,  15,  12,  12,  12],
        [ 15,  15,  15,  20,  20,  20,  20,  20,  20,  20,  15,  15,  20,  20,  15,  15],
        [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
        [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
        [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
        [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
        [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
        [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
        [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
        [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
    ];

const whiteKingPositionValue =
    [
        [0.0, 0.0, 0.0, 0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, 0.0, 0.0, 0.0, 0.0],
        [0.0, 0.0, 0.0, 0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, 0.0, 0.0, 0.0, 0.0],
        [0.0, 0.0, 0.0, 0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, 0.0, 0.0, 0.0, 0.0],
        [0.0, 0.0, 0.0, 0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, 0.0, 0.0, 0.0, 0.0],
        [0.0, 0.0, 0.0, 0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, 0.0, 0.0, 0.0, 0.0],
        [0.0, 0.0, 0.0, 0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, 0.0, 0.0, 0.0, 0.0],
        [0.0, 0.0, 0.0, 0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, 0.0, 0.0, 0.0, 0.0],
        [0.0, 0.0, 0.0, 0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, 0.0, 0.0, 0.0, 0.0],
        [0.0, 0.0, 0.0, 0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, 0.0, 0.0, 0.0, 0.0],
        [0.0, 0.0, 0.0, 0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, 0.0, 0.0, 0.0, 0.0],
        [0.0, 0.0, 0.0, 0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, 0.0, 0.0, 0.0, 0.0],
        [0.0, 0.0, 0.0, 0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, 0.0, 0.0, 0.0, 0.0],
        [0.0, 0.0, 0.0, 0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, 0.0, 0.0, 0.0, 0.0],
        [0.0, 0.0, 0.5, 0.5, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.5, 0.5, 0.0, 0.0],
        [0.0, 0.0, 0.5, 0.5, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.5, 0.5, 0.0, 0.0],
        [0.0, 0.0, 0.5, 0.5, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.5, 0.5, 0.0, 0.0],
    ];

const blackKingPositionValue = whiteKingPositionValue.slice().reverse();

const whiteQueenPositionValue =
    [
        [ 2.0,  2.0,  1.0,  1.0,  1.0,  1.0,  0.5,  0.5,  0.5,  0.5,  1.0,  1.0,  1.0,  1.0,  2.0,  2.0],
        [ 2.0,  2.0,  1.0,  1.0,  1.0,  1.0,  0.5,  0.5,  0.5,  0.5,  1.0,  1.0,  1.0,  1.0,  2.0,  2.0],
        [ 1.0,  1.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  1.0,  1.0],
        [ 1.0,  1.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  1.0,  1.0],
        [ 1.0,  1.0,  0.0,  0.0,  0.5,  0.5,  0.5,  0.5,  0.5,  0.5,  0.5,  0.5,  0.0,  0.0,  1.0,  1.0],
        [ 1.0,  1.0,  0.0,  0.0,  0.5,  0.5,  0.5,  0.5,  0.5,  0.5,  0.5,  0.5,  0.0,  0.0,  1.0,  1.0],
        [ 0.5,  0.5,  0.0,  0.0,  1.0,  1.0,  1.0,  1.0,  1.0,  1.0,  1.0,  1.0,  0.0,  0.0,  0.5,  0.5],
        [ 0.5,  0.5,  0.0,  0.0,  1.0,  1.0,  1.0,  1.0,  1.0,  1.0,  1.0,  1.0,  0.0,  0.0,  0.5,  0.5],
        [ 0.0,  0.0,  0.0,  0.0,  1.0,  1.0,  1.0,  1.0,  1.0,  1.0,  1.0,  1.0,  0.0,  0.0,  0.5,  0.5],
        [ 0.0,  0.0,  0.0,  0.0,  1.0,  1.0,  1.0,  1.0,  1.0,  1.0,  1.0,  1.0,  0.0,  0.0,  0.5,  0.5],
        [ 1.0,  1.0,  0.5,  0.5,  0.5,  0.5,  0.5,  0.5,  0.5,  0.5,  0.5,  0.5,  0.0,  0.0,  1.0,  1.0],
        [ 1.0,  1.0,  0.5,  0.5,  0.5,  0.5,  0.5,  0.5,  0.5,  0.5,  0.5,  0.5,  0.0,  0.0,  1.0,  1.0],
        [ 1.0,  1.0,  0.0,  0.0,  0.5,  0.5,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  1.0,  1.0],
        [ 1.0,  1.0,  0.0,  0.0,  0.5,  0.5,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  1.0,  1.0],
        [ 2.0,  2.0,  1.0,  1.0,  1.0,  1.0,  0.5,  0.5,  0.5,  0.5,  1.0,  1.0,  1.0,  1.0,  2.0,  2.0],
        [ 2.0,  2.0,  1.0,  1.0,  1.0,  1.0,  0.5,  0.5,  0.5,  0.5,  1.0,  1.0,  1.0,  1.0,  2.0,  2.0],
    ];

const blackQueenPositionValue = whiteQueenPositionValue.slice().reverse()

const whiteRookPositionValue =
    [
        [ 1.0,  1.0,  0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,  0.0,  1.0,  1.0],
        [ 1.0,  1.0,  1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0,  1.0,  1.0,  1.0],
        [ 1.0,  1.0,  1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0,  1.0,  1.0,  1.0],
        [ 0.0,  0.0,  0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,  0.0,  0.0,  0.0],
        [ 0.0,  0.0,  0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,  0.0,  0.0,  0.0],
        [ 0.0,  0.0,  0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,  0.0,  0.0,  0.0],
        [ 0.0,  0.0,  0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,  0.0,  0.0,  0.0],
        [ 0.0,  0.0,  0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,  0.0,  0.0,  0.0],
        [ 0.0,  0.0,  0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,  0.0,  0.0,  0.0],
        [ 0.0,  0.0,  0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,  0.0,  0.0,  0.0],
        [ 0.0,  0.0,  0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,  0.0,  0.0,  0.0],
        [ 0.0,  0.0,  0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,  0.0,  0.0,  0.0],
        [-0.5, -0.5, -0.5, 0.0, 0.0, 0.0, 0.5, 0.5, 0.5, 0.5, 0.0, 0.0, 0.0, -0.5, -0.5, -0.5],
        [-0.5, -0.5, -0.5, 0.0, 0.0, 0.0, 0.5, 0.5, 0.5, 0.5, 0.0, 0.0, 0.0, -0.5, -0.5, -0.5],
        [-0.5, -0.5, -0.5, 0.0, 0.0, 0.0, 0.5, 0.5, 0.5, 0.5, 0.0, 0.0, 0.0, -0.5, -0.5, -0.5],
        [-0.5, -0.5, -0.5, 0.0, 0.0, 0.0, 0.5, 0.5, 0.5, 0.5, 0.0, 0.0, 0.0, -0.5, -0.5, -0.5],
    ];

const blackRookPositionValue = whiteRookPositionValue.slice().reverse();

const whiteBishopPositionValue = 
    [
        [ -2.0, -2.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -2.0, -2.0],
        [ -2.0, -2.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -2.0, -2.0],
        [ -1.0, -1.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, -1.0, -1.0],
        [ -1.0, -1.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, -1.0, -1.0],
        [ -1.0, -1.0,  0.0,  0.0,  0.5,  0.5,  1.0,  1.0,  1.0,  1.0,  0.5,  0.5,  0.0,  0.0, -1.0, -1.0],
        [ -1.0, -1.0,  0.0,  0.0,  0.5,  0.5,  1.0,  1.0,  1.0,  1.0,  0.5,  0.5,  0.0,  0.0, -1.0, -1.0],
        [ -1.0, -1.0,  0.5,  0.5,  0.5,  0.5,  1.0,  1.0,  1.0,  1.0,  0.5,  0.5,  0.5,  0.5, -1.0, -1.0],
        [ -1.0, -1.0,  0.5,  0.5,  0.5,  0.5,  1.0,  1.0,  1.0,  1.0,  0.5,  0.5,  0.5,  0.5, -1.0, -1.0],
        [ -1.0, -1.0,  0.0,  0.0,  1.0,  1.0,  1.0,  1.0,  1.0,  1.0,  1.0,  1.0,  0.0,  0.0, -1.0, -1.0],
        [ -1.0, -1.0,  0.0,  0.0,  1.0,  1.0,  1.0,  1.0,  1.0,  1.0,  1.0,  1.0,  0.0,  0.0, -1.0, -1.0],
        [ -1.0,  1.0,  1.0,  1.0,  1.0,  1.0,  1.0,  1.0,  1.0,  1.0,  1.0,  1.0,  1.0,  1.0,  1.0, -1.0],
        [ -1.0,  1.0,  1.0,  1.0,  1.0,  1.0,  1.0,  1.0,  1.0,  1.0,  1.0,  1.0,  1.0,  1.0,  1.0, -1.0],
        [ -1.0, -1.0,  0.5,  0.5,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.5,  0.5, -1.0, -1.0],
        [ -1.0, -1.0,  0.5,  0.5,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.5,  0.5, -1.0, -1.0],
        [ -2.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -2.0],
        [ -2.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -2.0],
    ];

const blackBishopPositionValue = whiteBishopPositionValue.slice().reverse()

const whiteHorsePositionValue = 
[
    [-5.0, -5.0, -4.0, -4.0, -3.0, -3.0, -3.0, -3.0, -3.0, -3.0, -3.0, -3.0, -4.0, -4.0, -5.0, -5.0],
    [-5.0, -5.0, -4.0, -4.0, -3.0, -3.0, -3.0, -3.0, -3.0, -3.0, -3.0, -3.0, -4.0, -4.0, -5.0, -5.0],
    [-4.0, -4.0, -2.0, -2.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, -2.0, -2.0, -4.0, -4.0],
    [-4.0, -4.0, -2.0, -2.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, -2.0, -2.0, -4.0, -4.0],
    [-3.0, -3.0,  0.0,  0.0,  1.0,  1.0,  1.5,  1.5,  1.5,  1.5,  1.0,  1.0,  0.0,  0.0, -3.0, -3.0],
    [-3.0, -3.0,  0.0,  0.0,  1.0,  1.0,  1.5,  1.5,  1.5,  1.5,  1.0,  1.0,  0.0,  0.0, -3.0, -3.0],
    [-3.0, -3.0,  0.5,  0.5,  1.5,  1.5,  2.0,  2.0,  2.0,  2.0,  1.5,  1.5,  0.5,  0.5, -3.0, -3.0],
    [-3.0, -3.0,  0.5,  0.5,  1.5,  1.5,  2.0,  2.0,  2.0,  2.0,  1.5,  1.5,  0.5,  0.5, -3.0, -3.0],
    [-3.0, -3.0,  0.0,  0.0,  1.5,  1.5,  2.0,  2.0,  2.0,  2.0,  1.5,  1.5,  0.0,  0.0, -3.0, -3.0],
    [-3.0, -3.0,  0.0,  0.0,  1.5,  1.5,  2.0,  2.0,  2.0,  2.0,  1.5,  1.5,  0.0,  0.0, -3.0, -3.0],
    [-3.0, -3.0,  0.5,  0.5,  1.0,  1.0,  1.5,  1.5,  1.5,  1.5,  1.0,  1.0,  0.5,  0.5, -3.0, -3.0],
    [-3.0, -3.0,  0.5,  0.5,  1.0,  1.0,  1.5,  1.5,  1.5,  1.5,  1.0,  1.0,  0.5,  0.5, -3.0, -3.0],
    [-4.0, -4.0, -2.0, -2.0,  0.0,  0.0,  0.5,  0.5,  0.5,  0.5,  0.0,  0.0, -2.0, -2.0, -4.0, -4.0],
    [-4.0, -4.0, -2.0, -2.0,  0.0,  0.0,  0.5,  0.5,  0.5,  0.5,  0.0,  0.0, -2.0, -2.0, -4.0, -4.0],
    [-5.0, -5.0, -4.0, -4.0, -3.0, -3.0, -3.0, -3.0, -3.0, -3.0, -3.0, -3.0, -4.0, -4.0, -5.0, -5.0],
    [-5.0, -5.0, -4.0, -4.0, -3.0, -3.0, -3.0, -3.0, -3.0, -3.0, -3.0, -3.0, -4.0, -4.0, -5.0, -5.0],
];

const blackHorsePositionValue = whiteHorsePositionValue.slice().reverse();


module.exports = {
    whitePawnPositionValue,
    blackPawnPositionValue,
    whiteKingPositionValue,
    blackKingPositionValue,
    whiteQueenPositionValue,
    blackQueenPositionValue,
    whiteRookPositionValue,
    blackRookPositionValue,
    whiteBishopPositionValue,
    blackBishopPositionValue,
    whiteHorsePositionValue,
    blackHorsePositionValue
}