// Square the given number x
function square1(x) {// TODO: complete the function code
    return x * x;
}

// Square the given number x
const square2 = x => x * x;// TODO: complete the function code

console.log(square1(0)); // Must show 0
console.log(square1(2)); // Must show 4
console.log(square1(5)); // Must show 25

console.log(square2(0)); // Must show 0
console.log(square2(2)); // Must show 4
console.log(square2(5)); // Must show 25

for (x=0;x<=10;x++) {
    console.log(square1(x));
}

console.log("****************************");

function min(num1, num2) {
    // if (num1 < num2)
    //     return num1;
    return(num1<num2 ? num1: num2);
    // else if (num1 > num2)
    //     return num2;
    // else if (num1 == num2)
    //     return num1;

}
console.log(min(4.5, 5)); // Must show 4.5
console.log(min(19, 9));  // Must show 9
console.log(min(1, 1));   // Must show 1

