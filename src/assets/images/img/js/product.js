	/*<script src = "https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>*/
	
	var jQueryScript = document.createElement('script');  
			jQueryScript.setAttribute('src','https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js');
			document.head.appendChild(jQueryScript);

	$(document).ready(function() {
		$('#errFullname').hide();
		$('#errEmail').hide();
		$('#errMobileno').hide();
		$('#errCompany').hide();
		$('#errCity').hide();

		var fullname_err = true;
		var email_err = true;
		var mobileno_err = true;
		var company_err = true;
		var city_err = true;

		//Check full name validation
		$('#fullname').keypress(function(e) {	
			var arr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ";
		    var fnameStrCode;
		    if (window.event)
		    	fnameStrCode = e.keyCode;
		    else
		    	fnameStrCode = e.which;
		    var charStr = keychar = String.fromCharCode(fnameStrCode);
		    if (arr.indexOf(charStr) == -1)
		        return false;

			});
		
		/* $('#fullname').keyup(function() { */
		$('#fullname').keyup(function() {
			validate_fullname();
		});
		function validate_fullname() {
			var chkFullname = $("#fullname").val();
			if(chkFullname.length == "") {
				$('#errFullname').show();
				$('#errFullname').html("*Name cannot be blank");
				$('#errFullname').focus();
				$('#errFullname').css("color","red");
				fullname_err = false;
				return false;
			}
			else {
				$('#errFullname').hide();
			}	
			if(chkFullname.length <= 2) {
				$('#errFullname').show();
				$('#errFullname').html("*Too short");
				$('#errFullname').focus();
				$('#errFullname').css("color","red");
				$('#fullname').css("border-color","red");
				fullname_err = false;
				return false;
			}
			else {
				$('#errFullname').hide();
			}
			if(chkFullname.length > 2) {
				$('#errFullname').hide();
				$('#fullname').css("border-color","green");
				fullname_err = false;
				return false;
			}
			else {
				$('#fullname').css("border-color","");
				$('#errFullname').hide();
			}
		}
		
		//Check email validation
		/* $('#email').keyup(function() {
			validate_email();
		}); */
		$("#email").keyup(function() {
			var chk_email = $("#email").val();
		    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/i;
		    if (!filter.test(chk_email)) {
		    	$('#errEmail').show();
		        $("#errEmail").text("Email is not a valid");
		    	$('#errEmail').css("color","red");
		        email_err = false;
				return false;
		    } else {
		    	$('#errEmail').hide();
		    	$('#email').css("backgroundcolor","green");
		    }
		    if(chk_email.length == '') {
				$('#errEmail').show();
				$('#errEmail').html("*Email cannot be blank");
				$('#errEmail').css("color","red");
				email_err = false;
				return false;
			}
			else {
				$('#errEmail').hide();
			}
		 });

		/* Validation to mobile no */
		$('#mobileno').keyup(function() {
			validate_mobileno();
		});
		
		function validate_mobileno() {
			var mobilenoNum = $('#mobileno').val();
			var mobileno_num = mobilenoNum.replace(/[\\A-Za-z!"£$%^&\,*+_={};:'@#~,.Š\/<>?|`¬\]\[]/g,'');
			mobileno.value = mobileno_num;
			if(mobilenoNum.length == '') {
				$('#errMobileno').show();
				$('#errMobileno').html("*Mobile no. cannot be blank");
				$('#errMobileno').focus();
				$('#errMobileno').css("color","red");
				mobileno_err = false;
				return false;
			}
			else {
				$('#errMobileno').hide();
			}
			if(mobilenoNum.length < 10 ) {
				$('#errMobileno').show();
				$('#errMobileno').html("*Mobile no. contain 10 digit");
				$('#errMobileno').focus();
				$('#errMobileno').css("color","red");
				$('#mobileno').css("border-color","red");
				mobileno_err = false;
				return false;
			}			
			else {
			    $('#errMobileno').hide();
			}
			if(mobilenoNum.length == 10 ) {
				$('#errMobileno').hide();
				$('#mobileno').css("border-color","green");
				mobileno_err = false;
				return false;
			}
			else {
				$('#mobileno').css("border-color","");
				$('#errMobileno').hide();
			}
		}

		//Check company name validation
		$('#company').keyup(function() {
	    	validate_company();
	    });
		
	    function validate_company() {
			var companyStr = $('#company').val();
			var companyStr = companyStr.replace(/[^a-zA-Z-'\n\r.]+/g, '');
			company.value = companyStr;
			if(companyStr.length == '') {
				$('#errCompany').show();
				$('#errCompany').html("*Company cannot be blank!");
				$('#errCompany').css("color","red");
				company_err = false;
				return false;
			}
			else {
				$('#errCompany').hide();
			}
			if(companyStr.length <= 2 ) {
				$('#errCompany').show();
				$('#errCompany').html("*Too short");
				$('#errCompany').css("color","red");
				$('#company').css("border-color","red");
				company_err = false;
				return false;
			}
			else {
				$('#errCompany').hide();
			}
			if(companyStr.length >2 ) {
				$('#errCompany').hide();
				$('#company').css("border-color","green");
				company_err = false;
				return false;
			}
			else {
			    $('#company').css('border-color', '');
			    $('#errCompany').hide();
			}
		}

	  	//Check city name validation
		$('#city').keyup(function() {
	    	validate_city();
	    });
		
	    function validate_city() {
			var cityStr = $('#city').val();
			var city_Str = cityStr.replace(/[^a-zA-Z-'\n\r.]+/g, '');
			city.value = city_Str;
			if(cityStr.length == '') {
				$('#errCity').show();
				$('#errCity').html("*City cannot be blank!");
				$('#errCity').css("color","red");
				city_err = false;
				return false;
			}
			else {
				$('#errCity').hide();
			}
			if(cityStr.length <= 2 ) {
				$('#errCity').show();
				$('#errCity').html("*Too short");
				$('#errCity').css("color","red");
				$('#city').css("border-color","red");
				city_err = false;
				return false;
			}
			else {
				$('#errCity').hide();
			}
			if(cityStr.length > 2 ) {
				$('#errCity').hide();
				$('#city').css("border-color","green");
				city_err = false;
				return false;
			}
			else {
			    $('#city').css('border-color', '');
			    $('#errCity').hide();
			}
		}
	}); 	
	
/* Clear Modal textbox */
	$(function() {
        $('.modal').on('hidden.bs.modal', function(){
            $(this).removeData('bs.modal');
        });
    });
			
/* Validation for contact form for International */	
	var jQueryScript = document.createElement('script');  
			jQueryScript.setAttribute('src','https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js');
			document.head.appendChild(jQueryScript);

	$(document).ready(function() {
		$('#errDesig').hide();
		$('#errOrg').hide();			
		$('#errCompanyName').hide();
		$('#errContactPersion').hide();
		$('#errContactNumber').hide();
		$('#errAddress').hide();
		$('#errCityName').hide();
		$('#errPostalCode').hide();
		
		var desig_err = true;
		var org_err = true;
		var contactPersion_err =  true;
		var contactNumber_err =  true;
		var companyName_err = true;
		var companyNames_err = true;
		var cityName_err= true;
		var address_err = true;
		var postalCode_err =  true;

		//Check designation validation
		$('#designation').keypress(function(e) {	
			var arr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ";
		    var fnameStrCode;
		    if (window.event)
		    	fnameStrCode = e.keyCode;
		    else
		    	fnameStrCode = e.which;
		    var charStr = keychar = String.fromCharCode(fnameStrCode);
		    if (arr.indexOf(charStr) == -1)
				return false;
		});
		
		$('#designation').keyup(function() {
			validate_designation();
		});
		function validate_designation() {
			var chkDesig = $("#designation").val();
			if(chkDesig.length == "") {
				$('#errDesig').show();
				$('#errDesig').html("*Designation cannot be blank");
				$('#errDesig').focus();
				$('#errDesig').css("color","red");
				desig_err = false;
				return false;
			}
			else {
				$('#errDesig').hide();
			}	
			if(chkDesig.length <= 2) {
				$('#errDesig').show();
				$('#errDesig').html("*Too short");
				$('#errDesig').focus();
				$('#errDesig').css("color","red");
				$('#designation').css("border-color","red");
				desig_err = false;
				return false;
			}
			else {
				$('#errDesig').hide();
			}
			if(chkDesig.length > 2) {
				$('#errDesig').hide();
				$('#designation').css("border-color","green");
				desig_err = false;
				return false;
			}
			else {
				$('#designation').css("border-color","");
				$('#errDesig').hide();
			}
		}
		
		//Check Organisation validation
		$('#organisation').keypress(function(e) {	
			var arr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ";
		    var fnameStrCode;
		    if (window.event)
		    	fnameStrCode = e.keyCode;
		    else
		    	fnameStrCode = e.which;
		    var charStr = keychar = String.fromCharCode(fnameStrCode);
		    if (arr.indexOf(charStr) == -1)
				return false;
		});
		
		$('#organisation').keyup(function() {
			validate_organisation();
		});
		function validate_organisation() {
			var chkOrg = $("#organisation").val();
			if(chkOrg.length == "") {
				$('#errOrg').show();
				$('#errOrg').html("*Organisation cannot be blank");
				$('#errOrg').focus();
				$('#errOrg').css("color","red");
				org_err = false;
				return false;
			}
			else {
				$('#errOrg').hide();
			}	
			if(chkOrg.length <= 2) {
				$('#errOrg').show();
				$('#errOrg').html("*Too short");
				$('#errOrg').focus();
				$('#errOrg').css("color","red");
				$('#organisation').css("border-color","red");
				org_err = false;
				return false;
			}
			else {
				$('#errOrg').hide();
			}
			if(chkOrg.length > 2) {
				$('#errOrg').hide();
				$('#organisation').css("border-color","green");
				org_err = false;
				return false;
			}
			else {
				$('#organisation').css("border-color","");
				$('#errOrg').hide();
			}
		}
		
		//Validation for International contact form
		//Check company name validation
		$('#companyName').keypress(function(e) {	
			var arr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ";
		    var fnameStrCode;
		    if (window.event)
		    	fnameStrCode = e.keyCode;
		    else
		    	fnameStrCode = e.which;
		    var charStr = keychar = String.fromCharCode(fnameStrCode);
		    if (arr.indexOf(charStr) == -1)
				return false;
		});
		
		$('#companyName').keyup(function() {
			validate_companyname();
		});
		function validate_companyname() {
			var chkCompanyName = $("#companyName").val();
			if(chkCompanyName.length == "") {
				$('#errCompanyName').show();
				$('#errCompanyName').html("*Company cannot be blank");
				$('#errCompanyName').focus();
				$('#errCompanyName').css("color","red");
				companyName_err = false;
				return false;
			}
			else {
				$('#errCompanyName').hide();
			}	
			if(chkCompanyName.length <= 2) {
				$('#errCompanyName').show();
				$('#errCompanyName').html("*Too short");
				$('#errCompanyName').focus();
				$('#errCompanyName').css("color","red");
				$('#companyName').css("border-color","red");
				companyName_err = false;
				return false;
			}
			else {
				$('#errCompanyName').hide();
			}
			if(chkCompanyName.length > 2) {
				$('#errCompanyName').hide();
				$('#companyName').css("border-color","green");
				companyName_err = false;
				return false;
			}
			else {
				$('#companyName').css("border-color","");
				$('#errCompanyName').hide();
			}
		}
		//Check contact person validation
		$('#contactPerson').keypress(function(e) {	
			var arr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ";
		    var fnameStrCode;
		    if (window.event)
		    	fnameStrCode = e.keyCode;
		    else
		    	fnameStrCode = e.which;
		    var charStr = keychar = String.fromCharCode(fnameStrCode);
		    if (arr.indexOf(charStr) == -1)
				return false;
		});
		
		$('#contactPerson').keyup(function() {
			validate_contactPerson();
		});
		function validate_contactPerson() {
			var chkContactPerson = $("#contactPerson").val();
			if(chkContactPerson.length == "") {
				$('#errContactPersion').show();
				$('#errContactPersion').html("*Contact Person cannot be blank");
				$('#errContactPersion').focus();
				$('#errContactPersion').css("color","red");
				contactPersion_err = false;
				return false;
			}
			else {
				$('#errContactPersion').hide();
			}	
			if(chkOrg.length <= 2) {
				$('#errContactPersion').show();
				$('#errContactPersion').html("*Too short");
				$('#errContactPersion').focus();
				$('#errContactPersion').css("color","red");
				$('#contactPerson').css("border-color","red");
				contactPersion_err = false;
				return false;
			}
			else {
				$('#errContactPersion').hide();
			}
			if(chkOrg.length > 2) {
				$('#errContactPersion').hide();
				$('#contactPerson').css("border-color","green");
				contactPersion_err = false;
				return false;
			}
			else {
				$('#contactPerson').css("border-color","");
				$('#errContactPersion').hide();
			}
		}

		/* Validation to Contact Number */
		$('#contactNumber').keyup(function() {
			validate_contactnumber();
		});
		
		function validate_contactnumber() {
			var contactNum = $('#contactNumber').val();
			var contact_num = contactNum.replace(/[\\A-Za-z!"£$%^&\,*+_={};:'@#~,.Š\/<>?|`¬\]\[]/g,'');
			contactNumber.value = contact_num;
			if(contactNum.length == '') {
				$('#errContactNumber').show();
				$('#errContactNumber').html("*Contact no. cannot be blank");
				$('#errContactNumber').focus();
				$('#errContactNumber').css("color","red");
				contactNumber_err = false;
				return false;
			}
			else {
				$('#errContactNumber').hide();
			}
			if(contactNum.length < 13 ) {
				$('#errContactNumber').show();
				$('#errContactNumber').html("*Contact no. contain 13 digit");
				$('#errContactNumber').focus();
				$('#errContactNumber').css("color","red");
				$('#contactNumber').css("border-color","red");
				contactNumber_err = false;
				return false;
			}			
			else {
			    $('#errContactNumber').hide();
			}
			if(contactNum.length == 10 ) {
				$('#errContactNumber').hide();
				$('#contactNumber').css("border-color","green");
				contactNumber_err = false;
				return false;
			}
			else {
				$('#contactNumber').css("border-color","");
				$('#errContactNumber').hide();
			}
		}
		
		/* Validation to Address */
		$('#address').keyup(function() {
			validate_address();
		});
		
		function validate_address() {
			var chkAddress = $("#address").val();
			if(chkAddress.length == "") {
				$('#errAddress').show();
				$('#errAddress').html("*Address cannot be blank");
				$('#errAddress').focus();
				$('#errAddress').css("color","red");
				address_err = false;
				return false;
			}
			else {
				$('#address').css("border-color","green");
				contactNumber_err = false;
				$('#errAddress').hide();
			}
		}
		    
	  //Check city name validation
		$('#cityName').keypress(function(e) {	
			var arr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ";
		    var fnameStrCode;
		    if (window.event)
		    	fnameStrCode = e.keyCode;
		    else
		    	fnameStrCode = e.which;
		    var charStr = keychar = String.fromCharCode(fnameStrCode);
		    if (arr.indexOf(charStr) == -1)
				return false;
		});
		
		$('#cityName').keyup(function() {
			validate_cityname();
		});
		function validate_cityname() {
			var chkCityName = $("#cityName").val();
			if(chkCityName.length == "") {
				$('#errCityName').show();
				$('#errCityName').html("*City cannot be blank");
				$('#errCityName').focus();
				$('#errCityName').css("color","red");
				cityName_err = false;
				return false;
			}
			else {
				$('#errCityName').hide();
			}	
			if(chkCityName.length <= 2) {
				$('#errCityName').show();
				$('#errCityName').html("*Too short");
				$('#errCityName').focus();
				$('#errCityName').css("color","red");
				$('#cityName').css("border-color","red");
				cityName_err = false;
				return false;
			}
			else {
				$('#errCityName').hide();
			}
			if(chkCityName.length > 2) {
				$('#errCityName').hide();
				$('#cityName').css("border-color","green");
				cityName_err = false;
				return false;
			}
			else {
				$('#cityName').css("border-color","");
				$('#errCityName').hide();
			}
		}		
	});

	/* Validation for contact form for National */	
	var jQueryScript = document.createElement('script');  
			jQueryScript.setAttribute('src','https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js');
			document.head.appendChild(jQueryScript);

	$(document).ready(function() {
		$('#errCompanyNameInd').hide();
		$('#errContactPersonInd').hide();
		$('#errContactNumberInd').hide();
		$('#errAddressInd').hide();
		$('#errCityNameInd').hide();
		$('#errPostalCodeInd').hide();
		$('#errEmailInd').hide();
		
		var companyNameInd_err = true;
		var contactPersonInd_err =  true;
		var contactNumberInd_err =  true;
		var cityNameInd_err= true;
		var addressInd_err = true;
		var cityNameInd_err = true;
		var postalCodeInd_err =  true;
		var emailInd_err = true;

		//Check Company name validation
		$('#companyNameInd').keypress(function(e) {	
			var arr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ";
		    var fnameStrCode;
		    if (window.event)
		    	fnameStrCode = e.keyCode;
		    else
		    	fnameStrCode = e.which;
		    var charStr = keychar = String.fromCharCode(fnameStrCode);
		    if (arr.indexOf(charStr) == -1)
				return false;
		});
		
		$('#companyNameInd').keyup(function() {
			validate_companynameind();
		});
		function validate_companynameind() {
			var chkCompanyName = $("#companyNameInd").val();
			if(chkCompanyName.length == "") {
				$('#errCompanyNameInd').show();
				$('#errCompanyNameInd').html("*Company cannot be blank");
				$('#errCompanyNameInd').focus();
				$('#errCompanyNameInd').css("color","red");
				companyNameInd_err = false;
				return false;
			}
			else {
				$('#errCompanyNameInd').hide();
			}	
			if(chkCompanyName.length <= 2) {
				$('#errCompanyNameInd').show();
				$('#errCompanyNameInd').html("*Too short");
				$('#errCompanyNameInd').focus();
				$('#errCompanyNameInd').css("color","red");
				$('#companyNameInd').css("border-color","red");
				companyNameInd_err = false;
				return false;
			}
			else {
				$('#errCompanyNameInd').hide();
			}
			if(chkCompanyName.length > 2) {
				$('#errCompanyNameInd').hide();
				$('#companyNameInd').css("border-color","green");
				companyNameInd_err = false;
				return false;
			}
			else {
				$('#companyNameInd').css("border-color","");
				$('#errCompanyNameInd').hide();
			}
		}
		
		//Check Contact Person validation
		$('#contactPersonInd').keypress(function(e) {	
			var arr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ";
		    var fnameStrCode;
		    if (window.event)
		    	fnameStrCode = e.keyCode;
		    else
		    	fnameStrCode = e.which;
		    var charStr = keychar = String.fromCharCode(fnameStrCode);
		    if (arr.indexOf(charStr) == -1)
				return false;
		});
		
		$('#contactPersonInd').keyup(function() {
			validate_contactpersonind();
		});
		function validate_contactpersonind() {
			var chkContactPerson = $("#contactPersonInd").val();
			if(chkContactPerson.length == "") {
				$('#errContactPersonInd').show();
				$('#errContactPersonInd').html("*Contact Person cannot be blank");
				$('#errContactPersonInd').focus();
				$('#errContactPersonInd').css("color","red");
				contactPersonInd_err = false;
				return false;
			}
			else {
				$('#errContactPersonInd').hide();
			}	
			if(chkContactPerson.length <= 2) {
				$('#errContactPersonInd').show();
				$('#errContactPersonInd').html("*Too short");
				$('#errContactPersonInd').focus();
				$('#errContactPersonInd').css("color","red");
				$('#contactPersonInd').css("border-color","red");
				contactPersonInd_err = false;
				return false;
			}
			else {
				$('#errContactPersonInd').hide();
			}
			if(chkContactPerson.length > 2) {
				$('#errContactPersonInd').hide();
				$('#contactPersonInd').css("border-color","green");
				contactPersonInd_err = false;
				return false;
			}
			else {
				$('#contactPersonInd').css("border-color","");
				$('#errContactPersonInd').hide();
			}
		}
		
		/* Validation to Contact Number */
		$('#contactNumberInd').keyup(function() {
			validate_contactnumberind();
		});
		
		function validate_contactnumberind() {
			var contactNum = $('#contactNumberInd').val();
			var contact_num = contactNum.replace(/[\\A-Za-z!"£$%^&\,*+_={};:'@#~,.Š\/<>?|`¬\]\[]/g,'');
			contactNumberInd.value = contact_num;
			if(contactNumInd.length == '') {
				$('#errContactNumberInd').show();
				$('#errContactNumberInd').html("*Contact no. cannot be blank");
				$('#errContactNumberInd').focus();
				$('#errContactNumberInd').css("color","red");
				contactNumberInd_err = false;
				return false;
			}
			else {
				$('#errContactNumberInd').hide();
			}
			if(contactNum.length < 10 ) {
				$('#errContactNumber').show();
				$('#errContactNumber').html("*Contact no. contain 10 digit");
				$('#errContactNumber').focus();
				$('#errContactNumber').css("color","red");
				$('#contactNumber').css("border-color","red");
				contactNumber_err = false;
				return false;
			}			
			else {
			    $('#errContactNumber').hide();
			}
			if(contactNum.length == 10 ) {
				$('#errContactNumber').hide();
				$('#contactNumber').css("border-color","green");
				contactNumber_err = false;
				return false;
			}
			else {
				$('#contactNumber').css("border-color","");
				$('#errContactNumber').hide();
			}
		}
		
		
		//Check City name validation
		$('#cityNameInd').keypress(function(e) {	
			var arr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ";
		    var fnameStrCode;
		    if (window.event)
		    	fnameStrCode = e.keyCode;
		    else
		    	fnameStrCode = e.which;
		    var charStr = keychar = String.fromCharCode(fnameStrCode);
		    if (arr.indexOf(charStr) == -1)
				return false;
		});
		
		$('#cityNameInd').keyup(function() {
			validate_citynameind();
		});
		function validate_citynameind() {
			var chkCityNameInd = $("#cityNameInd").val();
			if(chkCityNameInd.length == "") {
				$('#errCityNameInd').show();
				$('#errCityNameInd').html("*City cannot be blank");
				$('#errCityNameInd').focus();
				$('#errCityNameInd').css("color","red");
				cityNameInd_err = false;
				return false;
			}
			else {
				$('#errCityNameInd').hide();
			}	
			if(chkCityNameInd.length <= 2) {
				$('#errCityNameInd').show();
				$('#errCityNameInd').html("*Too short");
				$('#errCityNameInd').focus();
				$('#errCityNameInd').css("color","red");
				$('#cityNameInd').css("border-color","red");
				cityNameInd_err = false;
				return false;
			}
			else {
				$('#errCityNameInd').hide();
			}
			if(chkCityNameInd.length > 2) {
				$('#errCityNameInd').hide();
				$('#cityNameInd').css("border-color","green");
				cityNameInd_err = false;
				return false;
			}
			else {
				$('#cityNameInd').css("border-color","");
				$('#errCityNameInd').hide();
			}
		}
						
	});	