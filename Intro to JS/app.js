// Variable values.
// a = 2, b = 10, c = 102, d = 30, e = 40, f = 10, g = 10.

console.log("***************************************");
console.log("***************************************");

// Celsius to Fahrenheit
let c = 0;
let f = c * 9 / 5 + 32;
console.log(`${c} Celsius = ${f} Fahrenheit`);

console.log("***************************************");

//Multiplication Table
for (num = 2, i = 1; i <= 10; i++) {
    console.log(num * i);
}

console.log("***************************************");

//FizzBuzz
for (i = 1; i <= 100; i++) {
    if (i % 15 == 0) {
        console.log("FizzBuzz");
    }
    else if (i % 3 == 0) {
        console.log("Fizz");
    }
    else if (i % 5 == 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}