
console.log(` <<-------------******----------------->>`);
var greaterNumber= function(num1,num2){

    var result= num1>=num2 ?`Greater Number is:  ${num1}`:`Greater Number is:  `+num2;
    console.log(result);

}
greaterNumber(10,-10);
greaterNumber(800,899);
console.log(` <<-------------******----------------->>`);

var isEvenOrOddNum=function(num){
    var result =num%2==0 ?"Even Number.  ":" Odd Number.";
    return result;

}
var result =isEvenOrOddNum(29);
console.log(`The given number  29 is ${result}`);


var result=isEvenOrOddNum(44);
console.log(`The given number  44 is ${result}`);
var result =isEvenOrOddNum(0);
console.log(`The given number  0  is ${result}`);
var result=isEvenOrOddNum(101);
console.log(`The given number 101 is ${result}`);
console.log(` <<-------------******----------------->>`);


var wordLength =function(str){
    var len =str.length;
    var re=len%2==0 ? "Even":"Odd";
    return re;



}
var re = wordLength("javaScript");
console.log(`The Given Word "javaScript" length is:->  ${re}`);
var re = wordLength("developer");
console.log(`The Given Word "developer" length is:->  ${re}`);
var re = wordLength("Google");
console.log(`The Given Word "Google" length is:->  ${re}`);

wordLength("developer");
wordLength("Google");
