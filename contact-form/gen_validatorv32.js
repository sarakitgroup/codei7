function validate2()
{
      
   if( document.contactform2.name.value == "" )
   {
     alert( "Write Your Name?" );
     document.contactform2.name.focus() ;
     return false;
   }
   
   {
	var a = document.contactform2.contact.value;
	if(a=="")
	{
	alert("please Enter the Mobile Number");
	document.contactform2.contact.focus();
	return false;
	}
	if(isNaN(a))
	{
	alert("Enter the valid Mobile Number(Like : 9998887777)");
	document.contactform2.contact.focus();
	return false;
	}
	if((a.length < 10) || (a.length > 15))
	{
	alert(" Your Mobile Number must be 1 to 15 Integers");
	document.contactform2.contact.select();
	return false;
	}
	}
	
   var email=document.contactform2.email.value;
		if(email=='')
	{
		alert('Please enter email id');
		document.contactform2.email.focus();
		return false;
	}
	else if(email.indexOf('@')==-1)
	{
		alert('Invalid email id check (@ or .\'s)');
		var len=document.contactform2.email.length;
		document.contactform2.email.select(0,len-1)
		document.contactform2.email.focus();
		return false;
	}
	else if(email.indexOf('.')==-1)
	{
		alert('Invalid email id check (@ or .\'s)');
		var len=document.contactform2.email.length;
		document.contactform2.email.select(0,len-1)
		document.contactform2.email.focus();
		return false;
	}
	
	   
   	if( document.contactform2.message.value == "" )
   {
     alert( "Write Your Message!" );
     document.contactform2.message.focus() ;
     return false;
   }
	 
}