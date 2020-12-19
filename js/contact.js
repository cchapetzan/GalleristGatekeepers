
function openNav() {
  document.getElementById("mySideBar").style.width = "250px"; 
}


function closeNav() {
  document.getElementById("mySideBar").style.width = "0"; 
} 




function validateForm(){
		
		var name = document.forms["contactUS"]["name"].value;
		if(name=="")
	{
		alert("name must be filled out");
		return false;
	}
		var email = document.forms["contactUS"]["email"].value;
		if(email=="")
	{
		alert("Email must be filled out");
		return false;
	}
		var phone = document.forms["contactUS"]["phone"].value;
		if(phone=="")
	{
		alert("Phone must be filled out");
		return false;
	}
		var message = document.forms["contactUS"]["message"].value;
		if(message=="")
	{
		alert("Message must be filled out");
		return false;
	}
}


function myAlert(){
	alert("Thank you !");
}
	
	
	

	
	