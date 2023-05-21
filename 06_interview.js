
var tcs=function(gradeScore,hscScore,sscScore,candidateName){
    if (gradeScore>=70||hscScore>=80||sscScore>=90) {
        console.log(`Congrats! ${candidateName} you are eligible for TCS interview.`);
        
    } else {
        console.log(`Unfortunatly ${candidateName} you are not eligible for TCS interview`);
        
    }


}
tcs(80,86,90,"Riteek");
tcs(70,65,55,"Ajay");
tcs(60,79,88,"Shivam");