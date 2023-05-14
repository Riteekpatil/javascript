

var square = function(num){
    console.log(`<-------------------No.1---------------->> `);
    console.log(`The Square of the given number is:-${result=num*num}` );

console.log(`<<-------------No.2----------------->>`);
console.log(`Type Of the function is:- ${typeof square}`);


}
square(5);
square(6);
square(25);
square(100);

var rectangle=function(length,width){
    
console.log(`<<-------------No.3----------------->>`);
 console.log(`Area Of the rectangle is:- ${rsult=length*width}`);


}
rectangle(499,917);

var virat="virat";
var Anushka="Anushka";
var swapvalue = function(num1,num2){
    console.log(`<<-------------No.4----------------->>`);
    console.log(`Before The Swape:-${num1} ${num2}`);
    temp=num1;
    num1=num2;
    num2=temp;
    console.log(`After  The Swape:-${num1} ${num2}`);

    

}
swapvalue(virat,Anushka);
swapvalue(1000,2000);

var js=function() {
    console.log(`<<-------------No.5----------------->>`);
    var string="JS the most popular language of internet";
    console.log(`${string}`);
    console.log(`Total Character is:-${string.length}`);
    
    var indx=string.charAt("6");
    console.log(`Index 6 character is:-${indx}`);
    var ind=string.charAt("11");
    console.log(`Index 11 character is:-${ind}`);


    console.log(`Last Character is:-${string.charAt(string.length-1)}`);

    console.log(`First character is:-${string.charAt(0)}`);

    var word= string.split(" ");
    console.log(`Totalnumber of wors is:-${word.length} ||And Square is:-${sq=7*7}`);



    

    

    
}
js();
