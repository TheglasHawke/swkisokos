<?php

include "kapcsolat.php";

$felhasznalonev=$_POST["reg_felh"];
$jelszo=md5($_POST["reg_jelszo"]);
 
$sql="select * from szemely where szemely_felh='$felhasznalonev'"; 
$result=mysqli_query($conn,$sql);
 
if (mysqli_num_rows($result)==0)
{	
$sql = "INSERT INTO szemely 
VALUES (NULL,'$felhasznalonev', '$jelszo', 0)";

if (mysqli_query($conn, $sql)) {
    echo 1;//sikerult felvinni az uj felhasználót
} else {
    echo 0;//adatb hiba
}
}
else
	echo 2;//a felhasználó már létezik

mysqli_close($conn);
?>