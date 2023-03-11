function validate()

{

    			

			

   if( document.contactform1.fname.value == "" )

   {

     alert( "Write Your Name?" );

     document.contactform1.fname.focus() ;

     return false;

   }

   

   {

	var a = document.contactform1.contact.value;

	if(a=="")

	{

	alert("please Enter the Mobile Number");

	document.contactform1.contact.focus();

	return false;

	}

	if(isNaN(a))

	{

	alert("Enter the valid Mobile Number(Like : 9998887777)");

	document.contactform1.contact.focus();

	return false;

	}

	if((a.length < 10) || (a.length > 15))

	{

	alert(" Your Mobile Number must be 1 to 15 Integers");

	document.contactform1.contact.select();

	return false;

	}

	}

	

   var email=document.contactform1.email.value;

		if(email=='')

	{

		alert('Please enter email id');

		document.contactform1.email.focus();

		return false;

	}

	else if(email.indexOf('@')==-1)

	{

		alert('Invalid email id check (@ or .\'s)');

		var len=document.contactform1.email.length;

		document.contactform1.email.select(0,len-1)

		document.contactform1.email.focus();

		return false;

	}

	else if(email.indexOf('.')==-1)

	{

		alert('Invalid email id check (@ or .\'s)');

		var len=document.contactform1.email.length;

		document.contactform1.email.select(0,len-1)

		document.contactform1.email.focus();

		return false;

	}

   

   	if( document.contactform1.requi.value == "" )

   {

     alert( "Write Your Message!" );

     document.contactform1.requi.focus() ;

     return false;

   }

	

	

		

}	