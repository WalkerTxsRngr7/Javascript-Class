let movies = ["Lilo and Stitch", "hawaii 5-0", "Jurassic Park", "Glass"];
let elements = ["hello", 7, {message: "Hi mom"}, true];

// console.log(movies.length);

// let emptyArray = [];
// console.log(emptyArray.length);

// console.log(movies[1]);
// console.log(movies[9]);
// // iterating over an array
// console.log(movies);

// for (i = 0; i < movies.length; i++) {
//     console.log(movies[i]);
// }

// let i = 0;
// while (i < movies.length) {
//     //console.log(movies[i]);
//     i++;
// }

// let ofMovie;
// for (ofMovie of movies) { //for each loop
//     console.log(`of this ${ofMovie}`);
// }

// movies.forEach(function(myElement){
//     console.log(myElement);
// })

//movies.forEach(myElement=>console.log(myElement));

movies.push("Bohemian Rhapsody");
console.log(movies);
movies.unshift("Tomb Raider");
console.log(movies);
let lastMovie = movies.pop();
console.log(lastMovie);

movies.splice(1,2); //splice (index to start, number of elements to remove) >then reindexes the array
console.log(movies.length);
console.log(movies[movies.length - 1]);

console.log(movies);