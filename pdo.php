<?php

$host = "localhost";
$dbname = "playerprofile";
$user = "admin";
$password = "admin";

$db = new PDO("mysql:dbname=$dbname;host=$host" , $user , $password);

if($db){
	echo "<script>console.log('pdo is up and running');</script>";
	
	
	
}

?>