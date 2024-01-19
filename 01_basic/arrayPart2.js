arr1 = new Array("a","ab","abc","abcd")
arr2 = new Array("abcde","abcdef","abcdefg")

// arr1.push(arr2)//here push method push the array in the given array
// console.log(arr1);

// arr3 = arr1.concat(arr2)
// console.log(arr3);

// let arr4 = [...arr1,...arr2] //spred operator here it all array value are convert into single value means spred it so it easily concat it.
// console.log(arr4);

// arr5 = [1,2,3,[4,5,[10,11,45,[78,100]],[100,120,152,[78,45789,457120]],[11,22,33,44]]]
// //make a arr5 to simple in the one array through the flat method it is possible
// arr8 = arr5.flat(2)//here 2 is the depth level
// console.log(arr8);
// arr6 = arr5.flat(Infinity)
// console.log(arr6);

// console.log(Array.isArray("rajesh")); //isarray check the given value is array or not
// console.log(Array.from("rajesh")); //from helps to convert the value to the array
// console.log(Array.from({name : "rajesh"})); //here from is not convert an array.here specife the which part will convert an array obj value part or key value.so it return empty value []
 
score1 = 100
score2 = 200
score3 = 300
console.log(Array.of(score1,score2,score3)); //output : [ 100, 200, 300 ]