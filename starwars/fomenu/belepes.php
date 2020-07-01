 <?php
 session_start();
include "kapcsolat.php";
$felhasznalonev=$_POST["felhasznalonev"];
$jelszo=md5($_POST["jelszo"]);
 
$sql = "SELECT * FROM szemely 
where szemely_felh='$felhasznalonev' and 
szemely_jelszo='$jelszo'";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    // output data of each row
   $row = mysqli_fetch_assoc($result);
   $_SESSION["login_id"]=$row["szemely_id"];
   $_SESSION["login_nev"]=$row["szemely_felh"];
   $_SESSION["login_rang"]=$row["szemely_rang"];
   print 1;
} else {
   print 0;
}

mysqli_close($conn);
?> 