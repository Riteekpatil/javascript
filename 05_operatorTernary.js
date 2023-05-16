console.log(` <<-------------************----------------->>`);
console.log(`        `);

var maleMarriageEligibility =function(gender,age,boyName){
    var result= gender=="Male" && age>=21?"you are eligible for Marriage":"you are Not eligible for Marriage"
    return result;


}
 var result =maleMarriageEligibility("Male",25,"Billgates");
console.log(`Hey Billgate ${result}`);
console.log(`               `);
var result =maleMarriageEligibility("Male",17,"Stew Jobs");
console.log(`Hey Stew Jobs ${result}`);
console.log(`                     `);
console.log(` <<-------------**************----------------->>`);
console.log(`        `);
var femaleMarriageEligibility =function(gender,age,girlName){
     var result= gender=="female" && age>=18?"you are eligible for Marriage":"you are Not eligible for Marriage"
return result;


}
var result =femaleMarriageEligibility("female",16,"jenifer");
console.log(`Hey jenifer ${result}`);
console.log(`               `);
var result =femaleMarriageEligibility("female",27,"Malinda Gates");
console.log(`Hey Malinda Gates ${result}`);



