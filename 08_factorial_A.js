function factorialOfNum(num){
    
    if (num==0) {
        console.log(`Factorial of zero is:-> 1`);
        
        
    } else { if (num==null||num==undefined||num==NaN) {
        console.log(`Invalid Input :-> ${num}`);
        
    }

        var factorial=1;
        for (let index=num; index>=1; index--) {


            factorial=factorial*index;
          
    
            
        }
        
    }
   
      return factorial;

    


}
console.log(`<<-------------------****------------------>>`);
 var facto=factorialOfNum(5);
 console.log(`Factorial of 5 is:->  ${facto}`);
 console.log(`                               `);
 var facto=factorialOfNum(3);
 console.log(`Factorial of 3 is:->  ${facto}`);
 console.log(`                                  `);
factorialOfNum(null);
console.log(`                             `);
var facto=factorialOfNum(8);
 console.log(`Factorial of 8 is:->  ${facto}`);
 console.log(`                                    `);
factorialOfNum(undefined);
console.log(`                                 `);
var facto=factorialOfNum(9);
 console.log(`Factorial of 9 is:->  ${facto}`);
 console.log(`                                    `);
 factorialOfNum(0);
 console.log(`                                      `);
 console.log(`<<-------------------****------------------>>`);
