import Pkmn from "./modules/Pkmn.js";
import Attack from "./modules/Attack.js";

function pkmnFight(fighters, starter) {

    let i = starter;
    let j, temp;
    if (i == 0) {
        j = 1;
    } else {
        j = 0;
    }

    out += `the starting pkmn is ${fighters[i].name}, let the combat begin!\n`

    do {
        out += fighters[i].fight(fighters[j]);
        temp = i;
        i = j;
        j = temp;
    }
    while (fighters[0].currentHP > 0 && fighters[1].currentHP > 0);

    out += `The fight is over.`;
}

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
let out = "";
let divOut = "";

out += `The fighters are ${pikachu.name} and ${evoli.name},\n`

let starter = Math.floor(Math.random() * 2)



pkmnFight([pikachu, evoli], starter);

let div = document.getElementById('cmbt');

let arrStr = out.split('\n');
for (let i = 0; i < arrStr.length; i++) {
    divOut += `<p>${arrStr[i]}</p>\n`
}

div.innerHTML = divOut;