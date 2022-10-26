
function checkForm() 
{

  firstname = document.getElementById("firstname").value;
  secondname = document.getElementById("secondname").value;
  age = document.getElementById("age").value;
  ageNumeric = IsNumeric(age);
  email = document.getElementById("email").value;
  emailResult = checkEmail(email);
  referralYes = document.getElementById("referralYes").checked;
  referralNo = document.getElementById("referralNo").checked;
  membership = document.getElementById("membership").value;
  duration = document.getElementById("duration").value;
  
  
  


    if (firstname == "") 
    { 
	  hideAllErrors();
	  document.getElementById("firstnameError"). style.display = "inline";
	  document.getElementById("firstname").select();
	  document.getElementById("firstname").focus();
	  return false;
    }

    else if (secondname == "") 
    {   
	  hideAllErrors();
	  document.getElementById("secondnameError"). style.display = "inline";
	  document.getElementById("secondname").select();
	  document.getElementById("secondname").focus();
      return false;
    }

 
    else if (age == "") 
    {   
	  hideAllErrors();
	  document.getElementById("ageError"). style.display = "inline";
	  document.getElementById("age").select();
	  document.getElementById("age").focus();
	  return false;
    }
    
    else if (ageNumeric == false) 
    {   
	  hideAllErrors();
	  document.getElementById("ageError"). style.display = "inline";
	  document.getElementById("age").select();
	  document.getElementById("age").focus();
	  return false;
    }
    

    else if (age<16)
    {
	  hideAllErrors();
	  document.getElementById("ageError"). style.display = "inline";
	  document.getElementById("age").select();
	  document.getElementById("age").focus();
	  return false;
    }
   
 
    else if (email == "") 
   {
	  hideAllErrors();
	  document.getElementById("emailError"). style.display = "inline";
	  document.getElementById("email").select();
	  document.getElementById("email").focus();
	  return false;
    }
 
    else if (emailResult == false)
    {
    hideAllErrors();
    document.getElementById("emailError"). style.display = "inline";
    document.getElementById("email").select();
    document.getElementById("email").focus();
  return false;
    }
 

    else if (referralYes == "" && referralNo=="")
    {      
    hideAllErrors();
    document.getElementById("referralError"). style.display = "inline";
    document.getElementById("referralYes").select();
    document.getElementById("referralYes").focus();
    return false;       
    }
   

 
    else if (membership == "-----") 
    {
    hideAllErrors();
    document.getElementById("membershipError"). style.display = "inline";
    document.getElementById("membership").focus();
    return false;
    }


    else if (duration == "-----") 
    {
    hideAllErrors();
    document.getElementById("durationError"). style.display = "inline";
    document.getElementById("duration").focus();
    return false;
    }
    
  return true;

}



function IsNumeric(numstr)
{
    mystring = numstr;
    if (mystring.match(/^\d+$/ ) ) {
    
	    return true;
    }else{
	    return false;
    }
}


function checkEmail(inputvalue){	
    var pattern=/^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
    if(pattern.test(inputvalue)) {         
		return true;
    }else{   
		return false;
    }
}




function hideAllErrors()
{  
  document.getElementById("firstnameError").style.display = "none";
  document.getElementById("secondnameError").style.display = "none";
  document.getElementById("ageError").style.display = "none";
  document.getElementById("emailError").style.display = "none";  
  document.getElementById("referralError").style.display = "none";
  document.getElementById("membershipError").style.display = "none";
  document.getElementById("durationError").style.display = "none";
  

 }

 //Calculator
 function calculator(){
   //get value by ID
  age=document.getElementById("age").value;
  referralYes=document.getElementById("referralYes").checked;
  membership=document.getElementById("membership").value;
  var numMembers=document.getElementById("numMembers").value;
  var fee;

//if users choose "Individual" in Membership Type, the fee will be $50/per member
if(membership=="Individual"){
    fee=50;
}
//if users choose "Family" in Membership Type, the fee will change along with number of members
if(membership=="Family"){
  if(numMembers==2){
    fee=40;
  }
  else if(numMembers>2 && numMembers<5){
    fee=40-40*0.025*numMembers;
  }
  else if(numMembers>=5){
    fee=40-40*0.025*5;
  }
}
//5% dicsount for referraled member
if(referralYes==true){
  fee=fee*0.95;
}
//10% off for member aged 16-19  
if(age>=16 && age<=19){
  fee=fee*0.9;
}
//get fee (per member)
document.getElementById("fee").value=fee;
 }

