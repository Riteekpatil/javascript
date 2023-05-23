

function countCharaA(str){
    var count=0;
    for (let index = 0; index <=str.length; index++) {
         let character=str.charAt(index);
         if (character=="a"||character=="A") {
            count++
            
         }

        
       
    }

    return count;
}
console.log(`<<-------------------*******------------------->>`);
console.log(`                              `);
let word=countCharaA("I AM Learning JavaScript,The Language if internet");
console.log(`Given String is:- "I AM Learning JavaScript,The Language if internet"`);
console.log(`Total caharcter ["A" nd "a"] Available in strin is :->  ${word}`);
console.log(`                                   `);
let wor=countCharaA("My favourite movie is LAggAn");
console.log(`Given String is:- "My favourite movie is LAggAn"`);
console.log(`Total caharcter ["A" nd "a"] Available in strin is :->  ${wor}`);
console.log(`                                            `);
console.log(`<<-------------------*******------------------->>`);
