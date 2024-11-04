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
        this.typeData = typeData
    }

    attack(){
        console.log(`o ${this.typeData.type} atacou usando ${this.typeData.weapon}`)
    }
}

let name = prompt("Digite o nome do herói: ")
let age = parseInt(prompt("Digite a idade do herói: "))

let option;

do {
    console.log("Escolha uma dos tipos de personagens")
    console.log("Para escolhar, digite o número a direita do tipo")
    console.log("1 - Guerreiro")
    console.log("2 - Mago")
    console.log("3 - Monge")
    console.log("4 - Ninja")

    option = parseInt(prompt(""))

    if((option < 1 || option > 4)){
        console.log("Digite uma opção válida!\n")
        continue
    }

    break
} while(true)

let typeData

switch(option){
    case 1:
        typeData = charTypes.warrior
    break
    case 2:
        typeData = charTypes.mage
    break
    case 3:
        typeData = charTypes.monk
    break
    case 4:
        typeData = charTypes.ninja
    break
}

let hero = new character(name, age, typeData)
hero.attack()