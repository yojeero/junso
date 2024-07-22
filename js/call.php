<?php

header('Content-Type: text/html; charset=utf-8');

$to = "your_mail@gmail.com";

if(!empty($_POST["name"]) && !empty($_POST["phone"])){ 
    
    $name = trim(htmlspecialchars(strip_tags($_POST["name"])));
    $phone = trim(htmlspecialchars(strip_tags($_POST["phone"])));    

$headers = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
$headers .= 'To: Salon' . "\r\n";
$headers .= 'From:  Salon' . "\r\n";
$headers .= 'Bcc:  Salon' . "\r\n";
    
    $message = '
    <html>
        <head>
            <title>Callback request</title>
        </head>
        <body style="font-family:Arial,sans-serif; background: #fff;">
            <div style="color: #000;font-size: 16px; padding: 10px;">
                <p>Name: '.$name.'</p>
                <p>Phone: '.$phone.'</p>        
            </div>
        </body>
    </html>
    ';
    
    if(mail($to, "Callback request ", $message, $headers))
    { echo "<div class='i_true'>Email sent!</div>"; 
    } else{ echo "<div class='i_false'>Something went wrong!</div>"; }
            
} else{ echo "<div class='i_false'>Enter your name and phone number!</div>"; }

?>

<style>
.i_true, i_false
{
	display : flex;		
	align-items : center;	
    justify-content : center;
    
    overflow : hidden;

	width : 100%;
	height : 100vh;

	font-size : 3rem;
	letter-spacing : .1em;
	text-transform : capitalize;

	text-align : center;	

	color : #fff;	
	background-color : #afd7e8;	
}
</style>