const inquirer = require("inquirer")

const { Choose } = require("./CyberpetQ")




class Pokemon {
    constructor(name, health, hunger, thirst, happiness) {
        this.name = name
        this.health = 100,
        this.hunger = 10,
        this.thirst = 10,
        this.happiness = 10
    }

    play(){
        this.happiness += 2,
        this.thirst = this.thirst === 0? 0: this.thirst - 1,
        this.hunger = this.hunger === 0?  0 : this.hunger - 1,
        this.health = this.health < 100? this.health +2: this.health + 0;
        this.health = this.hunger === 0 || this.thirst === 0? this.health - 5: this.health + 0;
    }

    feed(){
        this.hunger += 2,
        this.thirst = this.thirst === 0? 0: this.thirst - 1,
        this.happiness = this.happiness === 0? 0: this.happiness - 1,
        this.health = this.health < 100? this.health +2: this.health + 0;
        this.health = this.happiness === 0 || this.thirst === 0? this.health - 5: this.health + 0;
    }

    water(){
        this.thirst += 2,
        this.hunger = this.hunger === 0? 0: this.hunger - 1,
        this.happiness = this.happiness === 0? 0: this.happiness - 1,
        this.health = this.health < 100? this.health +2: this.health + 0;
        this.health = this.happiness === 0 || this.hunger === 0? this.health - 5: this.health + 0;
        }
}
let CyberPoke;

const init = () =>{
    let chosenPokemon;
            inquirer
    .prompt(Choose)
    .then((answers) => {
        // Pokemon = pokemonChosen(answers.Pokemon)
        if (answers.petType === "Charmander") {
                console.log("You Choose Charmander")
                chosenPokemon = "Charmander"
                
            }
        else if (answers.petType === "Bulbasaur") {
            console.log("You Choose Bulbasaur")
            chosenPokemon = "Bulbasuar"
        }
        else {
            console.log("You Choose Squirtle")
            chosenPokemon = "Squirtle"
        }
    
    })
    .then(() => {CyberPoke = new Pokemon(chosenPokemon)
        gameLoop()})
}

const gameLoop = () => { 
    if (CyberPoke.health < 0) {
        console.log("Your Pokemon died")
        return
    }

    inquirer
    .prompt([
        {
            type: "rawlist",
            name: "action",
            message: "What would you like to do?",
            choices: ["Feed", "Give Water", "Play"],
        },
    ])
    .then((answers) => {

        if (answers.action === "Feed") {
            CyberPoke.feed()
        } else if (answers.action === "Play") {
            CyberPoke.play()
            console.log("Playing...")
        } else {
            CyberPoke.water()
            console.log("Drinking...")
        }

        console.table(CyberPoke)
    })
    .then(() => gameLoop())

}


init()