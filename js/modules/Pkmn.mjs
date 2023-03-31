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
        let myLog = "";
        let attack, dammage;

        if (this.currentHP <= this.maxHP * 0.2) {
            attack = this.attacks[1];
        } else {
            attack = this.attacks[0];
        }

        myLog += `${this.name} attacked ${target.name} with ${attack.label}.\n`;

        // if cc (10% luck = 0.1) then dammage = dammage * 2
        let isCriticalStricke = criticalStrike();

        if (isCriticalStricke == true) {
            dammage = attack.dammage * 2;
            myLog  += `Coup critique! ${this.name} dealt ${attack.dammage} dammages.\n`;
        } else {
            dammage = attack.dammage;
            myLog  += `${this.name} dealt ${attack.dammage} dammages.\n`;
        }
        target.currentHP = target.currentHP - dammage;

        if (target.currentHP <= 0) {
            myLog  += `${target.name} is KO,\n`;
            myLog  += `${this.name} is the winner!\n`;
        } else {
            myLog  += `${target.name} current HP is ${target.currentHP}.\n`;
        }

        return myLog
    }

}

function criticalStrike(){
    let luck = Math.random()

    if (luck < 0.1) {
        return true;
    }
    return false;
}