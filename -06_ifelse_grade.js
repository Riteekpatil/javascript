
function voteEligibility(age){
    if (age==0||age<0||age>120) {
        console.log(`${age} Invalid data`);
        
    } else {
        if(age==undefined||age==null||age>120) {
            console.log(`${age} Invalid data`);
            
        } else {
            if (age<18) {
                console.log(`${age} You are not Eligible for vote `);
                
            } else {if (age>=18) {
                console.log(`${age} You are Eligible for Vote`);
                
            } else {
                
            }
                
            }
        }
        
    
        
    }

}
voteEligibility(45);
voteEligibility(17);
voteEligibility(8);
voteEligibility(20);
voteEligibility(-10);
voteEligibility(200);
voteEligibility(0);
voteEligibility(undefined);
voteEligibility(null);