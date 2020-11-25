const { whiteMovements } = require("../blancasConSwitch");

let data = {
    event: 'your_turn',
    data: {
        board_id: '9294de41-a6e8-4dc1-be6e-0b4310a8f274',
        turn_token: '2a7ed463-8419-4dce-87a7-2490c0ad9d33',
        username: 'oldanirenzo',
        actual_turn: 'white',
        board: 'rrhhbbqqkkbbhhrrrrhhbbqqkkbbhhrrpppppppppppppppppppppppppppppppp                                                                                                                                PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPRRHHBBQQKKBBHHRRRRHHBBQQKKBBHHRR',
        move_left: 199,
        opponent_username: 'oldanirenzo'
    }
}




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
