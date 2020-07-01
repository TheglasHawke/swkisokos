<?php session_start(); ?>
 <!DOCTYPE html>
 <html>
<head>
 <meta charset="UTF-8">
<title>Star Wars Kisokos</title><link rel="shortcut icon" href="kepek/death.ico" />
  <base href="http://localhost/starwars/">

  
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>

  <script src="fomenu/fooldal.js"></script>
  <link rel="stylesheet" type="text/css" href="css/bejelentkezes.css">
  <link rel="stylesheet" type="text/css" href="css/fooldal.css">
  
</head>
<body>

<div id="menuhelye">
<?php
	if (isset($_SESSION["login_nev"]))
		require "fomenu/fooldal_belepett.php";
	else
		require "fomenu/fooldal_nembelepett.html";

?>

</div>

<div id="alsoresz">
<?php
	$page = isset($_GET['page']) ? $_GET['page'] : "main";
	if($page == "") $page = "main";
	
	if(file_exists("pages/" . $page . "/" . $page . ".php"))
		include "pages/" . $page . "/" . $page . ".php";
	else
		include '404.php';
?>
</div>
</body>
</html> 