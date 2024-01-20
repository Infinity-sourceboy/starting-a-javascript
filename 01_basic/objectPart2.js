//object singleton through the constructure

const user = new Object() //this is the singleton based object
const user1 = {}//this is non singleton object
//both upper obj declaration are different but are same in obj creation but are object not any measure different in between .so only differnet in the singleton

//console.log(user1);

user.id = "123raj"
user.name = "rajesh"
user.isLoggedIn = false
//console.log(user);

const regularUser = {
    fullname : {
        userfullname : {
            firstname : "rajesh",
            lastname : "pradhan"
        }
    }
}
//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "c", 4 : "d"}

//const obj3 = {obj1,obj2}//it is the way combaine of two obj but it is not currect way
//another currect way is obj assign
const obj3 = Object.assign({},obj1,obj2)//basically is helps to more than two combain
const obj4 =Object.assign(obj1,obj2)//here obj1 = target,obj2 = seource 
// console.log(obj3);
// console.log(obj4);

//another ways is spred operator
const obj5 = {...obj1,...obj2}
//console.log(obj5);

//anther way is in the database combine time

const objuser = [
    {
        id : 1,
        email : "h@gmail.com"
    },
    {
        id : 1,
        email : "h@gmail.com"
    },
    {
        id : 1,
        email : "h@gmail.com"
    },
    {
        id : 1,
        email : "h@gmail.com"
    },
    {
        id : 1,
        email : "h@gmail.com"
    },
]

console.log(objuser[1].email);
console.log(user);

console.log(Object.keys(user)); //important here all keys are insert an one array
console.log((Object.values(user)));//imp here all values are insert an one array
console.log(Object.entries(user)); //here all keys and value pair are make one one array

console.log(user.hasOwnProperty('isLoggedIn')); // here it helps to check the that given keys are available or not
console.log(user.hasOwnProperty('firstname'));

