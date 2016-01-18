<?php

/*subject and email variables*/

$emailSubject = 'Online Portfolio';
$webmaster = 'michaelgriffin87@me.com';

/*gathering data variables*/

$nameField    = $_POST['Name'];
$emailField   = $_POST['e-mail'];
$messageField = $_POST['comment'];


$to      = "webMaster";
$subject = "emailSubject";
$message =
"
<html>
<head></head>
<body>
<strong>Website Contact Form</strong><br />
<br />
Customer's Name: <strong>$nameField</strong><br />
E-mail Address: <strong>$emailField</strong><br />
<br />
Message:<br /><strong>$messageField</strong>



</body>
</html>";

$headers = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$headers .= "To: <$webMaster>" . "\r\n";
$headers .= 'From: Website Contact Form <'.$email.'>' . "\r\n";

mail($to, $subject, $message, $headers); //<-- function to send email

$theResults = <<<EOD


EOD;
echo "$theResults";
?>
