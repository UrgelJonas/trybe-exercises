const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
};

const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
};

const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const danoDragon = () => {
    const min = 15;
    const max = dragon.strength;
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const danoWarrior = () => {
    const min = warrior.strength;
    const max = warrior.strength * warrior.weaponDmg;
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const danoMage = () => {
    const min = mage.intelligence;
    const max = mage.intelligence * 2;
    if (mage.mana < 15) {
        return 'Não possui mana suficiente';
    }
    return {
        dano: Math.floor(Math.random() * (max - min + 1) + min),
        mana: 15,
    }
}

const gameActions = {
    warriorTurn: (func) => {
        const dano = func();
        dragon.healthPoints -= dano;
        warrior.damage = dano;
    },
    mageTurn: (func) => {
        const dano = func();
        dragon.healthPoints -= dano.dano;
        mage.damage = dano.dano;
        mage.mana -= dano.mana;
    },
    dragonTurn: (func) => {
        const dano = func();
        mage.healthPoints -= dano;
        warrior.healthPoints -= dano;
        dragon.damage = dano;
    },
    turnResults: () => battleMembers,
}

gameActions.warriorTurn(danoWarrior);
gameActions.mageTurn(danoMage);
gameActions.dragonTurn(danoDragon);
console.log(gameActions.turnResults());
