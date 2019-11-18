function validate(){
    var current_date = new Date();
    const current_year = current_date.getFullYear();
  
    var year_of_birth = parseInt(prompt("Enter year of birth"));
    var age=current_year - year_of_birth;
    if(age<"18"){
      console.log("minor");
     
     } 
     else if ( age >="18" && age <="367"){
      console.log("youth");
     
     } 
    else {
      console.log("adult");
    }
    validate();
}
