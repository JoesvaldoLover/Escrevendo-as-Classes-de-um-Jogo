const prompt = require('prompt-sync')();

let charTypes = {
    warrior: {
        type: "guerreiro",
        weapon: "espada"
    },
    mage: {
        type: "mago",
        weapon: "magia"
    },
    monk: {
        type: "monge",
        weapon: "artes marciais"
    },
    ninja: {
        type: "ninja",
        weapon: "shuriken"
    }
}

class character {
    constructor(name, age, typeData){
        this.name = name
        this.age = age
        this.type = typeData.type
        this.weapon = typeData.weapon
    }

    attack(){
        console.log(`o ${this.type} atacou usando ${this.weapon}`)
    }
}