console.log("Enter year of birth");
process.stdin.once('data', (yearOfBirth)=>{
  var yearOfBirth = Number(yearOfBirth);
function validateAge(){
    var currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    var age=currentYear- yearOfBirth;
   
    if(age<18){
     console.log("minor");
     
     } 
     else if ( age >=18 && age <=36){
    console.log("youth");   
     } 
    else {
      console.log("adults");
    }
  }
  validateAge();
})
