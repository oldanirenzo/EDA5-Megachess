const matriz = require("../movements/matriz");

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