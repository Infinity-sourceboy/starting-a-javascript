// date

let date = new Date()
console.log(date.toDateString());
console.log(date.toString());
console.log(date.toLocaleDateString());
console.log(typeof date);

// let myDate = new Date(2024 , 2, 29)
// let myDate = new Date(2024 , 2, 29,5,3)
// let myDate = new Date("2024-01-25")
let myDate = new Date("01-24-2024")
console.log(myDate.toDateString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myDate.getTime());
console.log((Date.now()/1000));
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1);

console.log(newDate.toLocaleDateString('default',{
    weekday : "long"
}));
