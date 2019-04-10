// let hi;
// function sayHello() {
//     //console.log("Hello World");
//     hi = "Hello World";
//     return hi;
//     console.log("Stitch is so cute!");
// }
// // let message = sayHello();
// // console.log(message);
// console.log(sayHello());
// console.log(hi);

// function sayAloha(name, name2) {
//     let message = `Aloha, ${name}`;
//     return message;
// }

// console.log(sayAloha("Stitch"));

const hello = function (name) {
    let message = `Hello, ${name}`;
    return message;
};

console.log(hello("Dory"));

const aloha = (name) => {
    console.log(`hello ${name}`);
}

aloha("stitch");
console.log(Math.min(4.5,5));
randNum = Math.random() * 10;
console.log(randNum); //random from 0 to 1 (non-inclusive)
console.log(Math.ceil(randNum));