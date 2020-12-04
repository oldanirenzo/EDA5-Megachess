const matriz = require("../movements/matriz");

let data = {
    data: {
        board: 'rrhhbbqqkkbbhhrrrrhhbbqqkkbbhhrrpppppppppppppppppppppppppppppppp                                                                                                                                PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPRRHHBBQQKKBBHHRRRRHHBBQQKKBBHHRR',
    }
}
let data2 = {
    data: {
        board: 'rrhhbbqqkkbbhhrrrrhhbbqqkkbbhhrrpppppppppppppppppppppppppppp                                                                                                                                PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPRRHHBBQQKKBBHHRRRRHHBBQQKKBBHHRR',
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
    test('Debe tirar error en caso de que no se encuentre con todos los campos llenos.', () => {
        expect(() => {
            matriz(data2)
        }).toThrow('Se detecto un valor undefined')
    });
});