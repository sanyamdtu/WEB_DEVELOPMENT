const jojobizzare = {
    vilain: "dio",
    hero: "jotaro",
    side_hero: "joseph",
    dio: {
        move: "road roller",
        lang: "dum dum anga ichi anga ichi",
        special_move: "muda muda muda",
    }
}

const muda = jojobizzare;
muda.dio.move = "nine seconds";
console.log(muda);
console.log(jojobizzare);


//
//  tic tac toe
const tic_tac_toe = {
    player1: {
        username: "jotaro",
        type: "X"
    },
    player2: {
        username: "dio",
        type: "O",
    },
    board: [
        ['x', '0', null],
        ['o', 'x', null],
        [null, 'x', null]
    ],
}