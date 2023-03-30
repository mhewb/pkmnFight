export default class Pkmn{
    constructor(name, idDex, size, weight, type, maxHP, attacks) {
        this.name = name;
        this.idDex = idDex;
        this.size = size;
        this.weight = weight;
        this.type = type;
        this.maxHP = maxHP;
        this.currentHP = maxHP;
        this.attacks = attacks;
    }

    fight(target) {
        let attack, dammage;

        if (this.currentHP <= this.maxHP * 0.2) {
            attack = this.attacks[1]
        } else {
            attack = this.attacks[0]
        }

        console.log(`${this.name} attacked ${target.name} with ${attack.label}`);

        // if cc (10% luck = 0.1) then dammage = dammage * 2
        let isCriticalStricke = criticalStrike();

        if (isCriticalStricke == true) {
            dammage = attack.dammage * 2
            console.log(`Coup critique! ${this.name} dealt ${attack.dammage} dammages.`)
        } else {
            dammage = attack.dammage
            console.log(`${this.name} dealt ${attack.dammage} dammages.`)
        }
        target.currentHP = target.currentHP - dammage;

        if (target.currentHP <= 0) {
            console.log(`${target.name} is DEAD (${target.currentHP} <= 0)`);
            console.log(`${this.name} is the winner!`);
        } else {
            console.log(`${target.name} current HP is ${target.currentHP}`);
        }
    }

}

function criticalStrike(){
    let luck = Math.random()

    if (luck < 0.1) {
        return true;
    }
    return false;
}