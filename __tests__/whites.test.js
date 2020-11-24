const { whiteMovements } = require("../blancasConSwitch");
const matriz = require("../movements/matriz");

let data = {
    event: 'your_turn',
    data: {
        board_id: '9294de41-a6e8-4dc1-be6e-0b4310a8f274',
        turn_token: '2a7ed463-8419-4dce-87a7-2490c0ad9d33',
        username: 'oldanirenzo',
        actual_turn: 'white',
        board: 'rrhhbbqqkkbbhhrrrrhhbbqqkkbbhhrrpppppppppppppppppppppppppppppppp                                                                                                                                PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPRRHHBBQQKKBBHHRRRRHHBBQQKKBBHHRR',
        move_left: 8,
        opponent_username: 'oldanirenzo'
    }
}


describe('Matriz', () => {
    test('Debe devolver una matriz llena al mandar los datos del servidor', () => {

        for (let row = 0; row < 16; row++) {
            for (let col = 0; col < 16; col++) {

                expect(matriz(data)[row][col])
                    .toBeDefined()
            }
        }
    });
});

describe('Piezas blancas, movimientos.', () => {
    test('Debe mover el peon 2 posiciones hacia adelante', () => {
        return whiteMovements(data).then(movimiento => {
            expect(movimiento).toStrictEqual({
                action: 'move',
                data: {
                    board_id: '9294de41-a6e8-4dc1-be6e-0b4310a8f274',
                    turn_token: '2a7ed463-8419-4dce-87a7-2490c0ad9d33',
                    from_row: 12,
                    from_col: 0,
                    to_row: 10,
                    to_col: 0,
                }
            })
        })
    });
});
