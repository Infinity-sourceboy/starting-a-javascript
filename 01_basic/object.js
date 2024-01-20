//object is created in 2 ways. 1. constructure(if obj is created by then it make a singleton)
   //                            2. literals ways(if obj is created by then it doesnot make a singleton)
    
   //object literals

   const mysymbol = Symbol("key1")

   const user = {
    name : "rajesh",
    "full name" : "rajesh pradhan", //through the (.) format we cannot axcess
    [mysymbol] :"key1", //axcess the symbol we use this way 24 lines check
    age : 20,
    location : "Bhubaneswar",
    email : "rajesh63pradhan@gmail.com",
    isLoggedIn : false ,
    lastLoginDays : ["monday","sunday"]

   }
//    //always keys type are string format like name,age etc.
//    console.log(user.email) //one to axcess an obj using .
//    console.log(user["email"]);//also it is axcess format of obj but our keys are create as a string so in the square bracket keys are calling as string format 
//    console.log(user["full name"]);
//    //console.log(user.full name); error format
//    console.log( user[mysymbol]);

//    user.email = "raj@gmail.com"
//    Object.freeze(user) //freeze helps to stoped the changes in th obj
//    user.email = "raj12@gmail.com"
//    console.log(user);

   user.greeting = function () {
    console.log("hello prachi");
   }
   user.greeting2 = function () {
    console.log('hello prachi my name is , ${this.email}');
   }
   console.log(user.greeting);
   console.log(user.greeting());
   console.log(user.greeting2());
 

