<?php

// change this
define("EMAIL_ADDRESS", 'yourmail@domain.com');
define("EMAIL_SUBJECT", 'Contact Form Submission');

if(isset($_POST) && !empty($_POST)){

	$name = stripslashes($_POST['name']);
	$email = trim($_POST['email']);
	$message = stripslashes($_POST['message']);
	$error = '';

	// Check name
	if(!$name) {
		if (!$error) $error .= '<ul class="error">';
		$error .= '<li>Please enter your name.</li>';
	}

	// Check email
	if(!$email) {
		if (!$error) $error .= '<ul class="error">';
		$error .= '<li>Please enter your email address.</li>';
	}

	if($email && !validateEmail($email)) {
		if (!$error) $error .= '<ul class="error">';
		$error .= '<li>Please enter valid email address.</li>';
	}

	// Check message (length)
	if(!$message) {
		if (!$error) $error .= '<ul class="error">';
		$error .= "<li>Please enter your message.</li>";
	}

	if(!$error){
	$mail = mail(EMAIL_ADDRESS, EMAIL_SUBJECT, $message,
		 "From: ".$name." <".$email.">\r\n"
		."Reply-To: ".$email."\r\n"
		."X-Mailer: PHP/" . phpversion());

		if($mail) {
			echo '<div class="form-notification"><h3 class="success">Thank you, your enquiry has been submitted.</h3></div>'; // Email sent
		} else {
			echo '<div class="form-notification"><h3 class="warning">Email not sent. Please try again latter.<h3></div>'; // Email not sent
		}

	}else{
		$error .= '</ul>';
		echo '<div class="form-notification">'.$error.'</div>'; // Error
	}

}

function validateEmail($email){

	if($email == ''){
		return false;
	}else{
		$eregi = preg_replace('/[-0-9a-zA-Z.+_]+@[-0-9a-zA-Z.+_]+\.[a-zA-Z]{2,4}/', '', $email);
	}
	
	return empty($eregi) ? true : false;
}
?>