<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$to = "richardamofa.software@gmail.com";
$subject = "New Contact Message";
$headers = "From: $email";

mail($to, $subject, $message, $headers);
?>
