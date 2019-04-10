// object oriented programming

let pen = {
    type: "ballpoint",
    color: "blue",
    brand: "bic"
};


console.log(pen.type);
console.log(pen.color);
console.log(pen.brand);

pen.color = "purple";

console.log(`My pen is ${pen.color} and it is a ${pen.type} pen`);

pen.price = "5.25";
console.log(`My pen costs ${pen.price}`);

// Character from an RPG game

let aurora = {
    name: "Aurora",
    strength: 150,
    gloves:{
        size: 6,
        length: "small"
    },
    health: 50
};

///aurora is hit by an arrow!... in the knee! Oh No! reduce her health by 20
aurora.health -= 20;

//aurora finds a magic necklace. Yay! Increase her strength by 10
aurora.strength += 10;
//describe(aurora);

// function describe(character){
//     console.log(`${character.name} has health of ${character.health} and strength of ${character.strength}`);
// }
//console.log(`${aurora.name} has health of ${aurora.health} and strength of ${aurora.strength}`);

let jimBob = {
    name: "Jim Bob",
    strength: 200,
    health: 20,
    describe() {
        console.log(`${this.name} has health of ${this.health} and strength of ${this.strength}`);
    }
};

jimBob.describe();
