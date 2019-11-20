function validateAge(){
    var currentDate = new Date();
    const currentYear = currentDate.getFullYear();
  
    var yearOfBirth = prompt("Enter year of birth");
    var age=currentYear - yearOfBirth;
    if(age<18){
      console.log("minor");
     
     } 
     else if ( age >=18 && age <=36){
      console.log("youth");
     
     } 
    else {
      console.log("adult");
    }
    
}
validateAge();
