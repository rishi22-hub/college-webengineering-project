function verifyPassword() {  
    var pw = document.getElementById("pass").value;  
   
     
     
     
    if(pw.length < 8) {  
       alert("**Password length must be atleast 8 characters");  
       return false;  
    }  
    
   
    if(pw.length > 15) {  
     alert("**Password length must not exceed 15 characters");  
       return false;  
    } 
    if(pw=="12345678"){
        alert("password correct");
        return true;
    } 
    alert("password incorrect");
    return false;
  }  