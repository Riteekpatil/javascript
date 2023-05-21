

 var str="i am very good IT Developer";
 var count=0;
  for (let index = 0; index < str.length; index++) {
        

    var vowels=str.charAt(index);
   
    if (vowels=="A"||vowels=="E"||vowels=="I"||vowels=="O"||vowels=="U"||vowels=="a"||vowels=="e"||vowels=="i"||vowels=="o"||vowels=="u") {
      
       
       count++;
     }
     
       
 
   
    
  }

  console.log(`<<--------------*****--------------->>`);
  console.log(`Given String is:-> ${str}`);

  console.log(`Total number of vowels :->  ${count}`);


  console.log(`<<--------------*****---------------->>`);

  function cube(){
    var result=0;

    

    for (let index = 1; index<=5; index++) {

        var resu=index*index*index;
        console.log(`The cube Of given Number is:-> ${resu}`)
        
       result=result+resu;
    
    }

        

   console.log(`                                  `);
     console.log(`The Sum of cube are-> ${result}`);


  }
  cube();
  console.log(`                           `);
  console.log(`<<--------------*******---------->>`);

     function oddPostitionChars(word){
        console.log(`Given String is:-> ${word}`);
        var reverstr="";
        for (let index = 0; index < word.length; index++) {
            var oddwd=word.charAt(index);

            if (index%2!=0 && oddwd!=" ") {
                reverstr=reverstr.concat(oddwd);
                
                
                
            }
           

            
            
                
    
            }
           

            console.log(`Odd Postion Character :-> ${reverstr}`);
            
        } 
        
     
     oddPostitionChars("Hard Work always pays back");
     oddPostitionChars("Soon i will be Angular IT Champ");


