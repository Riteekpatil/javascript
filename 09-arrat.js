

var arrayofRollNumber = [45,34,89,90,];
console.log(`type of ${ typeof arrayofRollNumber}`);

let len=arrayofRollNumber.length;
console.log(`leng of Array:-> ${len}`);   

const zeroindepostion =arrayofRollNumber[0];
console.log(`zero index postion Element is:->${zeroindepostion}`);
const ninetyelement =arrayofRollNumber[3];
console.log(`therd  index postion Element is:->${ninetyelement}`);
let arrayLength=arrayofRollNumber.length;
const lastlement=arrayofRollNumber[arrayLength-2]
console.log(`last element of in he indedx:->${lastlement}`);

arrayofRollNumber.push(98);
console.log(arrayofRollNumber);

arrayofRollNumber.unshift(11);
console.log(arrayofRollNumber);

////Removing last Element 
arrayofRollNumber.pop();
console.log(arrayofRollNumber);
///Rempving First Element
arrayofRollNumber.shift();
console.log(arrayofRollNumber);



var arrayofRollNumber = [45,34,89,90,];
//Upddating the arrat element

arrayofRollNumber[0]=999;
console.log(arrayofRollNumber);
arrayofRollNumber[arrayofRollNumber.length-1]=34;
console.log(arrayofRollNumber);

let str="rrururu itititit urebdb";
let word =str.split(" ");
console.log(word.length);

var lengthofarray=arrayofRollNumber.length;
 arrayofRollNumber[arrayofRollNumber.length-3]=7777;
console.log(arrayofRollNumber);


const subelement=arrayofRollNumber.slice(2);
console.log(subelement);

const removing =arrayofRollNumber.splice(3);
console.log(arrayofRollNumber);
console.log(removing);

//splice adding element random
var arrayofRollNumber = [45,34,89,90,];
console.log(arrayofRollNumber);
  
arrayofRollNumber.splice(2,0,56,56,56,555,999);
console.log(arrayofRollNumber);


//splice replace elemen;
var arrayofRollNumber = [45,34,89,90,];
console.log(arrayofRollNumber);
arrayofRollNumber.splice(2,1,999999,111111111111,222222);
console.log(arrayofRollNumber);
