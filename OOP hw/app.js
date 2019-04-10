let sam = {
    name: "Sam",
    strength: 150,
    health: 100,
    xp: 0,
    describe() {
        return (`${this.name} has ${this.health} health points, ${this.strength} as strength and ${this.xp} XP points`);
    }
};

//sam is shot by arrow
sam.health -= 20;

//sam equips a strength amulet
sam.strength += 10;

//sam learned a new skill
sam.xp += 15;

console.log(sam.describe());

let dog = {
    name: "Tikaani",
    species: "Alaskan Malamute",
    size: "medium",
    bark() {
        return (`... ${dog.name} doesn't bark.`);
    }
};

//modeling a dog
console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size} in size.`);

console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);


//modeling a bank account
let account = {
    name: "Alex",
    balance: 0,
    credit(i) {
        return (this.balance += i);
    },
    describe() {
        return(`"owner: ${this.name}, balance ${this.balance}"`);
    }
}

console.log(account.describe());
account.credit(250);
account.credit(-80);
console.log(account.describe());
