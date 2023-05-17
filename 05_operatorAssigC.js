console.log(`<<-----------------******---------------->>`);
console.log(`                                          `);
var education= function(gradScore,hscScore,sscScore,candidateName){


    var  result =gradScore>= 70 || hscScore>= 80  ||sscScore>90 ?` Your eligible for TCS interview`:`Unfortunatly you are not eligible for TCS interview`;
    return result;
}

var result =education(80,86,90,"Riteek");
console.log(`Congration Riteek ${result}`);
console.log(`                       `);
var result=education(70,65,55,"Ajay");
console.log(`Congration Ajay ${result}`);
console.log(`                            `);
var result= education(60,79,88,"Shubham");
console.log(`Shubham ${result}`);
console.log(`                                   `);
console.log(`<<------------------******---------------->>`);