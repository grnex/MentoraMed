<?
$name  = $_REQUEST["fullname"];
$email = $_REQUEST["email"];
$phone = $_REQUEST["phone"];
$company = $_REQUEST["companyname"];
$msg   = $_REQUEST["message"];
$to    = "contato@mentoramed.com.br"; // ENTER YOUR EMAIL ADDRESS
if (isset($email) && isset($name) && isset($msg)) {
    $email_subject = "$name sent you a message via mentoramed.com.br"; // ENTER YOUR EMAIL SUBJECT
	$headers = "MIME-Version: 1.0" . "\r\n";
	$headers .= "Content-type:text/plain; charset=UTF-8" . "\r\n";
	$headers = 'From: ' . $name ."\r\n" .
        'Reply-To: ' . $email . "\r\n" .
        'X-Mailer: PHP/' . phpversion();
	$msg     = "
	From: $name,
	Email: $email,
	Subject: $phone,
	Company: $company,
	Message: $msg";
	
    $mail =  mail($to, $email_subject, $msg, $headers);

if($mail)
	{
		echo 'success';
	}

else
	{
		echo 'failed';
	}
}

?>
