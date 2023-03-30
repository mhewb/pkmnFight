import Pkmn from "./modules/Pkmn.js";
import Attack from "./modules/Attack.js";

let pikachu = new Pkmn(
    'Pikachu',
    25,
    40,
    6,
    'electrique',
    82,
    [
        new Attack('Statik', 10),
        new Attack('Paratonerre', 25),
    ],
);

let evoli = new Pkmn(
    'Evoli',
    133,
    30,
    6.5,
    'normal',
    70,
    [
        new Attack('Adaptabilité', 9),
        new Attack('Anticipation', 15),
    ],
);

console.log(pikachu);
console.log(evoli);

let starter = Math.floor(Math.random() * 2)

function pkmnFight(fighters, starter) {

    let i = starter;
    let j, temp;
    if (i == 0) {
        j = 1;
    } else {
        j = 0;
    }

    do {
        fighters[i].fight(fighters[j]);
        temp = i;
        i = j;
        j = temp;
    }
    while (fighters[0].currentHP > 0 && fighters[1].currentHP > 0)

    console.log(`The fight is over.`);
}

pkmnFight([pikachu, evoli], starter)