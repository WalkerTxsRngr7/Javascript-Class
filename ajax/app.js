var obj = {
    latitude : 37.7577,
    longitude : -122.4376,
    currently : {
        summary : "clear",
        humidity : 0.93
    }
}
// console.log(obj.latitude);
// console.log(obj.currently.humidity);

var jsonString = JSON.stringify(obj);
console.log(jsonString);

var backToObject = JSON.parse(jsonString);
console.log(backToObject);