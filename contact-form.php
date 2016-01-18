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
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Untitled Document</title>
<meta http-equiv="refresh" content="5;URL=http://michaelgriffin.me/index.html">

<style type="text/css">
#container {
	width: 80%;
	height: auto;
	margin-top: 5%;
	margin-left: 10%;
	background-color: #fff;
	border-radius: 5px;
}

h1{
	font-family: 'Helvetica';
	color: #333;
	font-size: 2em;
	font-weight: 100;
	padding: 2%;
}

body {
	background-image: url(../img/Background%20img/Background2.jpg);
  	-webkit-background-size: cover;
  	-moz-background-size: cover;
  	-o-background-size: cover;
  	background-size: cover;
	color: #999;
}

.header {
	font-family: 'rochesterregular';
	color: #865D4E;
	font-size: 2.5em;
	font-weight: 100;
}

.loader {
	padding: 10px 10px 20px 10px;
}

</style>

</head>

<body>
<div id="container">

<center><h1><span class="header">Thank you</span><br />
We will be in contact with you as soon as possible</h1>
<img class="loader" src="img/loading.gif" /></h1></center>

</div>



</body>

</html>
EOD;
echo "$theResults";
?>
