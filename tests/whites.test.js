const { whiteMovements } = require("../movements/white");

let data1 = {
    event: 'your_turn',
    data: {
        board_id: '9294de41-a6e8-4dc1-be6e-0b4310a8f274',
        turn_token: '2a7ed463-8419-4dce-87a7-2490c0ad9d33',
        username: 'oldanirenzo',
        actual_turn: 'white',
        board: 'rrhhbbqqkkbbhhrrrrhhbbqqkkbbhhrrpppppppppppppppppppppppppppppppp                                                                                                                                PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPRRHHBBQQKKBBHHRRRRHHBBQQKKBBHHRR',
        move_left: 200,
        opponent_username: 'oldanirenzo'
    }
}

let data2 = {
    event: 'your_turn',
    data: {
        board_id: '9294de41-a6e8-4dc1-be6e-0b4310a8f274',
        turn_token: '2a7ed463-8419-4dce-87a7-2490c0ad9d33',
        username: 'oldanirenzo',
        actual_turn: 'white',
        board: 'rrhhbbqqkkbbhhrrrrhhbbqqkkbbhhrrpppppppppppppppppppppppppppppppp                                                                                                            Q                   PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPRRHHBBQ KKBBHHRRRRHHBBQQKKBBHHRR',
        move_left: 200,
        opponent_username: 'oldanirenzo'
    }
}

describe('Piezas blancas, Movimientos.', () => {
    test('Debe mover el peon 2 posiciones hacia adelante', () => {
        return whiteMovements(data1)
            .then(movimiento => {
                expect(movimiento).toStrictEqual({
                    action: 'move',
                    data: {
                        board_id: '9294de41-a6e8-4dc1-be6e-0b4310a8f274',
                        turn_token: '2a7ed463-8419-4dce-87a7-2490c0ad9d33',
                        from_row: 12,
                        from_col: 5,
                        to_row: 10,
                        to_col: 5,
                    }
                })
            })
    });

    test('Los from_row, from_col, to_row y to_col deben ser mayores o iguales a 0', () => {
        return whiteMovements(data1)
            .then(movimiento => {
                expect(movimiento.data.from_row).toBeGreaterThanOrEqual(0);
                expect(movimiento.data.from_col).toBeGreaterThanOrEqual(0);
                expect(movimiento.data.to_row).toBeGreaterThanOrEqual(0);
                expect(movimiento.data.to_col).toBeGreaterThanOrEqual(0);
            })
    });

    test('Los from_row, from_col, to_row y to_col deben ser menores o iguales a 15', () => {
        return whiteMovements(data1)
            .then(movimiento => {
                expect(movimiento.data.from_row).toBeLessThanOrEqual(15);
                expect(movimiento.data.from_col).toBeLessThanOrEqual(15);
                expect(movimiento.data.to_row).toBeLessThanOrEqual(15);
                expect(movimiento.data.to_col).toBeLessThanOrEqual(15);
            })
    });

    test('Debe mover el peon 2 posiciones hacia adelante', () => {
        return whiteMovements(data2)
            .then(movimiento => {
                expect(movimiento).toStrictEqual({
                    action: 'move',
                    data: {
                        board_id: '9294de41-a6e8-4dc1-be6e-0b4310a8f274',
                        turn_token: '2a7ed463-8419-4dce-87a7-2490c0ad9d33',
                        from_row: 12,
                        from_col: 5,
                        to_row: 10,
                        to_col: 5,
                    }
                })
            })
    });

});

