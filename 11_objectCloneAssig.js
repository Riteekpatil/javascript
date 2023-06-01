
let bankSbi={

    bankName:"SBI Bank",
    accountNo:67896644,
    IFSC:"SBI00987",
    branch:"Pune"




};
console.log(`Before Cloning SBI properties`);
console.table(bankSbi);

let bankLocation={
 street:'Mkad Road',
 city:"Pune",
 pin:45678


};

Object.assign(bankSbi,bankLocation);
console.log(`After Cloning SBI properties`);
console.table(bankSbi);


let rateOfInterest={
     homeLoanInterest:"10%",
     personalLoanInterest:"9.5%",
     dueInterest:"8.90%"



}
let sbiDetails = Object.assign(bankSbi,bankLocation,rateOfInterest);
console.log(`Ater Merging SBI details`);
console.table(sbiDetails);
console.log(`< ===========================Traversing SBI Details=====================>`);
for (const key in sbiDetails) {
    let deatil=sbiDetails[key];
    console.log(`${key} ${deatil}`);
   
}