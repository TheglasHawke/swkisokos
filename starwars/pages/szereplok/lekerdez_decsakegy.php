<?php

include "../../fomenu/kapcsolat.php"; 
 
$bevitel1=$_POST['bevitel1']; 

$sql = "update szereplo set szereplo_nezettseg=szereplo_nezettseg+1 where szereplo_id=$bevitel1   ";
$result = mysqli_query($conn, $sql);




$sql = "SELECT * FROM szereplo where szereplo_id=$bevitel1";
$result = mysqli_query($conn, $sql);

$kimenet=array();

if (mysqli_num_rows($result) > 0) {
    // output data of each row
    while($row = mysqli_fetch_assoc($result)) {
        //echo "id: " . $row["film_id"]. " - Name: " . $row["film_cim"]. " " . $row["film_ev"]. "<br>";
		
		array_push($kimenet,$row);
	}
	print json_encode($kimenet);
} else {
    print 0;
}

mysqli_close($conn);
?> 