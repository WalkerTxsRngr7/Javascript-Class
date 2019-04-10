let musketeers = ["Athos", "Porthos", "Aramis"];
for (i = 0; i < musketeers.length; i++) 
    console.log(musketeers[i]);

console.log("********************************");
musketeers.push("D'Artagnan");
musketeers.forEach(musk=>console.log(musk));

console.log("********************************");
musketeers.splice(2,1);

let ofMusk;
for (ofMusk of musketeers) 
    console.log(ofMusk);


console.log("********************************");
console.log("********************************");

const values = [3, 11, 7, 2, 9, 10];
let sum = 0;
for (i = 0; i < values.length; i++){
    sum = values[i] + sum;
}
console.log(sum);

console.log("********************************");
console.log("********************************");


const nums = [3, 11, 7, 2, 9, 10];
let max = 0;
for (i = 0; i < nums.length; i++){
    if (nums[i] > max) {
        max = nums[i];
    }
}
console.log(max);
