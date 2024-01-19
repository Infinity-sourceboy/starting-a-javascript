// //array 
// let arr = [1 ,, 5 ,4 ,8 ,9]
// console.log(arr);
//  // In js array are start with the zero indexing means index value start with zero.

//  // In js array-copy operation create shallow copies (A shallow copy of an object is a copy whose properties 
// // share the same references (point to the same underlying values)
// // basically it is an object which is the take a reference and change in the main reference object)

// // deep copies is (A deep copy of an object is a copy whose properties do not share the same references 
// // (point to the same underlying values) it mean here is not change the main reference object value)

// let group = ["rajesh","pal","suman","biki","raj",1,2,,3,'@']
// console.log(typeof group);
// let grp = new Array(1,1,2,7,8)
// console.log(grp.push(10)); //output is 6 after the push grp array index will print that is 6.
// console.log(grp);
// console.log(group.pop());//output is the pop value is @ because in the array group @ is last ele is pop out
// grp.unshift(9)  //here unshift helpto add the value starting part of index only in 0 index area
// grp.shift()//here is the opposite of unshift it is removing the value in the 0 index 
// console.log(grp);

// console.log(grp.includes(9)); //o/p is the false it is giving boolean value 
// console.log(grp.indexOf(11));
// console.log(grp.indexOf(10));

// let newgrp = grp.join()//join helps to combaine and the convert the array obj to string datatype 
// console.log(typeof newgrp);

let arr = new Array(1,2,3,4,5)
console.log("Array is ",arr);
let sliceArr = arr.slice(1,3)
console.log(sliceArr);
console.log("after the slice operater array will be ",arr);
//slice method :
//basically slice method helps to print the value from given starting range to before value of given ending range 
//means if i will give range 1 to 3 it will print 1 index and 2 index not print the 3 index value
//it is not affect the main array
let spliceArr = arr.splice(1,3)
console.log(spliceArr);
console.log("after the splice operater array will be ",arr);
//splice method :
//but in the splice method pop out the value which range will give 
//means fisrt it affect the main array and pop out the value which range will give include the end index


