 console.log(`<<--------------------------------****---------------------------------->>`);
 console.log(` `);
const arrayNumbers=[20,31,40,25,23,11,29,9,60,2,11];

 console.log(`1. Given array:-> ${arrayNumbers}`);
 console.log(`                 `);
 let lengthArray=arrayNumbers.length;
 console.log(`2. Length of array ia :-> ${lengthArray}`);
 console.log(`                        `);
 var firstElement=arrayNumbers[0];
 console.log(`3. First Element is:-> ${firstElement}`);
 var lastElement=arrayNumbers[arrayNumbers.length-1];
 console.log(`   Last  Element is:-> ${lastElement}`);
 console.log(`                      `);
 var thlastElement=arrayNumbers[arrayNumbers.length-3];
 console.log(`4.Third  Last Element is:-> ${thlastElement}`);
 console.log(`                       `);
 console.log(`5. All Even Number`);

 for (const Elemenet of arrayNumbers) {

     if (Elemenet%2==0) {

         console.log(`Even Number is:-> ${Elemenet}`);
        
     }
       
        
    }
     console.log(`              `);
     console.log(`6. All Odd Number`);

 for (const Elem of arrayNumbers) {

     if (Elem%2!=0) {

         console.log(`Odd Number is:-> ${Elem}`);
        
     }
       
        
     }
     console.log(` `);
     var sume=0;
     for (let index = 0; index <=arrayNumbers.length; index++) {
        
       
        if (index%2==0) {
             var EvenPositin=arrayNumbers[index];
          
             sume=sume+EvenPositin;
           

        }
      
        
     }
    console.log(`7. Even Posotion Number Addition is:-> ${sume}`);

     console.log(` `);
     var add=0;
    for (let index = 0; index <=arrayNumbers.length; index++) {
        
       
      if (index%2!=0) {
       var oddp = arrayNumbers[index];
        
        add=add+oddp;
        
        
      }
      
        
    }
     console.log(`8. Odd Posotion Number Addition is:-> ${add}`);

 console.log(`                       `);
 console.log(`9. All This Number multiple by 5`);
 for (const multelement in arrayNumbers) {
     var multele=arrayNumbers[multelement]
    if (multele%5==0) {
             console.log(`   Number :-> ${multele}`);
        
     }
   
    }
          


















 console.log(`                          `);
 var sum=0;
for (const ind in arrayNumbers) {

    
   var num= arrayNumbers[ind]
    
        sum=sum+num;
    }
    console.log(`10. Sum of All Element is:-> ${sum}`);


console.log(`                           `);
   

var available=arrayNumbers.includes(115);
console.log(`11. Number 115 Avalibale in Array :->  ${available}`);
console.log(`                      `);

var avail=arrayNumbers.includes(23);
console.log(`12. Number 23 Avalibale in Array :->  ${avail}`);
console.log(`                                     `);

arrayNumbers.splice(3,0,55,66);
console.log(`13. Insert the Number 55,66 before index 3 :-> ${arrayNumbers}`);
console.log(`                     `);

arrayNumbers.splice(4,3);
console.log(`14. Delet Element Satrting from  index 4 :-> ${arrayNumbers}`);
console.log(`                     `);
console.log(`<<--------------------------------****---------------------------------->>`);