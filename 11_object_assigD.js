

let professor={

 name: "Hitesh",
 age:35,
 city:"Pune",
 subject:"Web Development",
 state:"MH",

 degrees:{
    engineering:"CSC",
    PHD:"Adv omputing"

 },
  certificates:[ "Hacker Rank Participation","IFF Course","Adv Prohgraming"],
   

  allDegree:function(){
                     
   console.log(`Profeesor degrees are:->  Engineering: ${this.degrees.engineering}, PHD: ${this.degrees.PHD}`);



  }

  }



  console.log(`Professor Object Properties:->`,professor);
  console.log(`Degree Object Proprties are :->`,professor.degrees);

  console.log(` Certificate array element are:`,professor.certificates);

  professor.allDegree();

  professor.totalExperience="14 year";
  console.log(`Total Experienceis:->`,professor.totalExperience);
  console.log(`Existing Property:-> `,professor);
  console.log(`Updating city name:-> `,professor.city="Mumbai");

console.log(`Adding one new Certificate:->`,professor.certificates.push("Oracle Certificate"),professor.certificates);


console.log(`Last Element of Array :-> ${professor.certificates[3]}`);




//   console.log(professor.degrees);
//   console.log(professor.certificates);