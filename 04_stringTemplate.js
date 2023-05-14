

function stringHandOn(){
    console.log("<<-----------********-------->>");
    console.log("    Hey you are doing good,keep it up    ");
    console.log("                    ");
    var abc= "    Hey you are doing good,keep it up    ";
    var len=abc.length;
    console.log("    The Length Of the String is:-",len);
    console.log("                                   ");
    console.log("<<--------------***************----------");
    var triming= abc.trim();
    var qwe= triming.length;
    console.log("After leadig nd trailing, Length of String is:-",qwe);
    console.log("                ");
    var qwe= triming.length;
    console.log("Total Number of Remove Extra space count :-",len-qwe);
    console.log("                       ");

     var tyuui= triming.charAt(0);
     var bnm=triming.charAt(triming.length-1);
     console.log("First Character is:-",tyuui,"||","Last Character is:-",bnm);


     console.log(`                                  `);
     
    var totalw= triming.split(" ")
    console.log(`The Total no. of Word is:-${totalw.length}`);
    console.log(`                                            `);

    var index= abc.indexOf("good")
    
    console.log(`The Index of Good is:-${index}`);
    console.log(`                                  `);
     var substring=abc.slice(22, 40)
     console.log(`The Substring Starting from index 22 is :-${substring}`);
     console.log(`                                               `);
      
     var endtup = triming.endsWith("up");
     console.log(`Is give string ending with the Word " up" :-${endtup}`);

     console.log((`                                             `));
     
     var startup = triming.startsWith("Hey");
     console.log(`Is give string Starting with the Word "Hey" :-${startup}`);


  


   

 }
stringHandOn();


