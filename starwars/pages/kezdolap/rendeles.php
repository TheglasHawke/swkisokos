<?php 
session_start();
include "../../fomenu/kapcsolat.php";

if(isset($_SESSION["login_id"]))
{
	
	

$bevitel1=$_POST["bevitel1"];
$bevitel2=$_POST["bevitel2"];
$bevitel3=date("Y-m-d");
$id=$_SESSION["login_id"];


$sql = 'INSERT INTO megrendeles VALUES (NULL, "Kész festmény megrendelés", "'.$bevitel2.'", "'.$bevitel1.'", "'.$bevitel3.'", '.$id.', 1, 0) ';
$result = mysqli_query($conn, $sql);
if ($result)
	$kimenet=1;
else
	$kimenet=0;

print $kimenet;




}
else 
	print 2;


mysqli_close($conn);



?>