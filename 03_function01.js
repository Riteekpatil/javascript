
console.log("<<-------Two Function------->>");
function show1(){
    console.log("Showing  1st  Function");
}
show1();
 console.log("                                           .");
 function show2(){
    console.log("Showing  2nd  Function");
 }
 show2();
console.log("                                               .");
 console.log("<<------Personal Details------>>");
 var Riteek="Riteek";
 var Patil="Patil";
 var Raisoni="G.H.Raisoni";

  function PersonalDetails(firstName,lastName,collegeName){
    console.log("My Name is:- ",firstName,lastName);
    console.log("College Name is:- ",collegeName);

  }
  PersonalDetails(Riteek,Patil,Raisoni);


console.log("                                            .");
console.log("<<<<<<--------------------->>>>>>");


var a="virat";
var b="Anushka";
var  num1="1000";
var num2="2000";
function swapValuesDude(hubby,wife){
    console.log("Before The Swapping:-",hubby,wife);
    var temp = hubby;
    hubby=wife
    wife=temp;
    console.log("After The Swapping:-",hubby,wife);
    console.log("                                       ");



}
swapValuesDude(a ,b);
swapValuesDude(num1,num2);

console.log("                                 ");
console.log("<<-------Concatinate---------->>");

var num1= 10.23;
var num2= 600;
var num3=40;
var a="Hello";
var b=" Good";
var c=" Morning";
function addthree(x,y,z){
     
    var result=x+y+z;
    console.log("Addition is:-",result);

}

addthree(num1,num2,num3);
addthree(a,b,c);

function addition(num1,num2){
  var result = num1+num2;
  return result;

}
var abc = addition(100,200);
console.log(abc);
